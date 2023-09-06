import { useState } from "react";
import axios from "axios";

export function PostsNew({onCreatePost}) {


  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreatePost(params)
    event.target.reset();
    window.location.href = "/posts"
  };

  return(
    <div>
      <h1>New Post</h1>
    
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
         Image: <input name="image" type="text" />
        </div>
      <br></br>
        <button type="submit">Create post</button>
      </form>
    </div>
  )
}