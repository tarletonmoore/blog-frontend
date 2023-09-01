import axios from "axios"

export function PostsShow({post}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log('submitting')
    axios.patch(`http://localhost:3000/posts/${post.id}.json`, params).then(response => {
      console.log(response.data);
    })
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" defaultValue={post.title}/>
        </div>
        
        <div>
          Body: <input name="body" type="text" defaultValue={post.body}/>
        </div>
        <div>
         Image: <input name="image" type="text" defaultValue={post.image}/>
        </div>
      <br></br>
        <button type="submit">Update post</button>
      </form>
    </div>
  )
  }