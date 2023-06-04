import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props){

    //**create a global state

    const [darkMode, setDarkMode] = useState(true);

    return(
        //* pass the value and the function
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}