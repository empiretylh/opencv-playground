interface DashboardProps {
  onNavigate: (view: 'dashboard' | 'lessons' | 'projects') => void
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-12">
        <span className="text-6xl mb-4 block">🎯</span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Learn Computer Vision
          <span className="block text-blue-600">Interactively</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Master OpenCV concepts through hands-on lessons and real-world mini-projects.
          Write code, upload images, and see results instantly — all in your browser.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Lessons</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Step-by-step tutorials covering OpenCV fundamentals — from image loading and grayscale conversion to edge detection and morphological operations.
          </p>
          <button
            onClick={() => onNavigate('lessons')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm"
          >
            Start Learning →
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Mini Projects</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Build real-world applications including face detection with Haar cascades, emotion recognition, and finger counting with hand tracking.
          </p>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors font-medium text-sm"
          >
            Explore Projects →
          </button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Powered by</p>
        <div className="flex flex-wrap justify-center gap-4">
          {['OpenCV.js', 'React', 'TypeScript', 'TensorFlow.js', 'MediaPipe', 'Monaco Editor'].map((tech) => (
            <span key={tech} className="bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard