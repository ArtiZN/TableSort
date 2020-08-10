import React, { useState, useEffect } from 'react';
import music from './Surprise.mp3' 
import TableContent from './utils/TableContent'
import _ from 'lodash'
import List from './utils/List';
import LeftArrow from './utils/LeftArrow'
import RightArrow from './utils/RightArrow'



function App() {

  const [data, setData] = useState([
    {id: 1, name: 'Vova', salary: 10000000, isMarried: false, dick: 156},
    {id: 2, name: 'Pavel', salary: 20000, isMarried: true, dick: 42},
    {id: 3, name: 'Bill', salary: 3000000000, isMarried: true, dick: 14},
    {id: 4, name: 'Elon', salary: 1500000000, isMarried: true, dick: 13},
    {id: 5, name: 'Mark', salary: 980, isMarried: true, dick: 12},
    {id: 6, name: 'Victor', salary: 0, isMarried: false, dick: 0},
    {id: 7, name: 'Artem', salary: 3, isMarried: true, dick: 4},
    {id: 8, name: 'Andrew', salary: 5, isMarried: false, dick: 3},
    {id: 9, name: 'Gay', salary: 10, isMarried: true, dick: 4},
    {id: 10, name: 'Van', salary: 65, isMarried: false, dick: 7},
    {id: 11, name: 'Oleg', salary: 5000, isMarried: true, dick: 15},
    {id: 12, name: 'Pavel', salary: 20000, isMarried: true, dick: 42},
    {id: 13, name: 'Bill', salary: 3000000000, isMarried: true, dick: 14},
    {id: 14, name: 'Elon', salary: 1500000000, isMarried: true, dick: 13},
    {id: 15, name: 'Mark', salary: 980, isMarried: true, dick: 12},
    {id: 16, name: 'Victor', salary: 0, isMarried: false, dick: 0},
    {id: 17, name: 'Artem', salary: 3, isMarried: true, dick: 4},
    {id: 18, name: 'Andrew', salary: 5, isMarried: false, dick: 3},
    {id: 19, name: 'Gay', salary: 10, isMarried: true, dick: 4},
    {id: 20, name: 'Van', salary: 65, isMarried: false, dick: 7},
    {id: 21, name: 'Oleg', salary: 5000, isMarried: true, dick: 15},
    {id: 22, name: 'Pavel', salary: 20000, isMarried: true, dick: 42},
    {id: 23, name: 'Bill', salary: 3000000000, isMarried: true, dick: 14},
    {id: 24, name: 'Elon', salary: 1500000000, isMarried: true, dick: 13},
    {id: 25, name: 'Mark', salary: 980, isMarried: true, dick: 12},
    {id: 26, name: 'Victor', salary: 0, isMarried: false, dick: 0},
    {id: 27, name: 'Artem', salary: 3, isMarried: true, dick: 4},
    {id: 28, name: 'Andrew', salary: 5, isMarried: false, dick: 3},
    {id: 29, name: 'Gay', salary: 10, isMarried: true, dick: 4},
    {id: 30, name: 'Van', salary: 65, isMarried: false, dick: 7},
    {id: 31, name: 'Oleg', salary: 5000, isMarried: true, dick: 15},
    {id: 32, name: 'Pavel', salary: 20000, isMarried: true, dick: 42},
    {id: 33, name: 'Bill', salary: 3000000000, isMarried: true, dick: 14},
    {id: 34, name: 'Elon', salary: 1500000000, isMarried: true, dick: 13},
    {id: 35, name: 'Mark', salary: 980, isMarried: true, dick: 12},
    {id: 36, name: 'Victor', salary: 0, isMarried: false, dick: 0},
    {id: 37, name: 'Artem', salary: 3, isMarried: true, dick: 4},
    {id: 38, name: 'Andrew', salary: 5, isMarried: false, dick: 3},
    {id: 39, name: 'Gay', salary: 10, isMarried: true, dick: 4},
    {id: 40, name: 'Van', salary: 65, isMarried: false, dick: 7},
  ])

  const th =[
  {
    title : 'ID',
    field: 'id'
  },
  {
    title : 'Name',
    field: 'name'
  },
  {
    title : 'Salary',
    field: 'salary'
  },
  {
    title : 'Married?',
    field: 'isMarried'
  },
  {
    title : 'Dick',
    field: 'dick'
  }]

  
  const [order, setOrder] = useState('asc');
  const [buttonPressed, setButtonPressed] = useState(false)
  const mymusic = new Audio(music)
  const [pagination, setPagination] = useState(10)
  const [start, setStart] = useState(0)
  const [pagedData, setPagedData] = useState(data.slice(start, start+pagination))


  useEffect(()=>{
    if (buttonPressed) {
      mymusic.play()
    }
    else mymusic.pause()  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[buttonPressed])

  useEffect(()=>{
    setPagedData(data.slice(0, pagination))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])

  useEffect(()=>{
    setPagedData(data.slice(start, start+pagination))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  const Styles = {
    dangerousButton: {
      width:'100%', 
      height: '30px',
      borderRadius: '20px',
      margin: '10px -10px'
    },
    row: {
      display:'flex', 
      height: '20%',
    }
  }
  function stopAudio() {
    mymusic.pause()  
}
  function onClicked(){
    if (buttonPressed) stopAudio()
    setButtonPressed(!buttonPressed)
  }

  function orderChange(){
    if (order==='asc') setOrder('desc')
    else setOrder('asc')
  }

  function onSort(e, field){
    e.preventDefault()
      setData(_.orderBy(data, field, order))
     orderChange() 
  }
  function calibrate(e, direction){
    e.preventDefault()
    if (direction){
      if (start+pagination<data.length)
      setStart(start+pagination)
      else setStart(data.length-pagination)
    }

    else {
      if (!(start<pagination)) 
      setStart(start - pagination)
      else setStart(0)
    }
    setPagedData(data.slice(start, start+pagination))
  }
  
  return (
    <>
    {!buttonPressed && 
      <div className='screen'> 
        <div id='bigDiv'>
          <div id='tableDiv'>
          <LeftArrow calibrate={calibrate}></LeftArrow>
            <div id='table'>
              <div className='row'>
                {th.map(item=>{
                  return <div 
                  id='column' 
                  onClick={(event=>{
                    onSort(event, item.field)
                  })}>{item.title}</div>
                })}
              </div>
              <TableContent data={pagedData}/>
              <div style={{margin:'30px 350px'}}>
                <List 
              setPagination={setPagination}
              data={data} setPagedData={setPagedData}
                pagedData={pagedData}
                  start = {start}
                  pagination={pagination}
                />
              </div>                     
            </div>    
            <RightArrow calibrate={calibrate}/>
          </div>
         </div>  
        <div  id='button'> {/*that button */}
          <button onClick={onClicked} style={Styles.dangerousButton}> Don't Click </button>       
        </div>
      </div>}

      {buttonPressed && <>
      <div className='trap'>
        <img src="https://media1.tenor.com/images/ffc86c2754e1bc3c8c2ac8ff572b0766/tenor.gif?itemid=16690874" className='gif' alt="Oh shit I'm sorry"/>    
      </div>
      <button onClick={onClicked} style={Styles.dangerousButton}> Stop this </button>
      </>}   
    </> 
    );
}

export default App;
