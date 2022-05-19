import "./App.css";
// import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/md";
import React from "react";
import Cart from "./Component/Cart";
import List from "./data";

const ShoppingChart = () => {

  const totalPrice = List.reduce((total,item) => {
   return total + item.cost
  }, 0);

  console.log(totalPrice, "AYOLAH")

  return (
    <div className="p-0 p-lg-5 display">
      <div className="cart">
        <h4 className="txt-selected">Cart (2 items)</h4>
        <Cart />
      </div>
      <div className="">
        <div className="payment ms-3 ms-lg-5 mt-3 mt-lg-0 p-3">
          <h5>The total amount of</h5>
            {/* {const totalPrice = List.reduce((total,item) => ( */}
          <div className="d-flex flex-row justify-content-between">
              
                <p>Temporary amount</p>
                <p className="fw-bold">${`${totalPrice}`}</p>
                
          </div>
                 {/* ))} */}
          <div className="d-flex flex-row justify-content-between">
            <p>Shipping</p>
            <p>Gratis</p>
          </div>
          <hr />
          <div className="d-flex flex-row justify-content-between">
            <p className="fw-bold">
              The total amount of <br /> (Including VAT)
            </p>
            <p className="fw-bold">${totalPrice}</p>
          </div>
          <button className="Btn-check ms-2">GO TO CHECK OUT</button>
        </div>
        <div className="discount mt-3 pe-3">
          <p className="txt-discount p-2">Add a discount code</p>
          <BsIcons.MdKeyboardArrowDown size={35} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingChart;
