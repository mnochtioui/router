import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button  } from 'react-bootstrap'



const Details = ({movies}) => {

    let x=useParams();
    console.log("Params >> "+x);
    let filteredArray=movies.filter((el)=>el.name===x.name);
    console.log("filteredArray >> "+filteredArray);
    const navigate=useNavigate();

  return (
    <div>
       {filteredArray.map((movie)=>{return (
        <div>
            <h1>{movie.name}</h1>
            <hr />
            <h4>{movie.rating}</h4>
            <hr />
            <p>{movie.description}</p>
            <hr />
             
<iframe width="1180" height="664" src={movie.trailer} title={movie.name} frameborder="0" allow="autoplay;  encrypted-media" allowfullscreen></iframe>
             
             <hr />
             <Button  variant="primary" onClick={()=>navigate("/")} >Let's Go Back</Button> 
        </div>

       )})} 
        </div>
  )
}

export default Details