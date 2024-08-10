import { useState } from "react"
import "./index.css"


function App() {

  let [counter,setCounter] = useState(10)

  const addValue =() => {
    setCounter(counter+1);
  }

  const subtractValue =() => {
    setCounter(counter-1);
  }

  return (
<div>
  <h2>count is:{counter}</h2>
  <button onClick={addValue}>adder</button>
  <button onClick={subtractValue}>subtract</button>
</div>
  )
}

export default App
