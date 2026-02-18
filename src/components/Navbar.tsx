interface NavbarProps {
  onNavigate: (view: 'dashboard' | 'lessons' | 'projects') => void
  currentView: string
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">📷</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              OpenCV Playground
            </h1>
          </button>
          <div className="flex gap-1">
            {([
              { key: 'dashboard', label: 'Dashboard' },
              { key: 'lessons', label: 'Lessons' },
              { key: 'projects', label: 'Projects' },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === key
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar