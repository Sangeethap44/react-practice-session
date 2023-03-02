import React, { Component } from 'react'

 class Course extends Component {
  render() {
    let payloadData=this.props.data
  return (
    <div className="mainBlock">
    <center>
      <div>
        <img src={payloadData[0].std_photo} alt="sahana's photo" />
        <h2>{payloadData[0].std_name}</h2>
        <h3>{payloadData[0].std_class}</h3>
        <p>{payloadData[0].std_id}</p>
        <p>{payloadData[0].std_sub}</p>
      </div>
    </center>  

   <center>
     <div>
        <img src={payloadData[1].std_photo} alt="sagarika's  photo" />
        <h2>{payloadData[1].std_name}</h2>
        <h3>{payloadData[1].std_class}</h3>
        <p>{payloadData[1].std_id}</p>
        <p>{payloadData[1].std_sub}</p>
     </div>
     </center>  
      
    </div>
    )
  }
}

export default Course 
