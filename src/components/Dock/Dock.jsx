import React from 'react'
import "../Dock/dock.scss"
const Dock = ({setWindowState , openWindow}) => {


const github =()=>{
  // setWindowState(state =>({...state,github:true}))
  openWindow("github")

}
const note =()=>{
  openWindow("note")

}
const spotify =()=>{
  // setWindowState(state =>({...state,spotify:{open:true}}))
    openWindow("spotify")


}
const cli =()=>{
  openWindow("cli")

}
const pdf =()=>{
  openWindow("pdf")

}
const links =()=>{
  openWindow("links")

}




  return (
   <footer className='dock'>
    <div className="icon github" 
    onClick={github}
    ><img src="/icons/github.svg" alt="" />
    </div>

    <div className="icon calender"

  onClick={() => window.open("https://calendar.google.com", "_blank")}
    >
    <img src="/icons/calender.svg" alt="" />
    </div>

    <div className="icon link"
    onClick={links}
    ><img src="/icons/link.svg" alt="" />
    </div>

    <div className="icon mail"
    >
    
    <a href="mailto:ameenshariff3443@gmail.com">
      <img src="/icons/mail.svg" alt="" />
    </a>
    
    </div>

    <div className="icon note"
    onClick={note}
    >
    <img src="/icons/note.svg" alt="" />
    </div>

    <div className="icon pdf"
    onClick={pdf}
    >
    <img src="/icons/pdf.svg" alt="" />
    </div>

    <div className="icon spotify"
    onClick={spotify}
    >
    <img src="/icons/spotify.svg" alt="" />
    </div>

    <div className="icon cli"
    onClick={cli}
    >
    <img src="/icons/cli.svg" alt="" />
    </div>

   </footer>
  )
}

export default Dock
