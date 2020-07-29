import React, { useState } from 'react'

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
        if (value!==props.data.length) props.setPagedData(props.data.slice(props.start,props.start + value))
         else props.setPagedData(props.data.slice(0, value))
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