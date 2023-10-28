// import React from "react";
import PropTypes from "prop-types";
import ArrowRight from "../../Assets/ArrowRight";

const OrdersCard = ({ date, totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{date}</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>

        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ArrowRight />
        </p>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  date: PropTypes.string,
  totalPrice: PropTypes.number,
  totalProducts: PropTypes.number,
};

export default OrdersCard;
