import React from 'react'
import { Button,  Col, Row } from 'react-bootstrap'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
      <h1 style={{color:"blueviolet",fontSize:"40px"}}>Wlcome to <span className='text-warning'>Meadia-Player</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ea nisi quam repellat veritatis molestiae corrupti nam numquam ad, aut velit quisquam ipsum laboriosam blanditiis sint error harum? Ducimus, nihil!</p>
<Link to={"/home"}><Button className='btn-btn-info'>Get Started</Button>
</Link>    
  </Col>
      <Col lg={5}>
      <img src="https://media.tenor.com/h_0HnJ9zyj0AAAAM/muzeke.gif" alt="" />
      </Col>
      <Col></Col>

    </Row>

    {/* card section */}

    <div className='container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100'>
      <h2 className='text-center text-warning'>Features</h2>
      <div className='card mb-5 mt-5 d-flex flex-row align-items-center justify-content-between w-100'>

        {/* cards */}
      <MDBCard style={{width:"18rem"}}>
      <MDBCardImage src='https://cdn-icons-gif.flaticon.com/17471/17471571.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Managing Videos</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    {/* 2 */}

    <MDBCard style={{width:"18rem"}}>
      <MDBCardImage src='https://i.pinimg.com/originals/83/d3/a4/83d3a481188daa606e0012b07ebe79f6.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Categoraized Videos</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    {/* 3 */}

    <MDBCard style={{width:"18rem"}}>
      <MDBCardImage src='https://cdn.dribbble.com/users/2735/screenshots/5472692/world-clock-pro-mobile-v3copy.gif' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Watch History</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </div>
    </div>

    {/* details section */}
    <div className='container border border-2 d-flex align-items-center justify-content-center mt-5 p-3'>
      <div className='col-lg-5'>
        <h4 className='text-warning fw-bolder'>Simple,Powerful & Fast</h4>
        <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos in vitae delectus praesentium qui reiciendis assumenda eligendi fugiat, dolore eaque, itaque est asperiores ratione blanditiis sed debitis quo, unde expedita!</h6>

        <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos in vitae delectus praesentium qui reiciendis assumenda eligendi fugiat, dolore eaque, itaque est asperiores ratione blanditiis sed debitis quo, unde expedita!</h6>


        <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos in vitae delectus praesentium qui reiciendis assumenda eligendi fugiat, dolore eaque, itaque est asperiores ratione blanditiis sed debitis quo, unde expedita!</h6>
      </div>
      <div className='col-lg-5'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hHuG7FIKgtc?si=TPTYs_3jGrGFBues" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
      </div>
    </div>
      
    </>
  )
}

export default LandingPage
