import React, { useContext } from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import { DispatchContext, StateContext } from "../store/context"
import { OPEN_SIDEBAR } from "../store/global.reducer"

const Sidebar = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)
  const { open } = state

  function openSidebar() {
    dispatch({ type: OPEN_SIDEBAR })
  }

  return (
    <aside className={`sidebar ${open && "show-sidebar"} `}>
      <button
        className="close-btn"
        onClick={() => dispatch({ type: OPEN_SIDEBAR })}
      >
        {" "}
        <FaTimes />{" "}
      </button>

      <div className="sidebar-container">
        <Links styleClass={`${open ? "sidebar-links" : ""}`}></Links>
        <SocialLinks
          styleClass={`${open ? "sidebar-icons" : ""}`}
          openSidebar={openSidebar}
        />
      </div>
    </aside>
  )
}

export default Sidebar
