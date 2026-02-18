import React, { useState } from 'react'
import ProjectViewer from './ProjectViewer'
import projectsData from '../data/projects.json'

const MiniProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  if (selectedProject) {
    return <ProjectViewer project={selectedProject} onBack={() => setSelectedProject(null)} />
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mini Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project: any) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <button
              onClick={() => setSelectedProject(project)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Start Project
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniProjects