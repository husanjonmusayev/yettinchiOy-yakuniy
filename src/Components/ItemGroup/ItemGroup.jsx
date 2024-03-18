import "./Item.css";
import { Link } from "react-router-dom";

function ItemGroup() {
  return (
    <div className="cards-wrapper ">
      <div className="card-wrapper">
        <div className="imgs">
          <img className="absolute" src="/public/item1.png" alt="img hero" />
        </div>
        <div className="card">
          <h3>HEADPHONES</h3>
          <Link to="/headphones">
            <p>Shop </p>
            <img src="/Path.png" alt="icon" />
          </Link>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="imgs">
          <img className="absolute2" src="/public/item2.png" alt="img hero" />
        </div>
        <div className="card">
          <h3>SPEAKERS </h3>
          <Link to="/spekars">
            <p>Shop </p>
            <img src="/Path.png" alt="icon" />
          </Link>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="imgs">
          <img className="absolute3" src="/public/item3.png" alt="img hero" />
        </div>
        <div className="card">
          <h3>EARPHONES</h3>
          <Link to="/earphones">
            <p>Shop </p>
            <img src="/Path.png" alt="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemGroup;
