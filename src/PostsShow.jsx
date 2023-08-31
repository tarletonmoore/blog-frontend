export function PostsShow({currentPost}) {

  return (
    <div>
      <h2>Title: {currentPost.title}</h2>
      <p>{currentPost.body}</p>
      
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={currentPost.image} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={currentPost.image} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={currentPost.image} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </div>
  )
}