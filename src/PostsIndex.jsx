export function PostsIndex({ posts, onShowPost }) {
  console.log({ posts });
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="posts">
           
          <div className="card">
            <div className="card-body">

          <h2>{post.title}</h2>
          <p> {post.body}</p>
          <img src={post.image} alt="" />
<br></br>
          <button onClick={() => onShowPost(post)}>More info</button> 
          
            </div>
          </div>      
       </div>
      ))}

    </div>
  );
}
