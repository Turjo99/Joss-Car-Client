import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Cars = () => {
  const cars = useLoaderData();
  console.log(cars);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
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

            <div className=" bg-gray-200 dark:bg-gray-700 text-center">
              <button className="btn btn-primary ">
                <Link to={`cars/`}>Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
