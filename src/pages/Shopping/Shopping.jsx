import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./shopping.css";
import { useDispatch, useSelector } from "react-redux";
import Null from "../../Components/Null/Null";
import Modal from "../../Components/Modal/Modal";

function Shopping() {
  const dataPrice = useSelector((state) => state.shoping.totalAmount);
  const dispatch = useDispatch();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const products = data ? data.value : [];

  return (
    <div className="bacground">
      {data ? (
        <div className="shoppinng-wrapper">
          <Link to="/">Go Back</Link>
          <div className="shopping-hero">
            <div className="form-wrapper">
              <h2>CHECKOUT</h2>
              <div className="author-wrapper">
                <h3>Billing Details</h3>
                <div className="author-item-wrapper">
                  <div className="author-itm">
                    <div className="item">
                      <p>Name</p>
                      <input type="text" placeholder="Alexei Ward" />
                    </div>
                    <div className="item">
                      <p>Phone Number</p>
                      <input type="number" placeholder="+1 202-555-0136" />
                    </div>
                  </div>
                  <div className="item">
                    <p>Email Address</p>
                    <input type="email" placeholder="alexei@mail.com" />
                  </div>
                </div>
              </div>
              <div className="shopping-info">
                <h3>shipping info</h3>
                <div className="adres">
                  <p>Address</p>
                  <input type="text" placeholder="1137 Williams Avenue" />
                </div>
                <div className="info-col">
                  <div className="info-item">
                    <p>ZIP Code</p>
                    <input type="text" placeholder="10001" />
                  </div>
                  <div className="info-item">
                    <p>City</p>
                    <input type="text" placeholder="New York" />
                  </div>
                </div>
                <div className="Country">
                  <p>Country</p>
                  <input type="text" placeholder="United States" />
                </div>
              </div>
              <div className="payme-wrapper">
                <h3>payment details</h3>
                <div className="payme-detalis">
                  <div className="left-row">
                    <div className="left-row-item">
                      <p>Payment Method</p>
                    </div>
                    <div className="left-item-text">
                      <p>e-Money Number</p>
                      <input type="number" placeholder="238521993" />
                    </div>
                  </div>
                  <div className="right-row">
                    <div className="left-row-item-input">
                      <input type="number" placeholder="e-Money" />
                    </div>{" "}
                    <div className="left-row-item-input">
                      <input type="number" placeholder="Cash on Delivery" />
                    </div>{" "}
                    <div className="left-row-item-input">
                      <p>e-Money PIN</p>
                      <input type="number" placeholder="6891" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-total">
              <div className="order-title">
                <h2>summary</h2>
              </div>

              {products &&
                products.map((el) => {
                  return (
                    <div className="order-card">
                      <div className="card-wrapper-item">
                        <img src={el.image} alt="" />
                        <div className="order-row">
                          <p>{el.name}</p>
                          <p> {el.Price}</p>
                        </div>
                      </div>
                      <div className="order-num">
                        <p>x {el.quantity}</p>
                      </div>
                    </div>
                  );
                })}

              <div className="sum-wrapper">
                <div className="order-sum">
                  <h2>TOTAL</h2>
                  <h3>$ {dataPrice}</h3>
                </div>
                <div className="order-sum">
                  <h2>SHIPPING</h2>
                  <h3>$ {dataPrice / 8}</h3>
                </div>
                <div className="order-sum">
                  <h2>VAT (INCLUDED)</h2>
                  <h3>$ 1,079</h3>
                </div>
                <div className="order-sum">
                  <h2>GRAND TOTAL</h2>
                  <h3>${dataPrice + dataPrice / 10}</h3>
                </div>
              </div>
              {/* <button>CONTINUE & PAY</button> */}
              <Modal />
            </div>
          </div>
        </div>
      ) : (
        <Null />
      )}
    </div>
  );
}

export default Shopping;
