import React from 'react'
import leftArrow from '../LArrow.png'

function LeftArrow(props){
    return <img src={leftArrow}   
    id='leftArrow' 
    alt="Oh shit I'm sorry"
    onClick={(event)=>{
    props.calibrate(event, false)
}}  />
}
export default LeftArrow