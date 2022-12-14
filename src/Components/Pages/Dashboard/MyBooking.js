import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import Loading from "../../Shared/Loading/Loading";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  // const { data: bookings = [], refetch } = useQuery({
  //   queryKey: ["bookings"],
  //   queryFn: () =>
  //     fetch(`https://y-xi-khaki.vercel.app/booking?email=${user.email}`).then((res) =>
  //       res.json()
  //     ),
  // });
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://y-xi-khaki.vercel.app/booking?email=${user.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  if (isLoading) {
    <Loading></Loading>;
  }
  console.log(bookings);
  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-10">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Price</th>

              <th>Payment</th>
              <th>Avaibility</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.product}</td>
                <td>{booking.email}</td>
                <td>{booking.price}</td>

                {booking.isAvailable == "yes" ? (
                  <>
                    <td>
                      <span className="p-3 rounded-md bg-green-600  text-white font-semibold">
                        <Link to={`payment/${booking._id}`}>Pay </Link>
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    {booking.soldTo == booking.email && (
                      <span className=" text-green-700 font-bold relative left-5 top-3">
                        Paid
                      </span>
                    )}
                    {booking.soldTo !== booking.email && <span></span>}
                  </>
                )}
                {booking.isAvailable == "yes" ? (
                  <>
                    <td>
                      <span className="p-3 rounded-md bg-blue-200  text-blue-900 font-semibold">
                        Available
                      </span>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <span className="p-3 rounded-md  bg-red-200 text-red-700">
                        Not Available
                      </span>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
