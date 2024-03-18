import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const [item, setItem] = useState(data.value[0]);
  const [summ, setSumm] = useState(data.totalAmount);

  console.log(summ);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button className="SeeProduct" onClick={openModal}>
        ADD TO CART
      </button>
      <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
        <div className="modal-main">
          <div className="modal-content">
            <div className="modai-item-wrapper">
              <img src="/public/iconchek.png" alt="icon" />
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <p>You will receive an email confirmation shortly.</p>

            <div className="modal-cards-wrapper">
              {
                <>
                  <div className="order-card">
                    <div className="card-wrapper-item">
                      <img src={item.image} alt="" />
                      <div className="order-row">
                        <h5>{item.name}</h5>
                        <h5>{item.Price}</h5>
                      </div>
                    </div>
                    <div className="order-num">
                      <h5>x {item.quantity}</h5>
                    </div>
                  </div>
                  <div className="order-card-right">
                    <h5>GRAND TOTAL</h5>
                    <h4>$ {summ}</h4>
                  </div>
                </>
              }
            </div>

            <button className="checkout-modal">checkout</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Modal;
