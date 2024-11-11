import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>

<Navbar className="bg-primary">
        <Container>
          <Link to={'/'}  style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://www.freeiconspng.com/uploads/player-icon-18.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Meadia-Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
