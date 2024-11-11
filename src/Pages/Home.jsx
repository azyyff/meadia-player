import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'
import View from '../Components/View'


function Home() {

  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})


  return (
    <>

    <div className='container mt-5 d-flex justify-content-between mb-3'>
      <div className='add-videos'>
        <Add setUploadVideoResponse={setUploadVideoResponse} />
      </div>

      <Link to={'/watch-history'}style={{TextDecoration:"none"}} className='fw-bolder fs-2 text-primary'>Watch-History<i class="fa-solid fa-arrow-up-from-bracket"></i></Link>

    </div>
    <div className='container-fluid mt-5 w-100 row'>
      <div className='col-lg-9 all-videos'>
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
      </div>
      <div className='col-lg-3 all-category'>
      <Category dropVideoResponse={dropVideoResponse}/>
    </div>
    </div>
      
      
    </>
  )
}

export default Home
