import React from 'react'

interface DashboardProps {
  onNavigate: (view: 'dashboard' | 'lessons' | 'projects') => void
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Welcome to OpenCV Playground</h2>
      <p className="text-gray-600 mb-8">
        Learn computer vision with interactive lessons and hands-on mini-projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Lessons</h3>
          <p className="text-gray-600 mb-4">
            Step-by-step tutorials covering OpenCV fundamentals, from basic image processing to advanced techniques.
          </p>
          <button
            onClick={() => onNavigate('lessons')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Start Learning
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mini Projects</h3>
          <p className="text-gray-600 mb-4">
            Hands-on projects including face detection, emotion recognition, and finger counting.
          </p>
          <button
            onClick={() => onNavigate('projects')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard