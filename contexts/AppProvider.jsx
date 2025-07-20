import AppContext from "../contexts/AppContext";
import { useEffect, useState } from "react";

export default function AppProvider({ children }) {
    const [extensions, setExtensions] = useState(() => {
        const storedExtensions = localStorage.getItem("extensions");
        return storedExtensions ? JSON.parse(storedExtensions) : [
            {id: 1, name: "DevLens", description: "A powerful tool for developers", icon: "/images/logo-devlens.svg", isEnabled: true},
            {id: 2, name: "StyleSpy", description: "A powerful tool for developers", icon: "/images/logo-style-spy.svg", isEnabled: true},
            {id: 3, name: "SpeedBoost", description: "A powerful tool for developers", icon: "/images/logo-speed-boost.svg", isEnabled: false},
            {id: 4, name: "JSONWizard", description: "A powerful tool for developers", icon: "/images/logo-json-wizard.svg", isEnabled: true},
            {id: 5, name: "TabMaster Pro", description: "A powerful tool for developers", icon: "/images/logo-tab-master-pro.svg", isEnabled: true},
            {id: 6, name: "ViewportBuddy", description: "A powerful tool for developers", icon: "/images/logo-viewport-buddy.svg", isEnabled: false},
            {id: 7, name: "Markup Notes", description: "A powerful tool for developers", icon: "/images/logo-markup-notes.svg", isEnabled: true},
            {id: 8, name: "GridGuides", description: "A powerful tool for developers", icon: "/images/logo-grid-guides.svg", isEnabled: false},
            {id: 9, name: "Palette Picker", description: "A powerful tool for developers", icon: "/images/logo-palette-picker.svg", isEnabled: true},
            {id: 10, name: "LinkChecker", description: "A powerful tool for developers", icon: "/images/logo-link-checker.svg", isEnabled: true},
            {id: 11, name: "DOM Snapshot", description: "A powerful tool for developers", icon: "/images/logo-dom-snapshot.svg", isEnabled: false},
            {id: 12, name: "ConsolePlus", description: "A powerful tool for developers", icon: "/images/logo-console-plus.svg", isEnabled: true}
        ]});
    const [toast, setToast] = useState({
        message: "",
        open: false
    });

    const showHideToast = (message) => {
        setToast({message: message, open: true});
        setTimeout(() => {
            setToast({message: "", open: false});
        }, 3000);
    }

    useEffect(() => {
        localStorage.setItem("extensions", JSON.stringify(extensions));
    }, [extensions])

    return (
        <AppContext.Provider value={{ extensions, setExtensions, setToast, toast, showHideToast }}>
            {children}
        </AppContext.Provider>
    );
}