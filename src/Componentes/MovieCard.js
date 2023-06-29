import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
import { Link } from "react-router-dom";
 

function MovieCard({ chouf }) {

  return (
   <div>  
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={chouf.posterURL} style={{ width: '18rem' }}/>
      <Card.Body>
      <Link to={`/details/${chouf.name}`} >
        <Card.Title>{chouf.name}  </Card.Title>
        </Link>
        <ReactStars
            count={10}
            size={20}
            isHalf={true}            
            activeColor="#ffd700"
            value={chouf.rating}
            edit={false}
             />
          <Card.Text>
          {chouf.rating}
          <hr />
          {chouf.description}

        </Card.Text>
        
      </Card.Body>
    </Card>
 
    </div>
  );
}

export default MovieCard