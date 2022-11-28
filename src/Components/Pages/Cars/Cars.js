import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import CarBookingModal from "./CarBookingModal";
import CarCard from "./CarCard";

const Cars = () => {
  const cars = useLoaderData();
  const [carDetail, setCarDetail] = useState({});
  console.log(cars);
  const handleReport = (id) => {
    const proceed = window.confirm("Do you want report this item");
    if (proceed) {
      fetch(`https://y-xi-khaki.vercel.app/allcars/report/${id}`, {
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
        <>
          {car.isAvailable === "yes" && (
            <CarCard
              car={car}
              handleReport={handleReport}
              setCarDetail={setCarDetail}
            ></CarCard>
          )}
        </>
      ))}
      <CarBookingModal carDetail={carDetail}></CarBookingModal>
    </div>
  );
};

export default Cars;
