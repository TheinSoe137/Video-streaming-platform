import FileInput from "../components/Inputs/FileInput";
import TextInput from "../components/Inputs/TextInput";
import Button from "../components/Buttons/Button";
import { useState } from "react";
import axios from "axios";
function RegisterPage() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFile = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post("/api/v1/users/register", {

    //   });
    //   // Handle successful login
    // } catch (error) {
    //   console.error("Login error:", error);
    //   // Handle error
    // }
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* fullname, email, username, password, avatar,coverImage */}
        <TextInput
          label="fullname"
          name="fullname"
          placeholder="Enter Fullname"
          onChange={handleChange}
        />
        <TextInput
          label="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <TextInput
          label="username"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <TextInput
          label="password"
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <FileInput
          label="avatar"
          name="avatar"
          placeholder="Upload Avatar"
          onChange={handleFile}
        />
        <Button name="Register" type="submit" />
      </form>
    </div>
  );
}

export default RegisterPage;
