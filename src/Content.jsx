import { useState, useEffect } from "react";
import axios from 'axios';
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("it works");
    axios.get('http://localhost:3000/posts.json')
      .then((response) => {
        // handle success
        setPosts(response.data);
      });

  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <br></br>
      {/* <button onClick={handleIndexPosts}>Get Posts</button> */}
      <PostsIndex posts={posts} />
    </div>
  );
}
