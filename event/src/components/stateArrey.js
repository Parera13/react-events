import React, {useState} from 'react'
import '../components/stateArray.css'
import Input from './onclick'

function StateArray() {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.ceil(Math.random() * 10) + 1
    }])
    console.log(items)
  }
  return (
    <div className="stateArray">
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
        <Input key={item.id}>{item.value}</Input>))}
      </ul>
    </div>
  )
}

export default StateArray
