import React from 'react'
import Window from '../mac-window/Window'
import "./resume.scss"

const Resume = ({windowname,setWindowState, setTopZ, zIndex}) => {
  return (
    <Window Xasix='300' Yasix='140' windowname={windowname} setTopZ={setTopZ} zIndex={zIndex} setWindowState={setWindowState}>
        <div className="resume">
            <iframe src="/AmeenResume.pdf" frameborder="0"></iframe>
        </div>
    </Window>
  )
}

export default Resume
