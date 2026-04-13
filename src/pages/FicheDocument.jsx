import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { documents } from '../data/documents'

export default function FicheDocument() {
  const { id } = useParams()
  const doc = documents.find(d => d.id === parseInt(id))
  const [etapeActive, setEtapeActive] = useState(null)
  const [etapesTerminees, setEtapesTerminees] = useState([])

  if (!doc) return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <p>Document introuvable.</p>
      <Link to="/">← Retour</Link>
    </div>
  )

  const toggleEtape = (num) => {
    setEtapesTerminees(prev =>
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    )
  }

  const progression = Math.round((etapesTerminees.length / doc.etapes.length) * 100)

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Retour */}
      <Link to="/" style={{ color: '#2b6cb0', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '1.5rem' }}>
        ← Retour au catalogue
      </Link>

      {/* En-tête document */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        marginBottom: '1.5rem',
        border: '1.5px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '3rem' }}>{doc.emoji}</span>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#1a202c' }}>{doc.titre}</h1>
            <span style={{ background: '#ebf8ff', color: '#2b6cb0', padding: '3px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500' }}>
              {doc.categorie}
            </span>
          </div>
        </div>
        <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '1rem' }}>{doc.description}</p>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#718096' }}>
          <span>⏱ Délai estimé : <strong style={{ color: '#2d3748' }}>{doc.delai}</strong></span>
          <span>📋 {doc.etapes.length} étapes</span>
        </div>
      </div>

      {/* Barre de progression */}
      <div style={{
        background: 'white', borderRadius: '12px', padding: '1.2rem 1.5rem',
        marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1.5px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>
          <span>Ma progression</span>
          <span style={{ color: progression === 100 ? '#38a169' : '#2b6cb0' }}>{progression}%</span>
        </div>
        <div style={{ background: '#e2e8f0', borderRadius: '20px', height: '10px' }}>
          <div style={{
            width: `${progression}%`,
            background: progression === 100 ? '#38a169' : '#2b6cb0',
            height: '10px', borderRadius: '20px',
            transition: 'width 0.4s ease'
          }} />
        </div>
        {progression === 100 && (
          <p style={{ color: '#38a169', fontWeight: '600', marginTop: '8px', fontSize: '0.9rem' }}>
            🎉 Félicitations ! Vous avez complété toutes les étapes !
          </p>
        )}
      </div>

      {/* Étapes */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#2d3748' }}>
          📌 Procédure pas à pas
        </h2>

        {doc.etapes.map(etape => {
          const terminee = etapesTerminees.includes(etape.numero)
          const ouverte = etapeActive === etape.numero

          return (
            <div key={etape.numero} style={{
              background: 'white',
              borderRadius: '12px',
              marginBottom: '0.8rem',
              border: `1.5px solid ${terminee ? '#9ae6b4' : ouverte ? '#90cdf4' : '#e2e8f0'}`,
              overflow: 'hidden',
              transition: 'all 0.2s'
            }}>
              {/* En-tête étape */}
              <div
                onClick={() => setEtapeActive(ouverte ? null : etape.numero)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.2rem', cursor: 'pointer',
                  background: terminee ? '#f0fff4' : ouverte ? '#ebf8ff' : 'white'
                }}
              >
                {/* Checkbox */}
                <div
                  onClick={e => { e.stopPropagation(); toggleEtape(etape.numero) }}
                  style={{
                    width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                    border: `2px solid ${terminee ? '#38a169' : '#cbd5e0'}`,
                    background: terminee ? '#38a169' : 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  {terminee && <span style={{ color: 'white', fontSize: '13px', fontWeight: '700' }}>✓</span>}
                </div>

                {/* Numéro */}
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                  background: terminee ? '#c6f6d5' : '#ebf8ff',
                  color: terminee ? '#276749' : '#2b6cb0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: '700'
                }}>
                  {etape.numero}
                </div>

                <span style={{
                  fontWeight: '600', fontSize: '0.95rem', flex: 1,
                  color: terminee ? '#276749' : '#2d3748',
                  textDecoration: terminee ? 'line-through' : 'none'
                }}>
                  {etape.titre}
                </span>
                <span style={{ color: '#a0aec0', fontSize: '0.85rem' }}>{ouverte ? '▲' : '▼'}</span>
              </div>

              {/* Contenu déroulant */}
              {ouverte && (
                <div style={{ padding: '0 1.2rem 1.2rem 4.5rem', borderTop: '1px solid #e2e8f0' }}>
                  <p style={{ color: '#4a5568', lineHeight: '1.7', marginTop: '0.8rem', fontSize: '0.92rem' }}>
                    {etape.description}
                  </p>
                  {etape.lien && (
                    <a href={etape.lien} target="_blank" rel="noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      marginTop: '0.8rem', color: '#2b6cb0', fontWeight: '500', fontSize: '0.88rem',
                      background: '#ebf8ff', padding: '6px 14px', borderRadius: '8px'
                    }}>
                      🔗 Accéder au site officiel
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Documents requis */}
      <div style={{
        background: '#fffbeb', border: '1.5px solid #f6e05e',
        borderRadius: '12px', padding: '1.2rem 1.5rem'
      }}>
        <h3 style={{ fontWeight: '700', marginBottom: '0.8rem', color: '#744210' }}>
          📎 Documents à préparer
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {doc.documentsRequis.map((d, i) => (
            <span key={i} style={{
              background: 'white', border: '1px solid #f6e05e',
              padding: '4px 12px', borderRadius: '20px',
              fontSize: '0.83rem', color: '#744210', fontWeight: '500'
            }}>
              📄 {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}