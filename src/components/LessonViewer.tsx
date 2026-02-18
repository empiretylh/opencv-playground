import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'

interface LessonViewerProps {
  lesson: {
    id: string
    title: string
    description: string
    markdown: string
    code: string
    inputs: string[]
  }
  onBack: () => void
}

declare global {
  interface Window {
    cv: unknown
  }
}

const LessonViewer: React.FC<LessonViewerProps> = ({ lesson, onBack }) => {
  const [code, setCode] = useState(lesson.code)
  const [output, setOutput] = useState('')
  const canvasInputRef = useRef<HTMLCanvasElement>(null)
  const canvasOutputRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = canvasInputRef.current
          if (canvas) {
            canvas.width = img.width
            canvas.height = img.height
            const ctx = canvas.getContext('2d')
            ctx?.drawImage(img, 0, 0)
          }
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const runCode = () => {
    if (!window.cv) {
      setOutput('OpenCV.js not loaded yet. Please wait...')
      return
    }

    try {
      const canvasInput = canvasInputRef.current
      const canvasOutput = canvasOutputRef.current
      if (canvasInput) {
        canvasInput.id = 'canvasInput'
      }
      if (canvasOutput) {
        canvasOutput.id = 'canvasOutput'
      }
      const execute = new Function('cv', code)
      execute(window.cv)
      setOutput('Code executed successfully!')
    } catch (error) {
      setOutput(`Error: ${error}`)
    }
  }

  const markdownLines = lesson.markdown.split('\n')

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        ← Back to Lessons
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{lesson.title}</h2>
      <p className="text-gray-500 mb-6">{lesson.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Instructions + Input */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions</h3>
            <div className="prose prose-sm max-w-none text-gray-600">
              {markdownLines.map((line, i) => {
                if (line.startsWith('# ')) return <h3 key={i} className="text-lg font-bold mt-2">{line.slice(2)}</h3>
                if (line.startsWith('## ')) return <h4 key={i} className="text-md font-semibold mt-2">{line.slice(3)}</h4>
                if (line.startsWith('```')) return null
                if (line.trim() === '') return <br key={i} />
                return <p key={i} className="my-1">{line}</p>
              })}
            </div>
          </div>

          {lesson.inputs.includes('image') && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Input Image</h3>
              <label className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors font-medium text-sm">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  className="hidden"
                />
              </label>
              <div className="mt-4">
                <canvas ref={canvasInputRef} className="border border-gray-200 rounded-lg max-w-full bg-gray-50" />
              </div>
            </div>
          )}
        </div>

        {/* Right: Editor + Output */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
              <h3 className="text-sm font-semibold text-gray-200">Code Editor</h3>
              <button
                onClick={runCode}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
              >
                ▶ Run
              </button>
            </div>
            <Editor
              height="300px"
              language="javascript"
              value={code}
              onChange={(value: string | undefined) => setCode(value || '')}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                wordWrap: 'on',
              }}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Output</h3>
            <canvas ref={canvasOutputRef} className="border border-gray-200 rounded-lg max-w-full bg-gray-50" />
            {output && (
              <p className={`mt-3 text-sm font-medium ${output.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {output}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonViewer