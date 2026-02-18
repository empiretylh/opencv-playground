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
          <Suspense fallback={<div>Loading lessons...</div>}>
            <Lessons />
          </Suspense>
        )
      case 'projects':
        return (
          <Suspense fallback={<div>Loading projects...</div>}>
            <MiniProjects />
          </Suspense>
        )
      default:
        return <Dashboard onNavigate={setCurrentView} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      <main className="container mx-auto px-4 py-8">
        {renderView()}
      </main>
    </div>
  )
}

export default App