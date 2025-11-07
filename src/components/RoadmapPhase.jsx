import { CheckCircle2, Clock, Target } from 'lucide-react'

export default function RoadmapPhase() {
  const phases = [
    {
      title: 'Phase 1 — Infrastructure & Upload',
      items: [
        'Stockage Supabase + sécurité',
        'Upload par glisser-déposer avec prévisualisation',
        'Page de préférences utilisateur',
      ],
      status: 'En cours',
    },
    {
      title: 'Phase 2 — Garde-robe & Catalogue',
      items: [
        'Base de données des vêtements + filtres',
        'Interface de garde-robe interactive',
        'Gestion des collections',
      ],
      status: 'À venir',
    },
    {
      title: 'Phase 3 — Moteur IA',
      items: [
        'Intégration API IA générative',
        'Module de génération NEXUS-AI',
        'File d’attente et suivi temps réel',
      ],
      status: 'À venir',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="rounded-xl border bg-white p-6">
        <div className="mb-4 flex items-center gap-2 text-gray-700">
          <Target className="h-4 w-4" />
          <span className="text-sm font-medium">Feuille de route</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((p) => (
            <div key={p.title} className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
                {p.status === 'En cours' ? (
                  <Clock className="h-4 w-4 text-amber-500" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-gray-300" />
                )}
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-gray-600">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="mt-3 text-xs text-gray-500">Statut: {p.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
