import React from 'react'

interface NavbarProps {
  onNavigate: (view: 'dashboard' | 'lessons' | 'projects') => void
  currentView: string
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">OpenCV Playground</h1>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentView === 'dashboard' ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => onNavigate('lessons')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentView === 'lessons' ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              Lessons
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentView === 'projects' ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              Mini Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar