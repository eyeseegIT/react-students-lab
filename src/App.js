import React from "react"
import './App.css';
import Student from "./Student"
import studentsArr from "./data"

function App() {
  const students = studentsArr.map((ele, index) => {
    return (
      <Student
        name={ ele.name }
        bio={ ele.bio }
        scores={ ele.scores }
        key={ index }
      />
    )
  })

  return (
    <div className="App">
      <h1>Students</h1>
      <section className="students">
        { students }
      </section>
    </div>
  )
}

export default App;
