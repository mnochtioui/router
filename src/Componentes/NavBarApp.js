import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from 'react-rating-stars-component';





const NavBarApp = ({ nameSearch, setNameSearch, rateSearch, setRateSearch }) => {

  const handleNameChange = (e) => {
    setNameSearch(e.target.value)
  }

  const handleRateChange = (e) => {

    setRateSearch(e)
  }

  const refreshPage = () => window.location.reload()

  return (
    <Navbar style={{ background: 'lightblue', textAlign:'left' }} expand="lg"  >
      <Container>
        <Navbar.Brand style={{ color: 'red' }}>MyVideoTek</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"

            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search By Name"
              className="me-2"
              aria-label="Search By Name"
              value={nameSearch}
              onChange={handleNameChange}
            />
            

          </Form>  
          <ReactStars
              count={10}
              size={20}
              isHalf={false}
              activeColor="#ffd700"
              value={rateSearch}
              onChange={handleRateChange}
            />    <Button type="reset" variant="outline-danger" onClick={refreshPage}>Annuler</Button>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBarApp

