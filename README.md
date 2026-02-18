# OpenCV Playground

An interactive web-based learning platform for computer vision using OpenCV.js, featuring hands-on lessons and mini-projects.

## Features

- **Interactive Lessons**: 6 step-by-step tutorials covering OpenCV fundamentals
- **Mini Projects**: Face detection, emotion recognition, and finger counting
- **Code Editor**: Monaco Editor for writing and running JavaScript code
- **Real-time Canvas Output**: Visual results of image processing operations
- **Responsive Design**: Works on desktop and mobile devices
- **Security**: Sandboxed code execution using Function constructor

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **Image Processing**: OpenCV.js
- **Markdown Rendering**: React Markdown
- **Additional Libraries**: TensorFlow.js, MediaPipe (for projects)

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx
│   ├── Lessons.tsx
│   ├── LessonViewer.tsx
│   ├── MiniProjects.tsx
│   ├── ProjectViewer.tsx
│   └── Navbar.tsx
├── data/
│   ├── lessons.json
│   └── projects.json
├── utils/
│   └── codeExecutor.ts
├── App.tsx
├── main.tsx
└── index.css

public/
├── opencv.js
├── haarcascade_frontalface_default.xml
└── vite.svg
```

## Setup and Installation

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd OpenCV-Playground
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

### Deployment

The app can be deployed to static hosting services like Vercel or Netlify:

```bash
npm run build
# Deploy the dist/ folder
```

For Vercel:
```bash
vercel --prod
```

## Lessons Overview

1. **Image Loading and Display** - Basic image I/O operations
2. **Converting to Grayscale** - Color space conversion
3. **Image Blurring** - Applying filters
4. **Edge Detection with Canny** - Feature detection
5. **Image Thresholding** - Binary image creation
6. **Morphological Operations** - Shape manipulation

## Mini Projects

1. **Face Detection with Haar Cascades** - Real-time face detection
2. **Emotion Detection with TensorFlow.js** - Facial expression analysis
3. **Finger Counting with MediaPipe** - Hand tracking and counting

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

Requires WebGL support for OpenCV.js operations.

## Security

Code execution is sandboxed using the Function constructor. User code runs in the browser context with access to predefined OpenCV functions only.

## Performance Optimizations

- Lazy loading of components
- Web Workers for heavy computations (planned)
- Optimized canvas operations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License

## Demo

[Live Demo](https://opencv-playground.vercel.app) (placeholder)

### Screenshots

- Dashboard: Overview of lessons and projects
- Lesson Viewer: Interactive coding environment
- Project Viewer: Advanced mini-projects with camera access

## API Reference

### Lessons JSON Structure

```json
{
  "id": "lesson-id",
  "title": "Lesson Title",
  "description": "Brief description",
  "markdown": "# Detailed content in Markdown",
  "code": "// Initial code template",
  "inputs": ["image", "video"]
}
```

### Projects JSON Structure

```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "Project description",
  "code": "// Project code",
  "inputs": ["image", "video"],
  "libraries": ["opencv", "tensorflow", "mediapipe"]
}
```

## Troubleshooting

### OpenCV.js Not Loading

- Ensure stable internet connection for CDN loading
- Check browser console for errors
- Verify WebGL support in browser

### Camera Access Denied

- Grant camera permissions when prompted
- Use HTTPS for camera access in production

### Code Execution Errors

- Check code syntax in Monaco Editor
- Ensure OpenCV.js is fully loaded before running
- Review browser console for detailed error messages

## Future Enhancements

- Backend API for progress tracking
- User authentication
- More advanced projects
- Offline support with PWA
- Integration with more ML libraries