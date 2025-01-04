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

## Installation
1. Clone the repository
2. Link CSS in HTML:
```html

```
3. Run your development server

## Usage
Click the button to toggle between light and dark themes. The useEffect hook will automatically apply the appropriate CSS class to the body element.

## What I Learned
- How to use CSS custom properties for theming
- Managing side effects with useEffect
- Connecting React state to DOM updates
- Writing scalable CSS with variables