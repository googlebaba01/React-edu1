import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-green-400 text-gray-900 p-4 rounded mb-4">tailwind test</h1>
    <Card username="Googlebaba" btnTxt="Click ME"/>
    <Card username="StarrerYT" btnTxt="Subscribe ME"/>
    <Card username="Tillu Sir" />
  </>  
  )
}

export default App
