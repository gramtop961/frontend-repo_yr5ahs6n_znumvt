import { useState, useRef } from 'react'
import { Upload, Image as ImageIcon, X } from 'lucide-react'

export default function PhotoUpload({ onImageSelect }) {
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    const file = files?.[0]
    if (!file) return

    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validTypes.includes(file.type)) {
      alert('Formats acceptés: JPG, PNG, WEBP')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('La taille maximale est 5MB')
      return
    }

    const url = URL.createObjectURL(file)
    setPreview(url)
    onImageSelect?.(file)
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            handleFiles(e.dataTransfer.files)
          }}
          className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center transition hover:border-indigo-400 hover:bg-indigo-50"
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="mb-3 h-8 w-8 text-indigo-600" />
          <p className="font-medium text-gray-900">Glissez-déposez votre photo</p>
          <p className="mt-1 text-sm text-gray-500">ou cliquez pour sélectionner un fichier</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        <div className="rounded-xl border bg-white p-4">
          <div className="mb-2 flex items-center gap-2 text-gray-700">
            <ImageIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Prévisualisation</span>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
            {preview ? (
              <>
                <img src={preview} alt="prévisualisation" className="h-full w-full object-contain" />
                <button
                  onClick={() => setPreview(null)}
                  className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 shadow ring-1 ring-black/5 hover:bg-white"
                >
                  <X className="h-3 w-3" />
                  Retirer
                </button>
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                Aucune image sélectionnée
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
