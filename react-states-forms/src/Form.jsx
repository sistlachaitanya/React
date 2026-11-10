import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    username: "",
    fullname: "",
    password: "",
  });
  //   let [fullName, setFullName] = useState("");
  //   let [userName, setUserName] = useState("");

  let handleInputChange = (e) => {
    let feildName = e.target.name;
    let newValue = e.target.value;

    setFormData((prevData) => {
      return { ...prevData, [feildName]: newValue };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ username: "", fullname: "", password: "" });
  };

  //   let handleNameChange = (e) => setFullName(e.target.value);
  //   let handleUserName = (e) => setUserName(e.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        placeholder="enter full name"
        type="text"
        value={formData.fullname}
        onChange={handleInputChange}
        id="fullname"
        name="fullname"
      />
      <br />
      <label htmlFor="username">UserName</label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
