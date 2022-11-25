import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";
const MyProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const { data: products = [] } = useQuery({
    queryKey: ["sellerProducts"],
    queryFn: () =>
      fetch(`http://localhost:5000/sellerproducts?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });
  console.log(products);

  return <div>my products</div>;
};

export default MyProducts;
