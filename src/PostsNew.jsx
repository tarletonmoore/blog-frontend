import { useState } from "react";
import axios from "axios";

export function PostsNew() {

  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return(
    <div>
      <h1>New Post</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
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