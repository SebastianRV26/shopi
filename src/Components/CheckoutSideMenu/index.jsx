// import React from "react";
import { useContext } from "react";
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
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );

    setCartProducts(filteredProducts);
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

      <div className="px-6 overflow-y-scroll">
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

      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light ">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
