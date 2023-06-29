import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMovie = ({movies, setMovies}) => {
    const [show, setShow]=useState(false);
    
    const [newName, setNewName]=useState("");
    const [newRate, setNewRate]=useState(0);
    const [newDesc, setNewDesc]=useState("");
    const [newURL, setNewURL]=useState("");

    const handleShow=()=>{setShow(true)}
    const handleClose=()=>{setShow(false)}

    const handleSave=()=>{
        let newMovie={
            id: Math.random(),
            name: newName,
            rating: newRate, 
            description: newDesc,
            posterURL: newURL
        };
        setMovies([...movies, newMovie]);
        handleClose();

    }

  return (
    <div>
        <Button  variant="outline-success" onClick={handleShow} >Ajouter un nouveau Video</Button>
         
       

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="titre de la video"
                onChange={(e)=>setNewName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number" min='0' max="10" step="0.5"
                placeholder="rating de la video"
                onChange={(e)=>setNewRate(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e)=>setNewDesc(e.target.value)}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>URL Poster</Form.Label>
              <Form.Control
                type="url"  
                placeholder="url poster"
                onChange={(e)=>setNewURL(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default AddMovie