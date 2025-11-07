import { Sparkles, Rocket } from 'lucide-react'

export default function HeroHeader() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center gap-3 text-indigo-600">
          <Rocket className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-wide">NEXUS-AI • Fitting Room</span>
        </div>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Essayage virtuel intelligent
            </h1>
            <p className="mt-2 max-w-2xl text-gray-600">
              Téléversez une photo, sélectionnez des préférences, puis explorez une garde-robe
              virtuelle propulsée par l’IA. Conçu pour une expérience fluide dès le premier jour.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Phase 1 · Upload & Préférences</span>
          </div>
        </div>
      </div>
    </header>
  )
}
