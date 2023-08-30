export function PostsIndex({ posts, onShowPost }) {
  console.log({ posts });
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p> {post.body}</p>
          <img src={post.image} alt="" />

          <button onClick={onShowPost}>More info</button>        </div>
      ))}

    </div>
  );
}
