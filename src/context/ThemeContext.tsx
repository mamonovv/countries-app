import {createContext, ReactNode, useState} from "react";

export const ThemeContext = createContext<any>({theme: 'light'});

export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [theme, setTheme] = useState('light')

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}
