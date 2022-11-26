import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import CarBookingModal from "./CarBookingModal";

const Cars = () => {
  const cars = useLoaderData();
  const [carDetail, setCarDetail] = useState({});
  console.log(cars);
  const handleReport = (id) => {
    const proceed = window.confirm("Do you want report this item");
    if (proceed) {
      fetch(`http://localhost:5000/allcars/report/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.error("Product Reported To Admin");
          }
        });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cars?.map((car) => (
        <div
          key={car._id}
          className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-5"
        >
          <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
            <img src={car.img} alt="" />
          </div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {car.carName}
            </h3>

            <div className=" bg-gray-700 text-white text-center text ">
              <p className="pt-3"> Original Price : {car.originalPrice} Lacs</p>
              <p className="my-3 font-semibold">
                {" "}
                Selling Price <p className="text-3xl"> {car.sellPrice} Lacs</p>
              </p>
              <p>Condition : {car.condition}</p>
              <p>Description : {car.description}</p>
              <p>Used : {car.used} Year(s)</p>
              <div className="">
                <p className=" text-xs my-3">
                  {" "}
                  Added By : {car?.sellerName} on {car?.time}
                </p>
              </div>

              <div className="flex justify-between p-3">
                <button className="btn btn-sm btn-primary h-full">
                  <label
                    htmlFor="car-booking-modal"
                    onClick={() => setCarDetail(car)}
                  >
                    Book Now
                  </label>
                </button>
                <button className="btn btn-sm bg-red-500 text-white h-full">
                  <label onClick={() => handleReport(car._id)}>Report</label>
                </button>
              </div>
            </div>
          </div>
          <CarBookingModal carDetail={carDetail}></CarBookingModal>
        </div>
      ))}
    </div>
  );
};

export default Cars;
