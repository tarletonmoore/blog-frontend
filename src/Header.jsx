import { LogoutLink } from './LogoutLink';
import './index.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

export function Header() {
const [user, setUser] = useState({})

const getUserData = () => {
axios.get("http://localhost:3000/users/current.json").then(response => 
setUser(response.data)
)
}

useEffect(getUserData, [])

  let authenticationLinks;

  if (localStorage.jwt === undefined) {
authenticationLinks = (
  <>
  <li className="nav-item">
  <Link to="/signup" className="nav-link" >Signup</Link>

</li>
<li className="nav-item">
  <Link to="/login" className="nav-link" >Login</Link>

</li>
</>
)
  } else {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <LogoutLink />

        </li>
      </>
    )
  }

  return (
    <header>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{user.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
          <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>

        </li>
           <li className="nav-item">
          <Link to="/posts" className="nav-link" >All Posts</Link>

        </li>
      
      
        <li className="nav-item">
          <Link to="/posts/new" className="nav-link" >New Post</Link>

        </li>
     {authenticationLinks}
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">New Post</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </header>
  );
}
