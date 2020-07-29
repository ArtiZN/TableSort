import React from 'react'
import rightArrow from '../RArrow.png'

function RightArrow(props){
    return <img src={rightArrow}   
        id='leftArrow' 
        alt="Oh shit I'm sorry"
        onClick={(event)=>{
        props.calibrate(event, true)
    }}  />
}

export default RightArrow