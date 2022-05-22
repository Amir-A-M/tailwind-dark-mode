import { useState } from "react";

function App() {
  const bodyTag = document.querySelector('body');
  const [mode, setMode] = useState("light");
  return (
    <div className="App flex justify-center items-center h-screen bg-white dark:bg-black">
      <button className="text-4xl" onClick={toggleMode}>{mode}</button>
    </div>
  );

  function toggleMode() {
    const newMode = mode === "light" ? "dark" : "light";

    if (mode === "dark") bodyTag.classList.add("dark");
    else bodyTag.classList.remove("dark");
    setMode(newMode);
  }
}

export default App;
