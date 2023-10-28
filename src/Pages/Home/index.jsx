// import React from "react";
import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <h2 className="font-medium text-xl text-center">Home</h2>
      <div className="grid gap-4 grid-cols-4  w-full max-w-screen-lg">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <ProductDetail />
    </div>
  );
};

export default Home;
