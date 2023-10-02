import { createContext, useEffect, useRef, useState } from "react";

/*======================================*/
/*======================================*/
/*======================================*/

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {

    const [showBarIcon, setShowBarIcon] = useState(false);

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth < 768) {
                //if the window less than 768,show the icon,otherwise hide it
                setShowBarIcon(true);
            } else {
                setShowBarIcon(false);
            }
        };

        window.addEventListener("resize", handleResize);

    }, []);

    return (
        <SearchContext.Provider value={{ showBarIcon }}>
            {children}
        </SearchContext.Provider>
    )
}