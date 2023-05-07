import React,{useState} from "react"
import{Modal,Button} from "react-bootstrap"
import psotService from "../services/psotService"
const UpdateModalComponent=(props)=>{
    const[isShow,invokeModal]=useState(false)
    const [title,setTitle]=useState(props.title)
    const [date,setDate]=useState(props.date)
    const [id,setId]=useState(props.id)
    const [selectedFile,setSelectedFile]=useState(" ")
    const initModal=()=>{
       return invokeModal(!isShow)
    }

    const handleUpdate=async(event)=>{
          event.preventDefault()

          const formData =new FormData()
          formData.append("id",id)
          formData.append("title",title)
          formData.append("date",date)

          if(selectedFile!=" " && selectedFile.length!=0){
            formData.append("image",selectedFile)
          } 
      const res = await psotService.update(formData)
      if(res.data.success==true){
        alert(res.data.message)
      }else{
        alert(res.data.message)
      }
      initModal()
    }
    return(
        <>
        <Button variant="success" onClick={initModal}>
        Edit
        </Button>
        <Modal show={isShow}>
         <Modal.Header closeButton onClick={initModal}>
           <Modal.Title>Update Post</Modal.Title>
         </Modal.Header>
         <form onSubmit={handleUpdate}>
         <Modal.Body>
            <input type="text"
                   name="title"
                   placeholder="Enter post Title"
                   value={title}
                   onChange={event=>setTitle(event.target.value)}
            />
            <br/>
            <br/>
               <input type="date"
                   name="date"
                   value={date}
                   onChange={event=>setDate(event.target.value)}
            />
            <br/>
            <br/>
               <input type="file"
                   name="file"
                   onChange={event=>setSelectedFile(event.target.files[0])}
            />
         </Modal.Body>
         <Modal.Footer>
            <Button variant="danger" onClick={initModal}>
                Close
            </Button>
            <Button type="submit" variant="dark" >
                Update
            </Button>
         </Modal.Footer>
         </form>
        </Modal>
        </>
    )
}
export default UpdateModalComponent