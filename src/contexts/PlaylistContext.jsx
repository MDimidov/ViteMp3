import { createContext, useContext, useState } from "react";

export const PlaylistContext = createContext();

export function PlaylistContextProvider({ children }) {
    const [isPlaylistOn, setIsPlaylistOn] = useState(() => {
        const stored = localStorage.getItem("playlist");

        return stored !== null ? JSON.parse(stored) : true;
    });

    function setIsPlaylistOnHandler() {
        setIsPlaylistOn((prev) => {
            const newValue = !prev;
            localStorage.setItem("playlist", newValue);
            return newValue;
        });
    }

    const context = {
        isPlaylistOn,
        setIsPlaylistOnHandler,
    };

    return (
        <PlaylistContext.Provider value={context}>
            {children}
        </PlaylistContext.Provider>
    );
}

export function usePlaylistContext() {
    const context = useContext(PlaylistContext);
    return context;
}
