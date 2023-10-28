// import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>

      {order.map((product, idx) => (
        <Link key={idx} to={`/my-orders/${idx}`}>
          <OrdersCard
            date={product.date}
            totalPrice={product.totalPrice}
            totalProducts={product.totalProducts}
          />
        </Link>
      ))}
    </div>
  );
};

export default MyOrders;
