import React from 'react'
import Window from '../mac-window/Window'
import gitData from '../../assets/git-data'
import "./github.scss"

const GitCard = ({data})=>{
    return(
         <div className="card">

         <img src={data.img} alt="" className="img" />
         <h1>{data.title}</h1>
         <p className='desc'>{data.description}</p>

         <div className="tags">
            {
                data.tags.map(tag =>{
                    return(
                        <p className='tag'>{tag}</p>
                    )
                })
            }
         </div>
         <div className="urls">

         <a href={data.repoLink}>Github Link</a>
           {data.demoLink && <a href={data.demoLink}>Live Link</a> }       


         </div>

         </div>
    )

}


const Github = () => {
  return (
    <Window>
        <div className="cards">
        {gitData.map(project =>{
            return <GitCard data={project}/>
             
        })}

        </div>
    </Window>
  )
}

export default Github
