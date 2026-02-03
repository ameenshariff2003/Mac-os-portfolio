import { useState } from 'react'

import './App.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import Github from './components/github/Github'
import Note from './components/Note/Note'
import Resume from './components/Resume/Resume'
import Spotify from './components/spotify/Spotify'
import Cli from './components/Terminal/Cli'

function App() {

  const [windowState, setWindowState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
  })



  return (
  <main>
  <Nav/>
  <Dock setWindowState = {setWindowState}/>
  {windowState.github&& <Github windowname="github" setWindowState={setWindowState}/>}
    {windowState.note&& <Note windowname="note" setWindowState={setWindowState}/>}
  {windowState.resume&& <Resume windowname="resume" setWindowState={setWindowState}/> }
  {windowState.spotify&& <Spotify windowname="spotify" setWindowState={setWindowState}/> }
  {windowState.cli&& <Cli windowname="cli" setWindowState={setWindowState}/>}






  </main>
  )
}

export default App
