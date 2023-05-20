import React, { Dispatch, SetStateAction } from 'react';

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme,
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>> | null
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES['light'],
  setCurrentTheme: null
})
type Props = {
  children?: React.ReactNode
}
export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('light');

  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: THEMES[currentTheme],
      setCurrentTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext);