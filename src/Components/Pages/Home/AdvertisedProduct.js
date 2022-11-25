import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CarBookingModal from "../Cars/CarBookingModal";
const AdvertisedProduct = () => {
  const [carDetail, setCarDetail] = useState({});
  const { data: cars = [], refetch } = useQuery({
    queryKey: ["cars"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/advertised?isAdvertised=yes&isAvailable=yes`
      ).then((res) => res.json()),
  });
  console.log(cars);
  return (
    <div className="my-10">
      <h3 className="text-5xl font-bold text-center">Advertised Products</h3>
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
                <p className="pt-3">
                  {" "}
                  Original Price : {car.originalPrice} Lacs
                </p>
                <p className="my-3 font-semibold">
                  {" "}
                  Selling Price{" "}
                  <p className="text-3xl"> {car.sellPrice} Lacs</p>
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

                <button className="btn btn-primary ">
                  <label
                    htmlFor="car-booking-modal"
                    className="btn"
                    onClick={() => setCarDetail(car)}
                  >
                    open modal
                  </label>
                </button>
              </div>
            </div>
            <CarBookingModal carDetail={carDetail}></CarBookingModal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisedProduct;
