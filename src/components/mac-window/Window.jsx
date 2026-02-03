import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"


const Window = ({children,width="40vw",height="50vh",Xasix="100",Yasix="100" ,windowname,setWindowState}) => {
  return (
   <Rnd default={{
    width:width,
    height:height,
    x:Xasix,

    y:Yasix
    
   }}  >
   <div className="window" >
   <div className="nav">
        <div className="dots">
            <div onClick={()=>setWindowState(state=>({...state,[windowname]:false}))} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
        </div>
        <div className="title">
            <p>ameenshariff - Zsh </p>
        </div>
   </div>
   <div className="main-content">
{children}
   </div>
   </div>
   

   </Rnd>
  )
}

export default Window
