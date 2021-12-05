import React from "react";

const Score = (props) => {
  return (
    <div className="student-score">
      {props.scores.map((score) => 
        <p>{ score.date }: { score.score } </p>
      )}
    </div>
  )
}

export default Score