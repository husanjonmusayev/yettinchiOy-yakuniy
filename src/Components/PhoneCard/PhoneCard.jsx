import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Redux/shopping";
import { decrement, increment } from "../../Redux/counter";
import { CSSTransition } from "react-transition-group";
import "./phone.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function PhoneCard({
  ID,
  image,
  cardHeadertitle,
  cardHerotitle,
  description,
  Price,
}) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const cards = useSelector((state) => state.shoping.value);
  const navigate = useNavigate();

  function hendalclick() {
    const product = {
      id: ID,
      quantity: count,
      image: image,
      name: cardHerotitle,
      Price: Price,
    };
    dispatch(addItem(product));
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="Phone-card">
        <div className="img-section">
          <Link className="link" to="/">
            Go Back
          </Link>
          <img src={image} alt="hero image" />
        </div>
        <div className="tex-section">
          <p>{cardHeadertitle}</p>
          <h2>{cardHerotitle}</h2>
          <h3>{description}</h3>
          <h4>{Price}</h4>
          <div className="shooping">
            <div className="caunter">
              <span
                onClick={() => {
                  dispatch(decrement());
                }}
              >
                -
              </span>
              <span>{count}</span>
              <span
                onClick={() => {
                  dispatch(increment());
                }}
              >
                +
              </span>
            </div>
            <div>
              <button className="SeeProduct" onClick={hendalclick}>
                ADD TO CART
              </button>
              <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="modal"
                unmountOnExit
              >
                <div className="modal">
                  <div className="modal-content">
                    <div className="modai-item-wrapper">
                      <h5>Modal kontent...</h5>
                      <span className="close" onClick={closeModal}>
                        &times;
                      </span>
                    </div>

                    {cards.map((el) => {
                      return (
                        <div className="order-card">
                          <div className="card-wrapper-item">
                            <img src={el.image} alt="" />
                            <div className="order-row">
                              <h5>{el.name}</h5>
                              <h5> {el.Price}</h5>
                            </div>
                          </div>
                          <div className="order-num">
                            <h5>x {el.quantity}</h5>
                          </div>
                        </div>
                      );
                    })}
                    <button
                      className="checkout"
                      onClick={() => {
                        navigate("/shopping");
                      }}
                    >
                      checkout
                    </button>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneCard;
