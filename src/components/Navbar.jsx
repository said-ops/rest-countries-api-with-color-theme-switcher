import React, { useEffect, useState } from "react";
import useHomeStore from "../store/homeStore";
// https://flagcdn.com/w320/ga.png

function Navbar() {
  // const [theme, setTheme] = useState("light");
  const theme = useHomeStore(state=>state.theme)
  const setTheme = useHomeStore(state=>state.setTheme)
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  
  }, [theme]);
  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-16 shadow-md dark:bg-element-dark dark:text-text-dark">
      <h1 className="md:text-2xl text-l font-extrabold">Where in the world?</h1>
      <div className="flex  gap-4 p-2 items-center">
        <img
          className="cursor-pointer"
          onClick={() => {setTheme(theme) }}
          src={`/images/icon-${theme === "light" ? "moon" : "sun"}.svg`}
          alt="Dark theme"
        />
        <span className="hidden md:inline-block">{`${theme === "dark" ? "Light" : "Dark"}`} Mode</span>
      </div>
    </nav>
  );
}

export default Navbar;
