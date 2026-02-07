import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"


const Window = ({children,width="40vw",height="50vh",Xasix="100",Yasix="100" , setTopZ , zIndex, windowname,setWindowState}) => {
  const isMobile = window.innerWidth < 768


  
  
    return (
   <Rnd style={{ zIndex }}
   cancel=".red , .main-content"
   
    default={{
    width: isMobile ? "95%" : width,
    height: isMobile ? "30%" : height,
    x: isMobile ? 10 : Xasix,
    y: isMobile ? 70 : Yasix
  }}
  minWidth={isMobile ? "90%" : 300}
  minHeight={340}
  bounds="window" >
   <div className="window" 
  onMouseDown={() => {
  setTopZ(prev => {
    const newZ = prev + 1

    setWindowState(state => ({
      ...state,
      [windowname]: {
        ...state[windowname],
        z: newZ
      }
    }))

    return newZ
  })
}} >
   <div className="nav">
        <div className="dots">
            <div onClick={()=>setWindowState(state=>({...state,[windowname]:{open:false}}))} className="dot red"></div>
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
