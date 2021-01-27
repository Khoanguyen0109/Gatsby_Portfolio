import React, { useMemo, useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
// import jobs from "../constants/jobs"

export const query = graphql`
  {
    allStrapiJobs(sort: { fields: id, order: DESC }) {
      nodes {
        company
        created_at
        date
        end_date(formatString: "DD/MM/YY")
        position
        start_date(formatString: "DD/MM/YYYY")
        strapiId
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log("data :>> ", data)
  console.log("jobs :>> ", jobs)
  const [value, setValue] = useState(0)
  const { id, position, company, date, desc, start_date, end_date } = jobs[
    value
  ]
  return (
    <div className="section bg-grey">
      <Title title="Experience"></Title>\
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>

        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          <p className="job-date">{start_date + "-" + end_date}</p>

          {desc.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />

              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
    </div>
  )
}

export default Jobs
