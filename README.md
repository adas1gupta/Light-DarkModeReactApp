# Theme Switcher with React and CSS Variables

## About
This project demonstrates how to implement a light/dark theme switcher using React's useEffect hook and CSS custom properties (variables). It showcases modern front-end practices for scalable theme management.

## Code Examples

### CSS Variables Setup
```css
:root {
    --background-color: white;
    --text-color: black;
}

.dark-mode {
    --background-color: black;
    --text-color: white;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}
```

### React Component with useEffect
```jsx
import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [lightMode, setLightMode] = useState(true)

    React.useEffect(() => {
        document.body.className = lightMode ? "" : "dark-mode";
    }, [lightMode]);

    return (
            <button onClick={() => setLightMode(!lightMode)}>
                Change Mode
    )
}
```

## Key Learning Points

### CSS Variables
- Define theme colors once at the root level
- Override variables for different themes using classes
- Access variables using `var()` function
- Scalable approach for theme management

### useEffect Hook
- Runs after component renders
- Updates DOM based on state changes
- Dependency array controls when effect runs
- Clean way to handle side effects

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Access the servers:
- Development server: `http://localhost:5173` (after running `npm run dev`)
- Preview production build: `http://localhost:4173` (after running `npm run preview`)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Usage
Click the button to toggle between light and dark themes. The useEffect hook will automatically apply the appropriate CSS class to the body element.

## What I Learned
- How to use CSS custom properties for theming
- Managing side effects with useEffect
- Connecting React state to DOM updates
- Writing scalable CSS with variables