import './App.css'
import { useState } from "react";
import axios from 'axios';

function Header() {

  return(
    <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
  )
}

function Footer() {

  return(
    <footer>
    <p>Copyright 20XX</p>
  </footer>
  )
}

function PostsNew() {

  return(
    <div>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
        Image: <input type="text" />
        </div>
        <button type="submit">Create blog</button>
      </form>

      </div>
  )
}

function PostsIndex({posts}) {
console.log({posts})
  return (
<div id="posts-index">
      <h1>All posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p> {post.body}</p>
          <img src={post.image} alt="" />
          
          {/* <button>More info</button> */}
        </div>      
      ))}
      
    </div>    
  )
}

function Content() {
  const [posts, setPosts] = useState([]);
  
const handleIndexPosts = () => {
  console.log("it works")
  axios.get('http://localhost:3000/posts.json')
  .then((response) => {
    // handle success
    setPosts(response.data);
  })
 
}

  return(
    <div>
    <PostsNew />
    <br></br>
    <button onClick={handleIndexPosts}>Get Posts</button>
    <PostsIndex posts={posts}/>
    </div>
  )
}

function App() {
  return (
    <div> 
     <Header />


      <Content />

    <Footer/>
    </div>
    
  );
}

export default App;