export function PostsShow({currentPost}) {

  return (
    <div>
      <h2>Title: {currentPost.title}</h2>
      <p>{currentPost.body}</p>
      <p>{currentPost.image}</p>
    </div>
  )
}