import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function Read() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/get-users");
      setUsers(response.data.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    console.log("Useeffect");
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`/delete/${id}`);
      if (response.status == 204) {
        toast.success("User Deleted Successfully!");
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 tablet:p-8 flex flex-col gap-4">
      <Title title={"Curd Operation"} desc={"Page to Read Data"} />
      <hr />
      <Toaster />
      <Link
        to={"/create"}
        className="tablet:self-start self-center text-sm font-bold bg-blue-700 text-white rounded-md py-1 px-10 tablet:py-2 tablet:px-6 tablet:text-xl"
      >
        Add
      </Link>
      <div className="flex flex-wrap gap-4 justify-center">
        {users
          ? users
              .map((user) => (
                <div
                  key={user._id}
                  className="p-4 flex flex-col gap-2 shadow-xl border min-w-80"
                >
                  <p className="text-xl">
                    <span className="font-bold">Name:</span> {user.name}
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Email:</span> {user.email}
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">City:</span> {user.city}
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Country:</span> {user.country}
                  </p>
                  <div className="flex justify-end gap-4 mt-4">
                    <Link
                      to={`/update/${user._id}`}
                      className="bg-blue-700 text-white py-1 px-4 rounded-md cursor-pointer"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteHandler(user._id);
                      }}
                      className="bg-red-600 text-white py-1 px-4 rounded-md cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
              .reverse()
          : "No Data to Show"}
      </div>
    </div>
  );
}

export default Read;
