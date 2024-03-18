import { useNavigate } from "react-router-dom";
import "./HeroRewes.css";
function HeroRewes({ nav, imagage, cardHerotitle, description, Button }) {
  const navigate = useNavigate();
  function hendalclick(e) {
    navigate(`/infoCard `, { state: { id: nav } });
  }
  return (
    <div className="headphones-hero-item">
      <div className="tex-section">
        <h2>{cardHerotitle}</h2>
        <h3>{description}</h3>
        <button
          onClick={() => {
            hendalclick(nav);
          }}
        >
          {Button}
        </button>
      </div>
      <div className="img-section">
        <img src={imagage} alt="hero image" />
      </div>
    </div>
  );
}

export default HeroRewes;
