import React from "react"
import Score from "./Score"

const Student = (props) => {
  return (
    <div className="student">
      <table>
        <tr>
          <th>Name</th>
          <th>Bio</th>
          <th>Scores</th>
        </tr>
        <tr>
          <td><p className="student-name" style={{ fontWeight: "bold" }}>{props.name}</p></td>
          <td><p className="student-bio">{props.bio}</p></td>
          <td>
            <Score
              scores={props.scores}
            />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Student