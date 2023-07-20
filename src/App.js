import './App.css';
import { useState } from 'react';
import students from './models/students';
import Student from './components/Student';


function App() {

  const [student, setStudent] = useState(students[0]);


  return (
    <div className="App">

      {student.map((current, i)=>{
        
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
