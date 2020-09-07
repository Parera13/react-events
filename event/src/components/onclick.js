import React, {useState} from 'react'
import '../components/onclick.css'

function Input() {
    const [firstName, setFirstName] = useState('')
        function changeFirstName(e) {
          //console.log(e.target.value);
          setFirstName(e.target.value)
        }
    const [secondName, setSecondName] = useState('')
        function changeSecondName(e) {
          console.log(secondName + " " + firstName);
          
          setSecondName(e.target.value)
        }
        
  return (
    <div className='inputComp'>
      <p>First name: {firstName}</p>
      <input type="text" value={firstName} onChange={changeFirstName}/>
      <p>Second name: {secondName}</p>
      <input type="text" value={secondName} onChange={changeSecondName}/>
    </div>
  )
}

export default Input
