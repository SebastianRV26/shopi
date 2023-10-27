// import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";

const CheckoutSideMenu = () => {
  const { isCheckOutSideMenuOpen, closeCheckOutSideMenu } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isCheckOutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={() => closeCheckOutSideMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
