import { useEffect, useMemo, useContext } from "react";
import Extension from "../components/Extension";
import AppContext from "../contexts/AppContext";

export default function ExtensionsList({ statusFilter }) {
    const { extensions } = useContext(AppContext);
    let extensionsToDisplay = extensions

    useEffect(() => {
        localStorage.setItem("extensions", JSON.stringify(extensions))
    }, [extensions]);

    const enabledExtensions = useMemo(() => {
        return extensions.filter((extension) => extension.isEnabled);
    }, [extensions]);

    const disabledExtensions = useMemo(() => {
        return extensions.filter((extension) => !extension.isEnabled);
    }, [extensions])

    if (statusFilter === "enabled") {
        extensionsToDisplay = enabledExtensions;
    }

    if (statusFilter === "disabled") {
        extensionsToDisplay = disabledExtensions
    }

    if (statusFilter === "all") {
        extensionsToDisplay = extensions;
    }

    return (
        <div className="extensions-list-container">
            {extensionsToDisplay.map((extension) => (
                <Extension key={extension.id} extension={extension} />
            ))}
        </div>
    )
}