// import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { ShoppingCartContext } from "../../Context";
import CheckIcon from "../../Assets/CheckIcon";
import AddIcon from "../../Assets/AddIcon";

const ItemButton = ({ isInCart, onItemAdded }) => {
  if (isInCart) {
    return (
      <button
        className={`absolute top-0 right-0 flex justify-center items-center 
      bg-white/50 w-6 h-6 rounded-full m-2 p-1`}
        // onClick={(e) => handleAddProductsToCart(e)}
      >
        <CheckIcon />
      </button>
    );
  }

  return (
    <button
      className={`absolute top-0 right-0 flex justify-center items-center 
      bg-white w-6 h-6 rounded-full m-2 p-1`}
      onClick={onItemAdded}
    >
      <AddIcon />
    </button>
  );
};

ItemButton.propTypes = {
  isInCart: PropTypes.bool,
  onItemAdded: PropTypes.func,
};

const Card = ({ item }) => {
  const {
    // count,
    // setCount,
    setProductToShow,
    openProductDetail,
    closeProductDetail,
    cartProducts,
    setCartProducts,
    openCheckOutSideMenu,
    closeCheckOutSideMenu,
  } = useContext(ShoppingCartContext);

  const showProduct = (item) => {
    setProductToShow(item);
    closeCheckOutSideMenu();
    openProductDetail();
  };

  const handleAddProductsToCart = (e) => {
    e.stopPropagation();

    const newCart = [...cartProducts, item];
    setCartProducts(newCart);

    // setCount(count + 1);
    openCheckOutSideMenu();
    closeProductDetail();
  };

  const isInCart = !!cartProducts.find((product) => product.id === item.id);

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60  rounded-lg"
      onClick={() => showProduct(item)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span
          className={`
            absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 
            px-3 py-0.5`}
        >
          {item.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.image}
          alt={item.title}
        />
        {/* {renderIcon(item)} */}

        <ItemButton isInCart={isInCart} onItemAdded={handleAddProductsToCart} />
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">{item.category}</span>
        <span className="text-lg font-medium">${item.price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
