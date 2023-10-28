// import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowLeft from "../../Assets/ArrowLeft";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const { id } = useParams();

  const getIndex = () => {
    if (!isNaN(id)) {
      return Number(id);
    } else if (id === "last") {
      return order?.length - 1;
    }
    return 0;
  };

  const index = getIndex();

  return (
    <div>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ArrowLeft />
        </Link>
        <h1 className="font-medium text-xl">My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>

      <p className="flex justify-between items-center mb-2">
        <span className="font-light ">Total:</span>
        <span className="font-medium text-2xl">
          ${totalPrice(order?.[index]?.products)}
        </span>
      </p>
    </div>
  );
};

export default MyOrder;
