import { useState } from 'react'
import LessonViewer from './LessonViewer'
import lessonsData from '../data/lessons.json'

const lessonIcons: Record<string, string> = {
  'image-loading': '🖼️',
  'grayscale': '🌑',
  'blur': '💨',
  'edge-detection': '✂️',
  'thresholding': '⬛',
  'morphology': '🔬',
}

const Lessons: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<(typeof lessonsData)[number] | null>(null)

  if (selectedLesson) {
    return <LessonViewer lesson={selectedLesson} onBack={() => setSelectedLesson(null)} />
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Interactive Lessons</h2>
        <p className="text-gray-500">Learn OpenCV.js fundamentals step by step</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessonsData.map((lesson, index) => (
          <div
            key={lesson.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
            onClick={() => setSelectedLesson(lesson)}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                {lessonIcons[lesson.id] || '📝'}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                  Lesson {index + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{lesson.description}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
              <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                Start Lesson →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lessons