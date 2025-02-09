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
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
