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
      fetch(
        `https://y-xi-khaki.vercel.app/sellerproducts?email=${user?.email}`
      ).then((res) => res.json()),
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to Delete this buyer?");
    if (proceed) {
      fetch(`https://y-xi-khaki.vercel.app/allcars/delete/${id}`, {
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
    fetch(`https://y-xi-khaki.vercel.app/allcars/advertise/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product Sucessfully Advertised");
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
              <th>Avaibility</th>
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
                    className="btn btn-xs bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {product.isAdvertised == "no" &&
                    product.isAvailable == "yes" && (
                      <button
                        className="btn btn-xs btn-danger"
                        onClick={() => handleAdvertise(product._id)}
                      >
                        Advertise
                      </button>
                    )}
                </td>
                <td>
                  {product.isAvailable == "no" ? (
                    <>
                      <span className=" bg-green-700 text-white p-2">Sold</span>
                    </>
                  ) : (
                    <>
                      <span className=" bg-blue-200 text-blue-900 p-2 rounded">
                        Available
                      </span>
                    </>
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
