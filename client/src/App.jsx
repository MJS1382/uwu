import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const userData = useRef();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then(res => res.json())
      .then(data => userData.current = data)
  } , [])

  return (
    <>
      <h2>{userData}</h2>
    </>
  )
}

export default App
