import React from 'react'
import './TaskCard.css'
import Imgdelete from "./trash-bin.png"

function taskCard({title, category , delFunction , index}) {
  return (
    <div  className='task-card'>
    <h2 className='task-title'>{title}</h2>
    <span className='task-category'>{category}</span>
    <img src={Imgdelete} alt='delete' className='delete-icon'
    
    onClick={()=>{
      delFunction(index)
    }}
    
    />
    </div>)
  
}

export default taskCard