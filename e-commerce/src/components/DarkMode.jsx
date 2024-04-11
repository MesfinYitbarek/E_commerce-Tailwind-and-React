import React from 'react'
import LightMode from "../assets/light-mode.png"
import Darkmode from "../assets/dark-mode.png"

const DarkMode = () => {

    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
    );

    const element = document.documentElement;

    React.useEffect(() =>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [theme]);
  return (
    <div className='relative'>
      <img 
      src={LightMode} 
      alt='lightMode'
      onClick={()=> setTheme(theme === "light"? "dark" : "light")}
      className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
       translation-all duration-300 absolute right-0 z-10 
       ${theme === "dark" ? "opacity-0" : "opacity-100"} `} 
      />

      <img src={Darkmode} 
      alt='darkmode'
      onClick={()=> setTheme(theme === "light"? "dark" : "light")}
      className="w-[50px] cursor-pointer
      drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] translation-all
      duration-300"/>
    </div>
  )
}

export default DarkMode
