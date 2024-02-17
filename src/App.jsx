/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'

const Card = ({ handleIncrementCounter, handleDecrementCounter, inputValue, handleInputValue, }) => {

  return (
    <>
    <div style={{display: "flex"}}>

    <button style={{backgroundColor: "white", color:"black"}} onClick={handleIncrementCounter}>Ajouter</button>
    <button style={{backgroundColor: "white", color:"black"}} onClick={handleDecrementCounter}>Enlever</button>
    </div>
    <input value={inputValue} onChange={handleInputValue}  />
    </>
    )
}




const App = () =>  {
  const [inputValue, setInputValue] = useState('Neal')
  const [counter, setCounter] = useState(0)

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const handleIncrementCounter = () => {
    setCounter((prev) => prev + 1)
  }
  const handleDecrementCounter = () => {
    setCounter((prev) => prev - 1)
  }
  return (
    <>
      <h1>{counter}</h1>
      <h1>{inputValue}</h1>
      <Card handleIncrementCounter={handleIncrementCounter} handleInputValue={handleInputValue} handleDecrementCounter={handleDecrementCounter} inputValue={inputValue} />
    </>
  )
}


export default App
