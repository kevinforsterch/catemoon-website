import React, { useState, useContext, useEffect } from "react"
import { fadeSeconds, loadingSeconds } from "../utils/constants"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading")
    }

    setTimeout(() => {
      setIsLoading(false)
    }, loadingSeconds * 1000)

    setTimeout(() => {
      document.body.classList.remove("loading")
      document.querySelector(".loading-container").classList.add("fade")
    }, loadingSeconds * 1000 - fadeSeconds * 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
