import { useState, useEffect } from "react";
import axios from 'axios';
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("it works");
    axios.get('http://localhost:3000/posts.json')
      .then((response) => {
        // handle success
        setPosts(response.data);
      });

  };
  useEffect(handleIndexPosts, []);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post)
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div className="container">
      <PostsNew />
      <br></br>
      {/* <div className="row row-cols-2">
  <div className="col-6"> */}
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      {/* </div>
      </div> */}
      <Modal show={isPostsShowVisible} onClose={handleClose}>
      <PostsShow currentPost={currentPost}/>
      </Modal>
    </div>
  );
}
