import React from 'react';
import Score from './Score';

function Student(props) {

    return (
        <div className='studentWrapper'>
            <div className='studentNameWrapper'><div className='studentName'>Student Name:</div><div className='name'>{props.student.name}</div></div>
            <div className='studentBioWrapper'><div className='studentBio'>Student Bio:</div><div className='bio'>{props.student.bio}</div></div>
            {props.student.scores.map((current, i)=>{
                return (
                <Score key={i} score={current}/>
                )
            },[])}
        </div>
    )
}

export default Student