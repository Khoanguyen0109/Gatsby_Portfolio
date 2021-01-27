import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <div className="section bg-grey">
      <Title title="services"></Title>
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Services
