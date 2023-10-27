// import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { ShoppingCartContext } from "../../Context";

const Card = ({ item }) => {
  const { count, setCount, setProductToShow, openProductDetail } =
    useContext(ShoppingCartContext);

  const showProduct = () => {
    setProductToShow(item);
    openProductDetail();
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60  rounded-lg"
      onClick={showProduct}
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
        <button
          className={`absolute top-0 right-0 flex justify-center items-center 
          bg-white w-6 h-6 rounded-full m-2 p-1`}
          onClick={(e) => handleAdd(e)}
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
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
