"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//local
const getFromLocalStorage = () => {
    const value = localStorage.getItem("theme")
    if (typeof window !== "undefined") {
        if (value === null) {            
            return "dark"
        }
        return value
    } else {
        return "dark"
    }
}
  
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => {
      return getFromLocalStorage()
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };
    
    useEffect(() => {
        localStorage.setItem("theme",theme)
    },[theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
