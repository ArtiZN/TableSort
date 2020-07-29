import React, { useState } from 'react'
import { set } from 'lodash'

function List(props){

    const [clicked, setClicked] = useState(false)

    const visibility = clicked ? {display:'block'} : { display:'none' }

    const Styles = {
        div: {
            backgroundColor: '#fffff0',
            width: '35%',
            borderRadius: '10px',
            textAlign: 'center',
            ...visibility,
        },
        Menu: {
            backgroundColor: '#fffff0',
            borderBottom: '1px grey solid',
            width: '35%',
            borderRadius: '10px',
            textAlign: 'center'
        }   
    }
    function divClicked(){
        setClicked(!clicked)
    }
    function setPaginatedNumber(e, value){
        e.preventDefault()
        props.setPagination(value)
        console.log(props.start)
        props.setPagedData(props.data.slice(props.start,props.start + value))
        setClicked(!clicked)
    }
  

    return  <div style={{marginTop:'750px'}}>
        <div style={Styles.Menu} onClick={divClicked}>Quantity</div>
        <div style={Styles.div}>
            <div style={{borderBottom: '1px grey solid',}} onClick={(event)=>{
                setPaginatedNumber(event, 20)
            }}>20</div>
            <div style={{borderBottom: '1px grey solid',}} onClick={(event)=>{
                setPaginatedNumber(event, 10)
            }}>10</div>
            <div style={{borderBottom: '1px grey solid',}} onClick={(event)=>{
                setPaginatedNumber(event, 5)
            }}>5</div>
            <div onClick={(event)=>{
                setPaginatedNumber(event, props.data.length)
            }}>No limit</div>
        </div>
    </div>
}

export default List