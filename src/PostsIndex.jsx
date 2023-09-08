import { useState } from "react";

export function PostsIndex({ posts }) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles"/>
      <datalist id="titles">{posts.map(post => 
<option key={post.id}>{post.title}</option>
      )}
      </datalist>

      {posts.filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase())).map((post) => (
        <div key={post.id} className="posts">
           <br></br>
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
