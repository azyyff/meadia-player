import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deletevideoAPI } from '../services/allAPI';





function VideoCard({video,insideCategory,setDeleteVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);


  const{caption,link}=video

  let today = new Date()
  // console.log(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:"2-digit"}).format(today));

  let TimeStamp =new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:"2-digit"}).format(today)

  let VideoHistory= {caption,link,TimeStamp}


  // api call

  await addHistoryAPI(VideoHistory)

  }

const dragStarted=(e,id)=>{
  console.log("video drag started :",id);
  e.dataTransfer.setData("videoId",id)
  
}

const removeVideo=async(id)=>{
  await deletevideoAPI(id)
  setDeleteVideoResponse(true)
}






  return (
    <>
      
      <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" width={"100%"} height={"350px"} onClick={handleShow}  src={video.url} />
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <Card.Title>{video.caption}</Card.Title>
        <Card.Text>
         
        </Card.Text>
       { insideCategory?null: <Button variant="primary" onClick={()=>removeVideo(video?.id)}><i class="fa-solid fa-trash"></i></Button>}
        </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        
        
      </Modal>




    </>
  )
}

export default VideoCard
