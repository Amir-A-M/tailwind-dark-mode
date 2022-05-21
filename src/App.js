import { useState } from "react";

function App() {
  const htmlTag = document.documentElement;
  const [mode, setMode] = useState("light");
  return (
    <div className="App flex justify-center items-center h-screen bg-white dark:bg-black">
      <button className="text-4xl" onClick={toggleMode}>{mode}</button>
    </div>
  );

  function toggleMode() {
    const newMode = mode === "light" ? "dark" : "light";

    if (mode === "dark") htmlTag.classList.add("dark");
    else htmlTag.classList.remove("dark");
    setMode(newMode);
  }
}

export default App;
