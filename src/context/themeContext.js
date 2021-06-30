import { createContext, useState } from 'react';

export const themeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <themeContext.Provider value={{
      theme,
      toggleTheme,
      name: 'kelsman'
    }

    }>
      {children}
    </themeContext.Provider>
  )
}