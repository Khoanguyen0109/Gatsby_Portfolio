import React, { useContext } from "react"
import { Link } from "gatsby"
import { DispatchContext } from "../store/context"
import { OPEN_SIDEBAR } from "../store/global.reducer"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  const dispatch = useContext(DispatchContext)

  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link
              to={link.url}
              onClick={() => dispatch({ type: OPEN_SIDEBAR })}
            >
              {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
