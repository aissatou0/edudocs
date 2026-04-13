import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Catalogue from './pages/Catalogue'
import FicheDocument from './pages/FicheDocument'
import Checklist from './pages/Checklist'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/document/:id" element={<FicheDocument />} />
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
    </>
  )
}