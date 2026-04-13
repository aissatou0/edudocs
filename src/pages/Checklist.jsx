import { useState } from 'react'
import { Link } from 'react-router-dom'
import { documents } from '../data/documents'

export default function Checklist() {
  const [coche, setCoche] = useState({})

  const tousLesDocs = documents.flatMap(doc =>
    doc.documentsRequis.map(d => ({ document: d, provenance: doc.titre, emoji: doc.emoji, docId: doc.id }))
  )

  // Dédoublonner
  const unique = tousLesDocs.filter((item, index, self) =>
    index === self.findIndex(t => t.document === item.document)
  )

  const toggleDoc = (key) => {
    setCoche(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const nbCoche = Object.values(coche).filter(Boolean).length
  const progression = unique.length > 0 ? Math.round((nbCoche / unique.length) * 100) : 0

  const groupes = documents.map(doc => ({
    ...doc,
    docs: doc.documentsRequis
  }))

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* En-tête */}
      <div style={{
        background: 'linear-gradient(135deg, #1a365d, #2b6cb0)',
        borderRadius: '16px', padding: '2rem', color: 'white', marginBottom: '2rem', textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.4rem' }}>
          ✅ Ma Checklist de documents
        </h1>
        <p style={{ opacity: 0.85 }}>Cochez les documents que vous avez déjà rassemblés</p>
      </div>

      {/* Progression globale */}
      <div style={{
        background: 'white', borderRadius: '14px', padding: '1.5rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '2rem', border: '1.5px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontWeight: '700', fontSize: '1rem' }}>Progression globale</span>
          <span style={{
            fontWeight: '700', fontSize: '1.1rem',
            color: progression === 100 ? '#38a169' : '#2b6cb0'
          }}>{nbCoche} / {unique.length} documents — {progression}%</span>
        </div>
        <div style={{ background: '#e2e8f0', borderRadius: '20px', height: '14px' }}>
          <div style={{
            width: `${progression}%`,
            background: progression === 100 ? '#38a169' : 'linear-gradient(90deg, #2b6cb0, #63b3ed)',
            height: '14px', borderRadius: '20px', transition: 'width 0.4s ease'
          }} />
        </div>
        {progression === 100 && (
          <p style={{ marginTop: '10px', color: '#38a169', fontWeight: '600', textAlign: 'center' }}>
            🎉 Vous avez tous vos documents ! Vous êtes prêt(e) pour vos démarches.
          </p>
        )}
      </div>

      {/* Liste par démarche */}
      {groupes.map(groupe => {
        const nbGroupeCoche = groupe.docs.filter(d => coche[d]).length
        return (
          <div key={groupe.id} style={{
            background: 'white', borderRadius: '14px', padding: '1.2rem 1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: '1rem', border: '1.5px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.5rem' }}>{groupe.emoji}</span>
                <h3 style={{ fontWeight: '700', fontSize: '1rem', color: '#1a202c' }}>{groupe.titre}</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.8rem', color: '#718096' }}>{nbGroupeCoche}/{groupe.docs.length}</span>
                <Link to={`/document/${groupe.id}`} style={{
                  fontSize: '0.78rem', color: '#2b6cb0', fontWeight: '500',
                  background: '#ebf8ff', padding: '3px 10px', borderRadius: '6px'
                }}>
                  Voir procédure →
                </Link>
              </div>
            </div>

            {groupe.docs.map((doc, i) => (
              <div
                key={i}
                onClick={() => toggleDoc(doc)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 12px', borderRadius: '8px', cursor: 'pointer',
                  background: coche[doc] ? '#f0fff4' : '#f7fafc',
                  marginBottom: '6px', border: `1px solid ${coche[doc] ? '#9ae6b4' : '#e2e8f0'}`,
                  transition: 'all 0.15s'
                }}
              >
                <div style={{
                  width: '20px', height: '20px', borderRadius: '4px', flexShrink: 0,
                  border: `2px solid ${coche[doc] ? '#38a169' : '#cbd5e0'}`,
                  background: coche[doc] ? '#38a169' : 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s'
                }}>
                  {coche[doc] && <span style={{ color: 'white', fontSize: '12px', fontWeight: '700' }}>✓</span>}
                </div>
                <span style={{
                  fontSize: '0.9rem', fontWeight: '500',
                  color: coche[doc] ? '#276749' : '#2d3748',
                  textDecoration: coche[doc] ? 'line-through' : 'none'
                }}>
                  📄 {doc}
                </span>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}