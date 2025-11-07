import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

const STYLE_OPTIONS = ['Casual', 'Chic', 'Streetwear', 'Minimal', 'Sport']
const COLOR_OPTIONS = ['Noir', 'Blanc', 'Bleu', 'Beige', 'Vert', 'Rouge']

export default function UserPreferences({ onChange }) {
  const [styles, setStyles] = useState([])
  const [colors, setColors] = useState([])
  const [autoAI, setAutoAI] = useState(true)

  const toggle = (value, list, setter) => {
    const exists = list.includes(value)
    const updated = exists ? list.filter((v) => v !== value) : [...list, value]
    setter(updated)
    onChange?.({ styles: value ? (setter === setStyles ? updated : styles) : styles, colors: setter === setColors ? updated : colors, autoAI })
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <div className="rounded-xl border bg-white p-6">
        <div className="mb-4 flex items-center gap-2 text-gray-700">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-sm font-medium">Préférences</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">Styles préférés</p>
            <div className="flex flex-wrap gap-2">
              {STYLE_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => toggle(s, styles, setStyles)}
                  className={`rounded-full border px-3 py-1 text-sm transition ${styles.includes(s) ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">Couleurs préférées</p>
            <div className="flex flex-wrap gap-2">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c}
                  onClick={() => toggle(c, colors, setColors)}
                  className={`rounded-full border px-3 py-1 text-sm transition ${colors.includes(c) ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">Paramètres IA</p>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={autoAI} onChange={(e) => { setAutoAI(e.target.checked); onChange?.({ styles, colors, autoAI: e.target.checked }) }} />
              <span className="text-sm text-gray-700">Suggestions automatiques</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
