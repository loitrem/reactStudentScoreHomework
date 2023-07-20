import React from 'react'

function Score(props) {
  return (
    <div className='scoreWrapper'>
        <div className='scoreDateWrapper'><div className='scoreDate'>Date:</div><div className='date'>{props.score.date}</div></div>
        <div className='scoreScoreWrapper'><div className='scoreScore'>Score:</div><div className='score'>{props.score.score}</div></div>
    </div>
  )
}

export default Score