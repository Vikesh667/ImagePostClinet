import React, { useEffect, useState } from "react";
import psotService from "../services/psotService";
import UpdateModalComponent from "./UpdateModalComponent";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function ShowComponent() {
  const [posts, setPost] = useState({});
  const fetchPosts = async () => {
    setPost(await psotService.getPosts());
  };
  useEffect(() => {
    fetchPosts();
  }, [posts]);
  const deletePost=async(id,e)=>{
   var res=await psotService.deletePosts(id)
   if(res.data.success==true){
       alert(res.data.message)
       document.getElementById(id).parentElement.parentElement.remove()
   }else{
    alert(res.data.message)
   }
  }
  

  return (
    <div>
      <h1>hell</h1>
      {posts.data != undefined && posts.data.data.length > 0 && (
        <table style={{ width: "100%" }} border="1">
          <thead>
            <th>Title</th>
            <th>Date</th>
            <th>Image</th>
            <th>Delete</th>
            <th>Edit</th>
          </thead>
          <tbody>
            {posts.data.data.map(post => (
            
                <tr>
                  <td>{post.title}</td>
                  <td>{post.date}</td>
                  <td>
                    <img
                      style={{ height: "100px", width: "100px" }}
                      src={`http://localhost:8000/api/postImages/${post.image}`}
                    />
                  </td>

                  <td>
                  <button id={post._id} onClick={(e)=>deletePost(post._id,e)}>Delete</button>
                  </td>
                  <td>
                    <UpdateModalComponent id={post._id} title={post.title} date={post.date}/>
                  </td>
                </tr>
            
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShowComponent;
