import BestUser from "../../Components/BestUser/BestUser";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import HeroCard from "../../Components/HeroCard/HeroCard";
import ItemGroup from "../../Components/ItemGroup/ItemGroup";
import "./headphones.css";
import HeroRewes from "../../Components/HeroRewes/HeroRewes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function Headphones() {
  const [loader, setloader] = useState(false);
  const { pathname } = useLocation();
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/HEADPHONES")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
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
        <div className="headphones-wrapper">
          <HeaderTitle title={"HEADPHONES"} />

          {data.map((el, index) => {
            return index == 0 || index == 2 ? (
              <HeroCard
                nav={el.id}
                imagage={el.image}
                cardHerotitle={el.name}
                description={el.description}
                Button={"See Product"}
              />
            ) : (
              <HeroRewes
                nav={el.id}
                imagage={el.image}
                cardHerotitle={el.name}
                description={el.description}
                Button={"See Product"}
              />
            );
          })}

          <ItemGroup />
          <BestUser />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Headphones;
