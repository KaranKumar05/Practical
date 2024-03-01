import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Title from "../components/Title";
import { IoReturnDownBack } from "react-icons/io5";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

function Create() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/create", data);
      if (response.data.status == "success") {
        toast.success("Create Successfully!");
        setData({
          name: "",
          email: "",
          city: "",
          country: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 700);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4 tablet:p-8 flex flex-col gap-4">
      <Title title={"Curd Operation"} desc={"Page to Insert New Data"} />
      <hr />
      <div>
        <Toaster />
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 justify-center items-center tablet:w-1/2 w-[100%] m-auto"
      >
        <Link
          to={"/"}
          className="self-start flex items-center gap-2 text-blue-700"
        >
          <IoReturnDownBack />
          Back
        </Link>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <input
          type="text"
          placeholder="City"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          onChange={(e) => setData({ ...data, city: e.target.value })}
          value={data.city}
        />
        <input
          type="text"
          placeholder="Country"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          onChange={(e) => setData({ ...data, country: e.target.value })}
          value={data.country}
        />
        <button
          type="submit"
          className="bg-blue-600 w-[100%] p-3 mt-2 rounded-md text-white hover:bg-blue-700 transition-all"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Create;
