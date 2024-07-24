import React, { createContext, useContext } from 'react'
import type { FC } from 'react'

export type ToggleLangContextType = {
  toggleLang: () => void
}

const defaultToggleLangContext = {
  toggleLang: () => {},
}
const ToggleLangContext = createContext<ToggleLangContextType>(
  defaultToggleLangContext
)
type ToggleLangContextProps = {
  children: any
  toggleLang: () => void
}
export const ToggleLangProvider: FC<ToggleLangContextProps> = ({
  children,
  toggleLang,
}) => {
  const value = {
    toggleLang,
  }
  return (
    <ToggleLangContext.Provider value={value}>
      {children}
    </ToggleLangContext.Provider>
  )
}
export const useToggleLang = () => {
  const { toggleLang } = useContext(ToggleLangContext)
  return toggleLang
}
