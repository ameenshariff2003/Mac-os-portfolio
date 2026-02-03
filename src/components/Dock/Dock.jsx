import React from 'react'
import "../Dock/dock.scss"
const Dock = ({setWindowState}) => {


const github =()=>{
  setWindowState(state =>({...state,github:true}))

}
const note =()=>{
  setWindowState(state =>({...state,note:true}))

}
const spotify =()=>{
  setWindowState(state =>({...state,spotify:true}))

}
const cli =()=>{
  setWindowState(state =>({...state,cli:true}))

}
const pdf =()=>{
  setWindowState(state =>({...state,resume:true}))

}




  return (
   <footer className='dock'>
    <div className="icon github" 
    onClick={github}
    ><img src="/icons/github.svg" alt="" />
    </div>

    <div className="icon calender"
    >
    <img src="/icons/calender.svg" alt="" />
    </div>

    <div className="icon link"
    ><img src="/icons/link.svg" alt="" />
    </div>

    <div className="icon mail"
    >
    <img src="/icons/mail.svg" alt="" />
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
