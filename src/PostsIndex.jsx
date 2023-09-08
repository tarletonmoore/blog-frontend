import { useState } from "react";
import axios from "axios";

export function PostsIndex({ posts, onBackendSearch }) {
  const [searchFilter, setSearchFilter] = useState("");

  const [searchFilterBackend, setSearchFilterBackend] = useState("")

  const backendSearch = () => {
    console.log('searching backend');
    console.log(searchFilterBackend);
    axios.get(`http://localhost:3000/posts/search.json?search_term=${searchFilterBackend}`).then(response => {
      console.log(response.data);
      onBackendSearch(response.data);
    })
  }

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles"/>
      <datalist id="titles">{posts.map(post => 
<option key={post.id}>{post.title}</option>
      )}
      </datalist>
      <br />
      <br />
      <p>Backend Search: <input type="text" value={searchFilterBackend} onChange={event => setSearchFilterBackend(event.target.value)} /><button onClick={backendSearch}>Search</button></p>

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
