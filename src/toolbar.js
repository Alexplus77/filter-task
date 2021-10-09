import React from "react";
import './App.css'
const Toolbar = ({selectFilter, filters, selected}) =>{

    return (
    <div className='toolbar'>
        {
            ['All', ...filters].map((filter, i)=><button key={i} className={selected===filter ? 'App-link': null } onClick={()=>selectFilter(filter)}>{filter}</button>)
        }
    </div>
    )
}

export default Toolbar