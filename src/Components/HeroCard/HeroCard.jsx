import React from "react";
import "./HeroCard.css";
import { useNavigate } from "react-router-dom";

function HeroCard({
  nav,
  imagage,
  cardHeadertitle,
  cardHerotitle,
  description,
  Button,
}) {
  const navigate = useNavigate();
  function hendalClick() {
    navigate(`/infoCard `, { state: { id: nav } });
  }

  return (
    <div className="headphones-hero">
      <div className="img-section">
        <img src={imagage} alt="hero image" />
      </div>
      <div className="tex-section">
        <p>{cardHeadertitle}</p>
        <h2>{cardHerotitle}</h2>
        <h3>{description}</h3>
        <button
          onClick={() => {
            hendalClick();
          }}
        >
          {Button}
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
