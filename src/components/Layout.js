import React, { createContext, useReducer, useState } from "react"
// import "../css/main.css"
// import "../styles/_main.scss"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { globalReducer, initialState } from "../store/global.reducer"
import { DispatchContext, StateContext } from "../store/context"

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Navbar />
          <Sidebar />
          {children}
        </StateContext.Provider>
      </DispatchContext.Provider>
      <Footer></Footer>
    </>
  )
}

export default Layout
