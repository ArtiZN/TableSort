import React, { useState, useEffect } from 'react';
import music from './Surprise.mp3' 
import TableContent from './utils/TableContent'


function App() {

  const [data, setData] = useState([
    {id: 1, name: 'Oleg', salary: 5000, isMarried: true, dick: 15},
    {id: 2, name: 'Pavel', salary: 20000, isMarried: true, dick: 42},
    {id: 3, name: 'Bill', salary: 3000000000, isMarried: true, dick: 14},
    {id: 4, name: 'Elon', salary: 1500000000, isMarried: true, dick: 13},
    {id: 5, name: 'Artem', salary: 0, isMarried: false, dick: 0}
  ])

  

  const [buttonPressed, setButtonPressed] = useState(false)
  const mymusic = new Audio(music)
  
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (buttonPressed) mymusic.play()
    else stopAudio()
  },[buttonPressed])

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

  function display(){
    if (buttonPressed) return(
      <>
      <div className='trap'>
        <img src="https://media1.tenor.com/images/ffc86c2754e1bc3c8c2ac8ff572b0766/tenor.gif?itemid=16690874" className='gif'/>
        
      </div>
      <button onClick={onClicked} style={Styles.dangerousButton}> Stop this </button>
      </>  
    )
    else return(
      <div className='screen'> 
        <div id='tableDiv'>
          <div id='table'>
            <div className='row'>
              <div id='column'>
                ID
              </div>
              <div id='column'>
                Name
              </div>
              <div id='column'>
                Salary
              </div>
              <div id='column'>
                Married?
              </div>
              <div id='column'>
                Dick
              </div>
            </div>
           <TableContent data={data}/>
          </div>
          
        </div>
        <div  id='button'> {/*that button */}
          <button onClick={onClicked} style={Styles.dangerousButton}> Don't Click </button>
        </div>
      </div>
    )
  }

  return (
    <>
    {display()}
    </>

   
    );
}

export default App;
