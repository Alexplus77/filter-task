import React from 'react'

const ProjectList = ({projectList}) =>{
    return (
       <div>
           {
               projectList.map(({img, category}, i)=><img key={i} src={img} alt={category}/>)
           }
       </div>
    )
}

export default ProjectList