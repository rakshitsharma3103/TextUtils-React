import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black', 
    //     backgroundColor: 'white'
    // })
  
    const myStyle = {
      color: props.mode = 'dark'?'white':'#042743',
      backgroundColor: props.mode = 'dark'?'rgb(36 74 104)':'white'
    }

  return (
    <div className="container" style={{ color: props.mode = 'dark'?'white':'#042743'}}>
        <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" style={myStyle} id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Analyzec the Text
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" style={myStyle} id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use         </button>
     </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" style={myStyle} id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         Browser Compatible
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
      </div>
    </div>
  </div>
</div>
    </div>
  )
} 
