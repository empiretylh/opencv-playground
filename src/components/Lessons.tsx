import React, { useState } from 'react'
import LessonViewer from './LessonViewer'
import lessonsData from '../data/lessons.json'

const Lessons: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<any>(null)

  if (selectedLesson) {
    return <LessonViewer lesson={selectedLesson} onBack={() => setSelectedLesson(null)} />
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Interactive Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessonsData.map((lesson: any) => (
          <div key={lesson.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{lesson.title}</h3>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <button
              onClick={() => setSelectedLesson(lesson)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Start Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lessons