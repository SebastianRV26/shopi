// import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../Assets/CloseIcon";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../utils";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {
    isCheckOutSideMenuOpen,
    closeCheckOutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );

    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const orderToAdd = {
      date,
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
  };

  return (
    <aside
      className={`${
        isCheckOutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={() => closeCheckOutSideMenu()}>
          <CloseIcon />
        </button>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        {cartProducts.length > 0 && (
          <Link to="/my-orders/last">
            <button
              className="bg-black py-3 text-white w-full rounded-lg"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
