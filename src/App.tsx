import React, { useState, Suspense } from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

const Lessons = React.lazy(() => import('./components/Lessons'))
const MiniProjects = React.lazy(() => import('./components/MiniProjects'))

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'lessons' | 'projects'>('dashboard')

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentView} />
      case 'lessons':
        return (
          <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading lessons...</div>}>
            <Lessons />
          </Suspense>
        )
      case 'projects':
        return (
          <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading projects...</div>}>
            <MiniProjects />
          </Suspense>
        )
      default:
        return <Dashboard onNavigate={setCurrentView} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>
    </div>
  )
}

export default App