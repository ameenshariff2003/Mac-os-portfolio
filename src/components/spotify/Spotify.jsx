import React from 'react'
import Window from '../mac-window/Window'
import "./spotify.scss"

const Spotify = ({windowname,setWindowState ,setTopZ, zIndex}) => {
  return (
    <Window width="30vw" height="58vh" Xasix='170' Yasix='190' setTopZ={setTopZ} zIndex={zIndex} windowname={windowname} setWindowState={setWindowState}>
    <div className="spotify">
<iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>    </div>

    </Window>
  )
}

export default Spotify
