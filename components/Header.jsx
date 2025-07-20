import { useState, useEffect } from "react";
import Logo from "../public/images/logo.svg";
import MoonIcon from "../public/images/icon-moon.svg";
import SunIcon from "../public/images/icon-sun.svg";

export default function Header() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });
    const themeImage = theme === "light" ? SunIcon : MoonIcon;

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }

    return (
        <div className="header-container d-flex-row align-items-center border-radius-10 space-between">
            <div className="header-title-inner">
                <img src={Logo} alt="Extension Manager Logo" />
            </div>

            <div className="header-theme">
                <button 
                    className="header-theme-button border-radius-5"
                    onClick={toggleTheme}
                >
                    <img 
                        src={themeImage} 
                        alt={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"} 
                    />
                </button>
            </div>
        </div>
    );
}
