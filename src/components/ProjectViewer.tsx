import React, { useState, useRef, useEffect } from 'react'
import Editor from '@monaco-editor/react'

interface ProjectViewerProps {
  project: any
  onBack: () => void
}

declare global {
  interface Window {
    cv: any
  }
}

const ProjectViewer: React.FC<ProjectViewerProps> = ({ project, onBack }) => {
  const [code, setCode] = useState(project.code)
  const [output, setOutput] = useState('')
  const canvasInputRef = useRef<HTMLCanvasElement>(null)
  const canvasOutputRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const checkCV = () => {
      if (window.cv) {
        setOutput('OpenCV.js loaded successfully!')
      } else {
        setTimeout(checkCV, 100)
      }
    }
    checkCV()
  }, [])

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

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
    } catch (error) {
      setOutput(`Error accessing camera: ${error}`)
    }
  }

  const runCode = () => {
    if (!window.cv) {
      setOutput('OpenCV.js not loaded yet. Please wait.')
      return
    }

    try {
      const execute = new Function('cv', 'canvasInput', 'canvasOutput', 'video', code)
      execute(window.cv, canvasInputRef.current, canvasOutputRef.current, videoRef.current)
      setOutput('Code executed successfully!')
    } catch (error) {
      setOutput(`Error: ${error}`)
    }
  }

  return (
    <div>
      <button onClick={onBack} className="mb-4 text-blue-600 hover:text-blue-800">← Back to Projects</button>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          {project.inputs.includes('image') && (
            <div className="mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="mb-2"
              />
              <canvas ref={canvasInputRef} className="border border-gray-300 max-w-full" />
            </div>
          )}
          {project.inputs.includes('video') && (
            <div className="mb-4">
              <button onClick={startVideo} className="bg-green-600 text-white px-4 py-2 rounded-md mb-2">Start Camera</button>
              <video ref={videoRef} className="border border-gray-300 max-w-full" />
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Code Editor</h3>
          <Editor
            height="400px"
            language="javascript"
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
          />
          <button
            onClick={runCode}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Run Code
          </button>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Output</h3>
            <canvas ref={canvasOutputRef} className="border border-gray-300 max-w-full" />
            <p className="mt-2 text-gray-700">{output}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectViewer