import { useState } from "react";

export function PostsIndex({ posts, onShowPost }) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {posts.filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase())).map((post) => (
        <div key={post.id} className="posts">
           
          <div className="card">
            <div className="card-body">

          <h2>{post.title}</h2>
          <p> {post.body}</p>
          <img src={post.image} alt="" />
<br></br>
          {/* <button onClick={() => onShowPost(post)}>More info</button>  */}
          <br></br>
          <a href={`/posts/${post.id}`}><button>Go to show page</button></a>
            </div>
          </div>      
       </div>
      ))}

    </div>
  );
}
