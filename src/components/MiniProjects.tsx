import { useState } from 'react'
import ProjectViewer from './ProjectViewer'
import projectsData from '../data/projects.json'

const projectIcons: Record<string, string> = {
  'face-detection': '👤',
  'emotion-detection': '😊',
  'finger-counting': '🖐️',
}

const projectColors: Record<string, string> = {
  'face-detection': 'bg-indigo-50 text-indigo-600',
  'emotion-detection': 'bg-pink-50 text-pink-600',
  'finger-counting': 'bg-emerald-50 text-emerald-600',
}

const MiniProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[number] | null>(null)

  if (selectedProject) {
    return <ProjectViewer project={selectedProject} onBack={() => setSelectedProject(null)} />
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Mini Projects</h2>
        <p className="text-gray-500">Build real-world computer vision applications</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${projectColors[project.id] || 'bg-gray-50'}`}>
              {projectIcons[project.id] || '🔧'}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.libraries.map((lib: string) => (
                <span key={lib} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                  {lib}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <span className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                Start Project →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniProjects