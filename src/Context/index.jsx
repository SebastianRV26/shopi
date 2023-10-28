// import React from "react";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  // const [count, setCount] = useState(0);

  // Product Detail - Product to show
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu - Open/Close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);

  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

  // Get products
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  const filteredItemsByCategory = (items, searchByTitle, category) => {
    return items?.filter(
      (item) =>
        ` ${item.category.toLowerCase()}`.includes(category.toLowerCase()) &&
        (item.title.toLowerCase().includes(searchByTitle.toLowerCase()) ||
          `${item.price}`.toLowerCase().includes(searchByTitle.toLowerCase()))
    );
  };

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(
      (item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase()) ||
        `${item.price}`.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (category) {
      setFilteredItems(filteredItemsByCategory(items, searchByTitle, category));
    } else if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    } else {
      setFilteredItems(items);
    }
  }, [items, searchByTitle, category]);

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
        order,
        setOrder,
        // items,
        // setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node,
};
