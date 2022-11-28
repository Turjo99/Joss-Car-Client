import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const CarCard = ({ car, handleReport, setCarDetail, sellerEmail }) => {
  const [verified, setVerified] = useState(false);

  const [user, setUser] = useState({});
  // useEffect
  useEffect(() => {
    fetch(`https://y-xi-khaki.vercel.app/users?email=${car.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        // setVerified(data.isVerified);
        setVerified(data[0].isVerified);
      });
  }, [car.email]);
  //
  //   console.log(user);
  //   console.log(verified);
  // setSellerVerification
  return (
    <div
      key={car._id}
      className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-5"
    >
      <>
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
          <div className="">
            <img src={car.img} className="w-full z-10" alt="" />
          </div>
        </div>
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {car.carName}
          </h3>

          <div className=" bg-gray-700 text-white text-center text ">
            {verified ? (
              <>
                <span className=" flex items-center bg-slate-600 justify-center">
                  <FaCheckCircle className=" text-blue-500" />{" "}
                  <span className="ml-3">Verified Seller</span>
                </span>
              </>
            ) : (
              <>
                <p></p>
              </>
            )}

            <p className="pt-3">
              {" "}
              Original Price : {car.originalPrice}
              Lacs
            </p>
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
      </>
    </div>
  );
};

export default CarCard;
