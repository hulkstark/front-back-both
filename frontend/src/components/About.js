import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        
        <div className="container">
            <h4 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>My skills</h4>
            <h4>Hands-on Relevant Industry Experience</h4>        
    <div className="container" style={{display: 'flex', marginTop:'30px', color: ''}}> 
     
<div className="card" style={{width: "18rem", marginRight: '10px', maarginLeft: '15px'}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>

  <div className="card" style={{width: "18rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>

  <div className="card" style={{width: "18rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>

  <div className="card" style={{width: "18rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>

  <div className="card" style={{width: "18rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
    </div>
    </div>     

        
    )
}
