import  { useEffect, useState } from "react";
import Title from "../components/Title";
import { VscDiscard } from "react-icons/vsc";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
  });

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/get-user/${id}`);
      setData({
        name: response.data.data.user.name,
        email: response.data.data.user.email,
        city: response.data.data.user.city,
        country: response.data.data.user.country,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/update/${id}`,
        data
      );
      if (response.data.status == "success") {
        toast.success("User Updated Successfully!");
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
      <Title title={"Curd Operation"} desc={"Page to Update existing Data"} />
      <hr />
      <Toaster />
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 justify-center items-center tablet:w-1/2 w-[100%] m-auto"
      >
        <Link
          to={"/"}
          className="self-start flex items-center gap-2 text-blue-700"
        >
          <VscDiscard />
          Discard
        </Link>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          className="border p-2 shadow-md shadow-gray-400 w-[100%] rounded-md"
          value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-600 w-[100%] p-3 mt-2 rounded-md text-white hover:bg-blue-700 transition-all"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
