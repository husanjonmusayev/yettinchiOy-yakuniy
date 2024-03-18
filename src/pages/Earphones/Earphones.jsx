import React, { useState } from "react";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import HeroCard from "../../Components/HeroCard/HeroCard";
import ItemGroup from "../../Components/ItemGroup/ItemGroup";
import BestUser from "../../Components/BestUser/BestUser";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function Earphones() {
  const [loader, setloader] = useState(false);
  const { pathname } = useLocation();
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/EARPHONES")
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
        <>
          <HeaderTitle title={"EARPHONES"} />

          {data.map((el) => {
            return (
              <HeroCard
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
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Earphones;
