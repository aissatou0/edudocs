import { useState } from 'react'
import { Link } from 'react-router-dom'
import { documents, categories } from '../data/documents'

export default function Catalogue() {
  const [categorieActive, setCategorieActive] = useState('Tous')
  const [recherche, setRecherche] = useState('')

  const difficulteColor = {
    'Facile': { bg: '#c6f6d5', text: '#22543d' },
    'Moyen': { bg: '#fefcbf', text: '#744210' },
    'Difficile': { bg: '#fed7d7', text: '#742a2a' }
  }

  const docsFiltres = documents.filter(doc => {
    const matchCat = categorieActive === 'Tous' || doc.categorie === categorieActive
    const matchRecherche = doc.titre.toLowerCase().includes(recherche.toLowerCase())
    return matchCat && matchRecherche
  })

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1a365d, #2b6cb0)',
        borderRadius: '16px',
        padding: '2.5rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          📋 Vos démarches administratives
        </h1>
        <p style={{ opacity: 0.85, fontSize: '1.05rem' }}>
          Trouvez un document, cliquez dessus et suivez la procédure pas à pas
        </p>

        {/* Barre de recherche */}
        <div style={{ marginTop: '1.5rem', position: 'relative', maxWidth: '480px', margin: '1.5rem auto 0' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem' }}>🔍</span>
          <input
            type="text"
            placeholder="Rechercher un document..."
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 42px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
          />
        </div>
      </div>

      {/* Filtres catégories */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategorieActive(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: '2px solid',
              borderColor: categorieActive === cat ? '#2b6cb0' : '#cbd5e0',
              background: categorieActive === cat ? '#2b6cb0' : 'white',
              color: categorieActive === cat ? 'white' : '#4a5568',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de documents */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.2rem'
      }}>
        {docsFiltres.map(doc => (
          <Link to={`/document/${doc.id}`} key={doc.id} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'white',
              borderRadius: '14px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              border: '1.5px solid #e2e8f0',
              transition: 'all 0.2s',
              cursor: 'pointer',
              height: '100%'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                e.currentTarget.style.borderColor = '#2b6cb0'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '2.2rem' }}>{doc.emoji}</span>
                <span style={{
                  background: difficulteColor[doc.difficulte].bg,
                  color: difficulteColor[doc.difficulte].text,
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>{doc.difficulte}</span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.4rem', color: '#1a202c' }}>
                {doc.titre}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '1rem', lineHeight: '1.5' }}>
                {doc.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  background: '#ebf8ff',
                  color: '#2b6cb0',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: '500'
                }}>{doc.categorie}</span>
                <span style={{ fontSize: '0.8rem', color: '#a0aec0' }}>⏱ {doc.delai}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {docsFiltres.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#a0aec0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <p style={{ fontSize: '1.1rem' }}>Aucun document trouvé</p>
        </div>
      )}
    </div>
  )
}