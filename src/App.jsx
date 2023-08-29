import './App.css'

function Header() {

  return(
    <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
  )
}

function Footer() {

  return(
    <footer>
    <p>Copyright 20XX</p>
  </footer>
  )
}

function PostsNew() {

  return(
    <div>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
        Image: <input type="text" />
        </div>
        <button type="submit">Create blog</button>
      </form>

      </div>
  )
}

function PostsIndex({posts}) {
console.log({posts})
  return (
<div id="posts-index">
      <h1>All posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p> {post.body}</p>
          <img src={post.image_url} alt="" />
          
          <button>More info</button>
        </div>      
      ))}
      
    </div>    
  )
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "blog1",
      body: "this is a blog",
      image: "___",
    },
    {
      id: 2,
      title: "blog2",
      body: "this is another blog",
      image: "___",
    },
    {
      id: 3,
      title: "blog3",
      body: "third time's the charm",
      image: "___",
    },
  ];
  return(
    <div>
    <PostsNew />
    <PostsIndex posts={posts}/>
    </div>
  )
}

function App() {
  return (
    <div> 
     <Header />


      <Content />

    <Footer/>
    </div>
    
  );
}

export default App;