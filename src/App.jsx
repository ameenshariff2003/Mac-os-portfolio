import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
  <main>
  <Nav/>
  <Dock/>

  </main>
  )
}

export default App
