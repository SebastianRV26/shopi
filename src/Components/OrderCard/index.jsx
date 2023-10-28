// import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../Assets/CloseIcon";

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2 w-full">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>

        <p className="text-sm font-light">{title}</p>
        {/* <p className="font-medium text-2xl">${price}</p> */}
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {handleDelete && (
          <button
            onClick={() => {
              handleDelete(id);
            }}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  handleDelete: PropTypes.func,
};

export default OrderCard;
