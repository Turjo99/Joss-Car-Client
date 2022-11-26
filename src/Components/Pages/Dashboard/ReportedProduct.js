import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const ReportedProduct = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/allsellers/reportedproduct?isReported=yes`
      ).then((res) => res.json()),
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to Delete this buyer?");
    if (proceed) {
      fetch(`http://localhost:5000/report/delete/${id}`, {
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
  return (
    <div>
      <h2 className="text-3xl my-5 text">Reported Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.carName}</td>
                <td>{product.sellPrice} Lacs</td>
                <td>{product.sellerName}</td>
                <td>{product.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-xs  bg-red-600 text-white"
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

export default ReportedProduct;
