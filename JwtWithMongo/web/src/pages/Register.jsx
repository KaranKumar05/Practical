import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  document.title = "JWT-Register";

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const RegisterHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/register",
        data
      );
      setData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <form
        className="flex flex-col gap-2 items-start px-5 py-9 border rounded-xl shadow-md w-[80%] mobile:w-96"
        onSubmit={RegisterHandler}
      >
        <h1 className="underline text-3xl self-center">Register</h1>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="border p-2 rounded-md w-[100%]"
          required
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="border p-2 rounded-md w-[100%]"
          required
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="border p-2 rounded-md w-[100%]"
          required
        />
        <button
          className="bg-blue-500 py-1 px-4 rounded-md text-white w-[100%]"
          type="submit"
        >
          Register
        </button>
        <p className="self-center text-sm">
          Already have an Account?
          <Link className="text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
