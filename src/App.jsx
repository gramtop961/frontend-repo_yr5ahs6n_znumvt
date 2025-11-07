import { useState } from 'react'
import HeroHeader from './components/HeroHeader'
import PhotoUpload from './components/PhotoUpload'
import UserPreferences from './components/UserPreferences'
import RoadmapPhase from './components/RoadmapPhase'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preferences, setPreferences] = useState({ styles: [], colors: [], autoAI: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <HeroHeader />
      <PhotoUpload onImageSelect={setSelectedFile} />
      <UserPreferences onChange={setPreferences} />
      <RoadmapPhase />

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-500">
        <div className="rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-black/5">
          <p>
            Fichier sélectionné: {selectedFile ? selectedFile.name : 'aucun'} · Styles: {preferences.styles.join(', ') || '—'} · Couleurs: {preferences.colors.join(', ') || '—'} · IA automatique: {preferences.autoAI ? 'activée' : 'désactivée'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
