import React, {useState} from 'react'
import '../components/spread.css'

function SpreadArray() {
  const [name, setName] = useState({firstName: '', secondName: ''});

  return (
    <div className='spread'>
      <form>
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName:e.target.value})}/>
        <input type="text" value={name.secondName} onChange={e => setName({...name, secondName:e.target.value})}/>
        <h5>Your first name is: {name.firstName}</h5>
        <h5>Your second name is: {name.secondName}</h5>
        <h4>{JSON.stringify(name)}</h4>
      </form>
    </div>
  )
}

export default SpreadArray
