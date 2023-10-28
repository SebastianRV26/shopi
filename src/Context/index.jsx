// import React from "react";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  // const [count, setCount] = useState(0);

  // Product Detail - Product to show
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu - Open/Close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);

  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count: cartProducts.length,
        productToShow,
        setProductToShow,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        cartProducts,
        setCartProducts,
        isCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node,
};
