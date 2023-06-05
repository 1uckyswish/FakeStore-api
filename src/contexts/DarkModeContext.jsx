import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props){

    //**create a global state

    const [darkMode, setDarkMode] = useState(true);

    useEffect(
        ()=>{
          const storedData = localStorage.getItem('darkMode');
          //* checks if data is inside
          if(storedData){
            //* set state with this value
            setDarkMode(JSON.parse(storedData))
          }

        }, []
    )


    useEffect(
        ()=>{
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        },[darkMode]
    )

    return(
        //* pass the value and the function
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}