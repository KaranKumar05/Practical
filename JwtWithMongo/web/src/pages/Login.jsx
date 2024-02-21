import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  document.title = "JWT-Login";
  const navigate = useNavigate();

  const [data, setData] = useState({
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

  axios.defaults.withCredentials = true;
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login",
        data
      );
      if (response.data.Login) {
        navigate("/profile");
      } else {
        navigate("/");
      }
      setData({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <form
        className="flex flex-col gap-4 items-start px-5 py-10 border rounded-xl shadow-md w-[80%] mobile:w-96"
        onSubmit={LoginHandler}
      >
        <h1 className="underline text-3xl self-center">Login</h1>
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
          className="bg-blue-500 py-2 px-4 rounded-md text-white self-center w-[100%]"
          type="submit"
        >
          Login
        </button>
        <p className="self-center text-sm">
          Don't have an Account?
          <Link className="text-blue-700" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
