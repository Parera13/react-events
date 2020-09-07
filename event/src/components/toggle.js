import React, {useState} from 'react'
import '../components/toggle.css'


function Toggle() {
  const [opened, setOpened] = useState(false)
  return (
    <div className="toggle">
      <button className="toggleButton" onClick={() => setOpened(!opened)}>Toggle Open</button>
      {opened && <p>Peekaboo!</p>}
    </div>
  )
}

export default Toggle
