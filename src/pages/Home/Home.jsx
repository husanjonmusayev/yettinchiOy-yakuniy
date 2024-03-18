import React, { useState } from "react";
import "./home.css";
import ItemGroup from "../../Components/ItemGroup/ItemGroup";
import BestUser from "../../Components/BestUser/BestUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function Home() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setloader(true);
    }, 100);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (pathname !== "/") {
      const timeout = setTimeout(scrollToTop, 100);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);
  return (
    <>
      {loader ? (
        <div className="hero">
          <div className="bacground-wrap">
            <div className="content-wraper hero-wrapper ">
              <div className="tex">
                <h3>NEW PRODUCT</h3>
                <h2>XX99 Mark II Headphones</h2>
                <p>
                  {" "}
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <button
                  onClick={() => {
                    navigate(`/infoCard `, { state: { id: "5" } });
                  }}
                >
                  See Product
                </button>
              </div>
            </div>
          </div>
          <ItemGroup />
          <div className="thum-wrapper">
            <div className="img-wrapper">
              <img src="/public/specar.png" alt="" />
            </div>
            <div className="tex-wrapper">
              <h2>ZX9 SPEAKER</h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button
                onClick={() => {
                  navigate(`/infoCard `, { state: { id: "3" } });
                }}
              >
                See Product{" "}
              </button>
            </div>
          </div>
          <div className="speaker-wrapper">
            <div className="spaker-tex">
              <h2>ZX7 SPEAKER</h2>
              <button
                onClick={() => {
                  navigate(`/infoCard `, { state: { id: "6" } });
                }}
              >
                See Product
              </button>
            </div>
          </div>
          <div className="earphones-wrapper">
            <div className="earphones-img">
              <img src="/public/earphone.png" alt="imgs" />
            </div>
            <div className="earphones-tex">
              <h2>ZX7 SPEAKER</h2>
              <button
                onClick={() => {
                  navigate(`/infoCard `, { state: { id: "6" } });
                }}
              >
                See Product
              </button>
            </div>
          </div>
          <BestUser />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
