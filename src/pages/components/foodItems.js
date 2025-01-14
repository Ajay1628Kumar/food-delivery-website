import React, { useState } from "react";

const FoodItem = ({ imgSrc, price, foodName, rating }) => {
  // state for quantity of food items
  let [quantity, setQuantity] = useState(0);

  // rating div
  let ratingDiv;
  // conditions for coloring the star of rating
  if (rating >= 4) {
    ratingDiv = (
      <h1>
        <i className="ri-star-s-fill text-green-600"></i> {rating}
      </h1>
    );
  } else if (rating < 4 && rating > 3) {
    ratingDiv = (
      <h1>
        <i className="ri-star-s-fill text-yellow-400"></i> {rating}
      </h1>
    );
  } else {
    ratingDiv = (
      <h1>
        <i className="ri-star-s-fill text-red-500"></i> {rating}
      </h1>
    );
  }

  //   button functionality
  function decreaseQuantity() {
    if (quantity !== 0) {
      setQuantity((quantity -= 1));
    }
  }
  function increaseQuantity() {
    if (quantity >= 5) {
      window.alert("Maximum Limit Reached");
    } else {
      setQuantity((quantity += 1));
    }
  }

  return (
    <div className="m-10 pb-2 shadow-xl text-lg rounded-2xl">
      {/* food item images */}
      <div className="rounded-2xl w-full md:w-56 h-56 overflow-hidden">
        <img
          src={imgSrc}
          className="rounded-2xl w-full md:w-56 h-56 object-cover hover:scale-110 duration-200"
          alt="foodItemImages"
        />
      </div>

      {/* food items description */}
      <div className="ml-3 mr-3 mt-2 font-[Geist]">
        <div className="flex justify-between">
          <h4>{foodName}</h4>
          <h4><i class="ri-money-rupee-circle-line"></i> {price}</h4>
        </div>

        <div className="flex justify-between items-center">
          <div
            className="flex gap-4 mt-2 bg-red-200 p-2 pt-1 pb-1
          rounded-xl"
          >
            <button
              className="border-r-2 pr-2"
              onClick={() => {
                decreaseQuantity();
              }}
            >
              -
            </button>
            <h4>{quantity}</h4>
            <button
              className="border-l-2 pl-2"
              onClick={() => {
                increaseQuantity();
              }}
            >
              +
            </button>
          </div>
          {ratingDiv}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
