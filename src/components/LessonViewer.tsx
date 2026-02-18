[
  {
    "id": "face-detection",
    "title": "Face Detection with Haar Cascades",
    "description": "Detect faces in images using Haar cascade classifiers",
    "code": "// Load cascade\nlet cascade = new cv.CascadeClassifier();\ncascade.load('haarcascade_frontalface_default.xml');\n\n// Detect faces\nlet src = cv.imread('canvasInput');\nlet gray = new cv.Mat();\ncv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);\nlet faces = new cv.RectVector();\nlet msize = new cv.Size(0, 0);\ncascade.detectMultiScale(gray, faces, 1.1, 3, 0, msize, msize);\n\n// Draw rectangles\nfor (let i = 0; i < faces.size(); ++i) {\n  let face = faces.get(i);\n  let point1 = new cv.Point(face.x, face.y);\n  let point2 = new cv.Point(face.x + face.width, face.y + face.height);\n  cv.rectangle(src, point1, point2, [255, 0, 0, 255], 2);\n}\n\ncv.imshow('canvasOutput', src);\nsrc.delete();\ngray.delete();\nfaces.delete();",
    "inputs": ["image"],
    "libraries": ["opencv"]
  },
  {
    "id": "emotion-detection",
    "title": "Emotion Detection with TensorFlow.js",
    "description": "Detect emotions in faces using TensorFlow.js",
    "code": "// Placeholder for TensorFlow.js emotion detection\n// This would load a model and predict emotions\nconsole.log('Emotion detection code would go here');\n// For now, just display the image\nlet src = cv.imread('canvasInput');\ncv.imshow('canvasOutput', src);\nsrc.delete();",
    "inputs": ["image"],
    "libraries": ["tensorflow"]
  },
  {
    "id": "finger-counting",
    "title": "Finger Counting with MediaPipe",
    "description": "Count fingers using hand tracking with MediaPipe",
    "code": "// Placeholder for MediaPipe finger counting\n// This would use MediaPipe Hands to detect fingers\nconsole.log('Finger counting code would go here');\n// For now, just display the image\nlet src = cv.imread('canvasInput');\ncv.imshow('canvasOutput', src);\nsrc.delete();",
    "inputs": ["video"],
    "libraries": ["mediapipe"]
  }
]