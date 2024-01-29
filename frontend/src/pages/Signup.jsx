import { useState } from "react";

const Signup = () => {
  const initialFormState = {
    name: "",
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialFormState);
  const handleSubmit = (e) => {
    e.preventDefault();
    // FormData is a built-in object that provides a way to easily construct a list of key/value pairs representing the form entries and their values.
    // e.target refers to the form element itself FormData automatically collects all the form inputs and their values that has a "name" property
    // Object.fromEntries takes an iterator and returns a JS object
    // formData.entries() returns an "iterator"
    // const formData = new FormData(e.target);
    // const userData = Object.fromEntries(formData.entries());
    let userData = formData;
    fetch("http://localhost:3000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.ok) {
          setFormData(initialFormState)
          return res.headers.get("x-auth-token");
        } else {
          throw new Error("Signup failed");
        }
      })
      .then((token) => {
        // console.log(token);
        localStorage.setItem("test-auth-token", token);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <br />
      {/* <form method="POST" action="http://localhost:3000/api/users/signup"> */}
      <form onSubmit={handleSubmit}>
        {/* <form> */}
        <label htmlFor="name">
          name
          <input
            value={formData.name}
            type="name"
            name="name"
            id="name"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </label>
        <label htmlFor="email">
          email
          <input
            value={formData.email}
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </label>
        <br />
        <label htmlFor="password">
          password
          <input
            value={formData.password}
            type="text"
            id="password"
            name="password"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Signup;
