import { useState } from 'react'

import './App.scss'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import Github from './components/github/Github'
import Note from './components/Note/Note'
import Resume from './components/Resume/Resume'
import Spotify from './components/spotify/Spotify'
import Cli from './components/Terminal/Cli'
import Mail from './components/mail/Mail'

function App() {

  const [windowState, setWindowState] = useState({
  github: { open: false, z: 1 },
  note: { open: false, z: 1 },
  pdf: { open: false, z: 1 },
  spotify: { open: false, z: 1 },
  cli: { open: false, z: 1 },
    links: { open: false, z: 1 }

  })

  const [topZ, setTopZ] = useState(10)
  const openWindow = (name) => {
  setTopZ(prev => {
    const newZ = prev + 1

    setWindowState(state => ({
      ...state,
      [name]: {
        ...state[name],
        open: true,
        z: newZ
      }
    }))

    return newZ
  })


}





  return (
  <main>
  <Nav/>
  <Dock setWindowState = {setWindowState} openWindow={openWindow}/>


  {windowState.github.open&& <Github windowname="github"     setTopZ={setTopZ}
 zIndex={windowState.github.z} setWindowState={setWindowState}/>}

    {windowState.note.open&& <Note windowname="note"    setTopZ={setTopZ}
 zIndex={windowState.note.z} setWindowState={setWindowState}/>}

  {windowState.pdf.open&& <Resume windowname="pdf"     setTopZ={setTopZ}
 zIndex={windowState.pdf.z} setWindowState={setWindowState}/> }

  {windowState.spotify.open&& <Spotify windowname="spotify"     setTopZ={setTopZ}
 zIndex={windowState.spotify.z} setWindowState={setWindowState}/> }

  {windowState.cli.open&& <Cli windowname="cli"      setTopZ={setTopZ}
 zIndex={windowState.cli.z} setWindowState={setWindowState}/>}

 {windowState.links.open&& <Mail windowname="cli"      setTopZ={setTopZ}
 zIndex={windowState.cli.z} setWindowState={setWindowState}/>}







  </main>
  )
}

export default App
