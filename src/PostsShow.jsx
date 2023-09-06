import axios from "axios"

export function PostsShow({post, onUpdatePost, onDestroyPost}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log('submitting')
 onUpdatePost(post.id, params)
  }

  const handleClick = () => {
    console.log('click')
    onDestroyPost(post.id)
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br></br>
      <button onClick={handleClick}>Delete Post</button>
      <br></br>
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