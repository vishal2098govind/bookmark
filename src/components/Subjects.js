import React, { Component } from 'react'
import SubjectCard from './SubjectCard'
import '../css/subCard.css'

const subs = [
  "Computer-Networks",
  "Operating-Systems",
  "Database-Management-System",
  "Computer-Organization",
  "Theory-of-Computation",
  "Compiler-Design",
  "Digital-Logic-Design",
  "Data-Structures",
  "Programming",
  "Algorithms",
  "Engineering-Mathematics",
  "Aptitude"
]


export default class Subjects extends Component {
  render() {
    return (
      <div className="subs my-5">
        <ul className='list-group subCard'>
          {subs.map(sub=><li key={sub} className='list-group-item bg-dark m-2 px-4 py-2'><SubjectCard subject={sub}/></li>)}
        </ul>
      </div>
    )
  }
}
