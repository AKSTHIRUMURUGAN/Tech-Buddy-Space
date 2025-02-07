"use client"
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");
  useEffect(()=>{
    setTheme(localStorage.getItem("theme") || "light")
  },[])
  useEffect(() => {
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
