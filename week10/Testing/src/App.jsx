import { useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ErrorMessage />
      <ErrorMessage message="Custom Error" color="green" />
      <ErrorMessage message="Default Error" color="blue" />
    </>
  )
}

export default App
