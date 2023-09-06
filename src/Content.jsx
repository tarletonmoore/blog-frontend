import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import axios from 'axios'
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { PostsNew } from "./PostsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {

const [posts, setPosts] = useState([])
const [isShowPostsVisible, setIsShowPostsVisible] = useState(false)
const [currentPost, setCurrentPost] = useState([])


const handleIndexPosts = () => {
  console.log("it works");
  axios.get('http://localhost:3000/posts.json')
    .then((response) => {
      // handle success
      setPosts(response.data);
    });

};


const handleShowPost = (post) => {
setIsShowPostsVisible(true)
  setCurrentPost(post)
}

const handleClose = () => {
  setIsShowPostsVisible(false)
}

const handleCreatePost = (params, successCallback) => {
      console.log("handleCreatePost", params);
       axios.post("http://localhost:3000/posts.json", params).then((response) => {
         setPosts([...posts, response.data]);
         successCallback();
       });
     };

const handleUpdatePost = (id, params) => {
console.log("workin")
axios.patch(`http://localhost:3000/posts/${id}.json`, params).then(response => {
  setCurrentPost(response.data)
  setPosts(posts.map(post => {
    if (post.id === id) {
      return response.data;
    } else {
      return post;
    }
  }))
})
}

const handleDestroyPost = (id) => {
  axios.delete(`http://localhost:3000/posts/${id}.json`).then(response => {
    console.log(response.data)
    // close the modal
    handleClose()
    // delete from the posts array
    setPosts(
      posts.filter(post => id !== post.id)
    )      
  })
}

     useEffect(handleIndexPosts, []);
  return (
    <div>
         <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/logout" element={<LogoutLink />}/>
      <Route path="/posts-new" element={<PostsNew onCreatePost={handleCreatePost}/>} />
      <Route path="/posts-index" element={<PostsIndex posts={posts} onShowPost={handleShowPost}/>}/>
    </Routes>
      <br></br>
      <Modal show={isShowPostsVisible} onClose={handleClose}>
<PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost}/>
    </Modal>
    
    </div>
  );
}
