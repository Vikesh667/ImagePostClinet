import React, { useState } from "react";
import psotService from "../services/psotService";
const CreateComponent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
     e.preventDefault()
    const formData= new FormData()
    formData.append("title",title)
    formData.append("date",date)
    formData.append("image",image)
    const res=await psotService.create(formData)
    if(res.data.success==true){
        setMessage("Post created successfully")
    }else{
        setMessage("Post Failed!")
    }
    setTimeout(function(){
        setMessage(" ")
    },2000)
    e.target.reset()
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="title"
         placeholder="Enter Post Title" 
         onChange={event=>setTitle(event.target.value)}
         required
         />
         <input type="date" 
        name="date"
         onChange={event=>setDate(event.target.value)}
         required
         />
          <input type="file" 
        name="image"
         onChange={event=>setImage(event.target.files[0])}
         required
        />
        <button>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default CreateComponent;
