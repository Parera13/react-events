import React, {useState} from 'react'
import '../components/counter.css'

function Counter() {
  const [count, setCount] = useState(0)
    function down(){
      if ( count === 0 ){
          setCount(0)
      }else{
        setCount(count - 1)
      }
    }
  return (
    <div className='counter'>
      <h1>{count}</h1>
      <div className="counterButtons">
      <button className="counterButton" onClick={() => setCount(count + 1)}>+</button>
      <button className="counterButton" onClick={down}>-</button>
      </div>
    </div>
  )
}

export default Counter
