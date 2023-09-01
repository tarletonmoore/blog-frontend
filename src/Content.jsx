import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import axios from 'axios'
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { PostsNew } from "./PostsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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

// const handleUpdatePost = () => {


// }

     useEffect(handleIndexPosts, []);
  return (
    <div>
      <br></br>
      <LogoutLink />
      <br></br>
      <br></br>
      <Signup />
      <br></br>
      <Login />
      <br></br>
      <PostsNew onCreatePost={handleCreatePost}/>
    <PostsIndex posts={posts} onShowPost={handleShowPost}/>
    <Modal show={isShowPostsVisible} onClose={handleClose}>
<PostsShow post={currentPost}/>
    </Modal>
    </div>
  );
}
