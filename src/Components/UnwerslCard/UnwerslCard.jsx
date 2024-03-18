import "./unwersl.css";
function UnwerslCard({ OneImg, TwoImg, ThreeIng }) {
  return (
    <div className="UnwerslCard">
      <div className="UnwerslCard-left">
        <img src={OneImg} alt="card img" />
        <img src={TwoImg} alt="card img" />
      </div>
      <div className="UnwerslCard-right">
        <img src={ThreeIng} alt="card img" />
      </div>
    </div>
  );
}

export default UnwerslCard;
