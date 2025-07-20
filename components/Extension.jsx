import { useState, useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function Extension({ extension }) {
    const [isEnabled, setIsEnabled] = useState(extension.isEnabled);
    const { setExtensions, extensions, showHideToast} = useContext(AppContext);

    const toggleExtension = () => {
        const newIsEnabled = !isEnabled; 
        setIsEnabled(newIsEnabled); 

        const toggledExtension = {
            ...extension,
            isEnabled: newIsEnabled,
        };

        const updatedExtensions = extensions.map((ext) =>
            ext.id === extension.id ? toggledExtension : ext
        );
        setExtensions(updatedExtensions);

        localStorage.setItem("extensions", JSON.stringify(updatedExtensions));

        showHideToast(`Extension ${extension.name} is now ${isEnabled ? "disabled" : "enabled"}`);
    };

    const removeExtension = () => {
        const updatedExtensions = extensions.filter((ext) => ext.id !== extension.id);
        setExtensions(updatedExtensions);
        localStorage.setItem("extensions", JSON.stringify(updatedExtensions));

        showHideToast(`Extension ${extension.name} has been removed`);
    }

    return (
        <div className="extension-box d-flex-col space-between border-radius-10">
            <div className="extension-info d-flex-row gap-20">
                <div className="extension-icon border-radius-10">
                    <img src={extension.icon} alt={extension.name} className="extension-icon-img" />
                </div>

                <div className="extension-details d-flex-col">
                    <h3 className="text-bold text-white">{extension.name}</h3>
                    <p className="text-grey">{extension.description}</p>
                </div>
            </div>

            <div className="extension-options d-flex-row align-items-center space-between">
                <button className="remove-button text-white text-bold" onClick={removeExtension}>Remove</button>

                <div className={`extension-toggle ${isEnabled ? "enabled" : "disabled"} d-flex-row align-items-center`}>
                    <input type="checkbox" checked={isEnabled} onChange={toggleExtension} />
                    <span className={`toggle-slider ${isEnabled ? "enabled" : "disabled"}`}></span>
                </div>
            </div>
        </div>
    );
}
