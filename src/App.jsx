import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import Window from './components/mac-window/Window'
import Github from './components/github/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
  <main>
  <Nav/>
  <Dock/>
<Github/>
  </main>
  )
}

export default App
