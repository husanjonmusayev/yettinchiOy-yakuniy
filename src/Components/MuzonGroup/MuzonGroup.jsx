import { useNavigate } from "react-router-dom";
import "./muzon.css";
function MuzonGroup() {
  const navigate = useNavigate();
  return (
    <div className="muzonGroup">
      <h1>you may also like</h1>
      <div className="muzon-item-wrapper">
        <div className="muzon-item">
          <img src="/xx99II.png" alt="image" />
          <h2>XX99 MARK I</h2>
          <button
            onClick={() => {
              navigate(`/infoCard `, { state: { id: "4" } });
            }}
          >
            See Product
          </button>
        </div>
        <div className="muzon-item">
          <img src="/cardHeadphone.png" alt="image" />
          <h2>XX59</h2>
          <button
            onClick={() => {
              navigate(`/infoCard `, { state: { id: "3" } });
            }}
          >
            See Product
          </button>
        </div>
        <div className="muzon-item">
          <img src="/xx59.png" alt="image" />
          <h2>ZX9 SPEAKER</h2>
          <button
            onClick={() => {
              navigate(`/infoCard `, { state: { id: "2" } });
            }}
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default MuzonGroup;
