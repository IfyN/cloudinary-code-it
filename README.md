# Cloudinary Image Transformation App

A modern, clean image transformation application built with HTML, CSS, and JavaScript using the latest `@cloudinary/url-gen` SDK.

## Features

- **Real-time Image Transformations**: Apply various effects using Cloudinary's powerful transformation engine
- **Modern SDK**: Built with `@cloudinary/url-gen` for optimal performance
- **Responsive Design**: Clean, modern UI that works on all devices
- **No Backend Required**: Pure frontend application using Cloudinary's CDN

## Transformations Available

- **Crop**: Resize and crop images to specific dimensions
- **Grayscale**: Convert images to black and white
- **Sepia**: Apply vintage sepia tone effect
- **Brightness**: Adjust image brightness levels
- **Contrast**: Modify image contrast
- **Rounded**: Apply rounded corners to images
- **Contrast**: Increase contrast in images

## Quick Start

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
cloudinary-app/
├── src/
│   ├── index.html      # Main HTML file
│   ├── main.js         # JavaScript application logic
│   └── styles.css      # Styling
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool**: Vite
- **SDK**: @cloudinary/url-gen
- **Styling**: Custom CSS with modern design principles

## How It Works

The application uses Cloudinary's `@cloudinary/url-gen` SDK to:

1. Create `CloudinaryImage` instances
2. Apply transformations using the Actions API
3. Generate optimized URLs for each transformation
4. Display transformed images in real-time

## Example Transformation Code

```javascript
import { CloudinaryImage, Actions } from "@cloudinary/url-gen";

const image = new CloudinaryImage("sample", { cloudName: "demo" });
const transformedUrl = image
  .resize(Actions.Resize.fill().width(400).height(400))
  .effect(Actions.Effect.grayscale())
  .toURL();
```
# cloudinary-code-it
