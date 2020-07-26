import React from 'react' 

 export default props => (
     props.data.map(item =>{
        return <div className='row'>
            <div id='column'>
                {item.id}
            </div>
            <div id='column'>
                {item.name}
            </div>
            <div id='column'>
                {item.salary}
            </div>
            <div id='column'>
                {item.isMarried ?
                <div>Yes</div> : <div>No</div>}
            </div>
            <div id='column'>
                {item.dick}
            </div>
        </div>
     })
     
 )
    
