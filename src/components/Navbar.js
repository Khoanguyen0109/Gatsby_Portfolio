import React, { useContext } from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { DispatchContext, StateContext } from "../store/context"
import { OPEN_SIDEBAR } from "../store/global.reducer"

const Navbar = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(StateContext)
  console.log("state :>> ", state)
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar-header">
          {/* <img src={logo} alt="logo"></img> */}
          <h2>Portfolio</h2>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => dispatch({ type: OPEN_SIDEBAR })}
          >
            <FaAlignRight />
          </button>
        </div>

        <PageLinks styleClass="navbar-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
