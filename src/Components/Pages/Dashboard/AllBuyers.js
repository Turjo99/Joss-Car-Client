import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UserContext";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/allsellers?role=buyer`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to Delete this buyer?");
    if (proceed) {
      fetch(`http://localhost:5000/users/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Seller Deleted Successfully");
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
