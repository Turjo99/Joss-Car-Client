import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-10 bg-slate-50 ">
      <h1 className="text-center my-10 py-5 font-bold text-5xl">
        Browse Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {categories.map((category) => (
          <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-5">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
              <img src={category.logo} alt="" />
            </div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {category.categoryName}
              </h3>

              <div className=" bg-gray-200 dark:bg-gray-700 text-center">
                <button className="btn btn-primary ">
                  <Link to={`cars/${category.categoryID}`}>Browse more</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
