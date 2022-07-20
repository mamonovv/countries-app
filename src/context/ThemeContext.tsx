import {createContext, ReactNode, useState} from "react";
import {getFromLocalStorage} from "../helpers/localStorage";

export const LS_THEME_KEY = 'theme_countries';

export const ThemeContext = createContext<any>({theme: 'light'});

export const ThemeProvider = ({children}: { children: ReactNode }) => {

    const themeInLC = getFromLocalStorage(LS_THEME_KEY) ?? 'light'

    const [theme, setTheme] = useState(themeInLC)

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}
