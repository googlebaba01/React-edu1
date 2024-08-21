import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  // let Counter = 15
  const addValue = () =>{
    console.log('Clicked' , counter);
    counter = counter+1
    if(counter > 20){
      counter = counter - counter%20
    }
    setCounter(counter)
  }
  const subtractValue = () =>{
    console.log('Clicked' ,counter);
    counter = counter-1
    if(counter < 0){
      counter = 0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Gaming with googlebaba</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={subtractValue}>subtract value</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
