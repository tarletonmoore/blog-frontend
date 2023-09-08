import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  let validationMessage;

  if (name.length > 20) {
    validationMessage = (
      <small className="text-danger"> name is too long</small>
      )
    } else if (name.length === 20) {
      validationMessage = (
        <small className="text-warning"> name is at max length</small>
      )
  } else if (name.length < 2) {
    validationMessage = (
      <small className="text-danger"> name is too short</small>
    )
  } else {
    validationMessage = (
      <small className="text-success"> {20 - name.length} Characters remaining</small>
    )
  }


  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" value={name} onChange={event => setName(event.target.value)}/>
          {validationMessage}
          {/* {20 - name.length < 0 ? (<small> name is too long</small>) : (<small> {20 -name.length} characters remaing </small>)}  */}
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <br></br>
        <button type="submit">Signup</button>
      </form>
     
    </div>
  );
}