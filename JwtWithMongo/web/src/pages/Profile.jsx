import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  document.title = "Secure-Profile";

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const authorizedUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/profile");
      setMessage(response.data.message);
    } catch (error) {
      navigate("/login");
    }
    return;
  };

  useEffect(() => {
    authorizedUser();
  }, []);

  const logoutHandler = async () => {
    try {
      let response = await axios.get("http://localhost:4000/api/v1/logout");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center underline">
          Secure Page
        </h1>
        <p className="text-center">{message}</p>
        <button
          className="bg-blue-600 text-white rounded-md py-1 px-2"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
