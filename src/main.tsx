import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Browser support check
const checkBrowserSupport = () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  if (!gl) {
    alert('WebGL is not supported in this browser. OpenCV.js requires WebGL.')
    return false
  }
  return true
}

if (checkBrowserSupport()) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  document.getElementById('root')!.innerHTML = '<p>Browser not supported. Please use a modern browser with WebGL support.</p>'
}
