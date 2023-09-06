import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function SeperatePostsShow() {
  const [post, setPost] = useState({})

  const params = useParams()

  const getPostData = () => {
    console.log(params)       
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then(response => {
      console.log(response)
      setPost(response.data)
    })
  }

  useEffect(getPostData, [])

  return (
  <div>

      <h1> {post.title}</h1>
      <p> {post.body}</p>
      <img style={{width: '300px' }} src={post.image} />
    </div>
  );
}