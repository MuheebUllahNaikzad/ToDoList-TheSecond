import React, { useState } from "react"
import PropTypes from "prop-types"



function MyComponent(){
    const fruits = [
    {
        name:'Apple',
        key: '1'
    } ,
    {
        name:'Banana',
        key: '2'
    } , 
    {
        name:'Cheeries',
        key: '3'
    } ,
     {
        name:'Date',
        key: '4'
     } ,
      {
        name:'Mango',
        key: '5'
      } , 
      {
        name:'Date',
        key: '6'
      }]
      const [color , setColor]=useState('red')
      const handleColorChange =()=>{
        setColor(event.target.value)
      }

    return(
        <div className="container">
        <ol>
        
        {fruits.map((e)=><li key={e.key}>{e.name}</li>)}
        </ol>

        <div className="box" style={{backgroundColor:`${color}`}}></div>
        <input value={color} type="color" onChange={handleColorChange} />
        </div>

    )
}

export default MyComponent