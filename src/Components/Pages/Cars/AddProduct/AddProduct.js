import React, { useContext } from "react";
import "../AddProduct/AddProduct.css";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../../Context/UserContext";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const product = form.productName.value;
    const category = form.category.value;
    const img = form.img.value;
    const description = form.description.value;
    const used = form.used.value;
    const email = form.email.value;
    const oPrice = form.originalPrice.value;
    const sPrice = form.resellPrice.value;
    const condition = form.condition.value;
    const sellerName = form.sellerName.value;
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    console.log(currentDate);
    const productInfo = {
      carName: product,
      img: img,
      categoryID: category,
      email: email,
      originalPrice: oPrice,
      description: description,
      used: used,
      sellPrice: sPrice,
      condition: condition,
      sellerName: sellerName,
      time: currentDate,
      isAvailable: true,
    };
    console.log(productInfo);
    fetch("http://localhost:5000/allcars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product Added Successfully");
      });
    console.log(productInfo);
  };
  return (
    <section class="min-h-screen bg-cover addproductbg ">
      <div class="flex flex-col min-h-screen bg-black/60">
        <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div class="flex-1 lg:flex lg:items-center justify-center lg:-mx-6">
            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200">
                  Add Product Information
                </h1>

                <form onSubmit={handleAddProduct} class="">
                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 ">
                    <div class="flex-1">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="productName"
                        placeholder="Lancer EX"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div class="flex-1 ">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Product Image URL
                      </label>
                      <input
                        type="text"
                        name="img"
                        placeholder="Lancer EX"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="">
                      <label class="block mb-2  text-sm text-gray-600 dark:text-gray-200">
                        Product Category
                      </label>
                      <select
                        name="category"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      >
                        <option disabled selected>
                          Category
                        </option>
                        <option value={"01"}>Toyota</option>
                        <option value={"02"}>Tesla</option>
                        <option value={"03"}>BMW</option>
                      </select>
                    </div>
                    <div class="flex-1 ">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Product Descrption
                      </label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Lancer EX"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div class="flex-1 ">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Product Used (in Years)
                      </label>
                      <input
                        type="text"
                        name="used"
                        placeholder="Lancer EX"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div class="flex-1">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        disabled
                        placeholder="johndoe@example.com"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div class="flex-1">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Original Price
                      </label>
                      <input
                        name="originalPrice"
                        type="text"
                        placeholder="Enter number in lacs"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div class="flex-1">
                      <label class="block mb-2  text-sm text-gray-600 dark:text-gray-200">
                        Resell Price
                      </label>
                      <input
                        name="resellPrice"
                        type="text"
                        placeholder="Enter number in lacs"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div class="flex-1">
                      <label class="block mb-2  text-sm text-gray-600 dark:text-gray-200">
                        Condition
                      </label>
                      <input
                        name="condition"
                        type="text"
                        placeholder="ie Used.Like New"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div class="flex-1">
                      <label class="block mb-2  text-sm text-gray-600 dark:text-gray-200">
                        Seller Name
                      </label>
                      <input
                        name="sellerName"
                        type="text"
                        placeholder=""
                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>
                  <button class="w-full my-6 px-6 py-3  text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
