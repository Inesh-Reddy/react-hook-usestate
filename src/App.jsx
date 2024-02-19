import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //Here useState hook check for any change in state of the count variable, 
  // when count variable changes it rerenders and updates the DOM with the new count value.
  function clickButton(){
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={clickButton} >counter {count} </button>
    </div>
  )
}

export default App
