import React , {useEffect,useState} from 'react'
import Window from '../mac-window/Window'
import Markdown from 'react-markdown'
import "./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Note = ({windowname,setWindowState}) => {

    const [markdown,setMarkdown] = useState(null)


    useEffect(()=>{
        fetch("/bio.md")
        .then(res=>res.text())
        .then(text=>setMarkdown(text))
    },[])
  return (
    <Window Xasix='140' Yasix='120' windowname={windowname} setWindowState={setWindowState}>

    <div className="note">
        {markdown? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> :<p>Loading....</p>}
    </div>

    </Window>
      
    
  )
}

export default Note
