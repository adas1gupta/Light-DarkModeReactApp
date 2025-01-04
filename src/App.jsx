import React from "react";
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

function App () {
    const [lightMode, setLightMode] = useState(true)

    React.useEffect(() => {
        document.body.className = lightMode ? "" : "dark-mode";
      }, [lightMode]);

    return (
        <div>
            <button onClick={() => setLightMode(!lightMode)}>Change Mode</button>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)