import './App.css';
import { useState } from 'react';
import students from './models/students';
import Student from './components/Student';


function App() {

  const [student, setStudent] = useState({students: students});


  return (
    <div className="App">

      {student.students.map((current, i)=>{
        
        console.log("current - ");
        console.log(current);
        return (
          <Student key={i} student={current}/>
        )

      },[])}
    </div>
  )
}

export default App;
