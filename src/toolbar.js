import React from "react";

const Toolbar = ({selectFilter}) =>{
    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    return (
    <div>
        {
            filters.map((filter, i)=><button key={i} onClick={()=>selectFilter(filter)}>{filter}</button>)
        }
    </div>
    )
}

export default Toolbar