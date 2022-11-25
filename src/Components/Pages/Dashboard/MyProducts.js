import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/UserContext";
import toast from "react-hot-toast";
const MyProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["sellerProducts"],
    queryFn: () =>
      fetch(`http://localhost:5000/sellerproducts?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to Delete this buyer?");
    if (proceed) {
      fetch(`http://localhost:5000/allcars/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Product Deleted Successfully");
            refetch();
          }
        });
    }
  };
  const handleAdvertise = (id) => {
    fetch(`http://localhost:5000/allcars/advertise/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product Sucessfully Advertise");
          refetch();
        }
      });
  };
  console.log(products);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-5">My Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Enlist Date</th>

              <th>Delete</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.carName}</td>
                <td>{product.sellPrice} Lacs</td>
                <td>{product.time}</td>

                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-xs btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {product.isAdvertised == "no" && (
                    <button
                      className="btn btn-xs btn-danger"
                      onClick={() => handleAdvertise(product._id)}
                    >
                      Advertise
                    </button>
                  )}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
