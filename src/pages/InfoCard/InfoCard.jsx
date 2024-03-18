import BestUser from "../../Components/BestUser/BestUser";
import Features from "../../Components/Features/Features";
import ItemGroup from "../../Components/ItemGroup/ItemGroup";
import UnwerslCard from "../../Components/UnwerslCard/UnwerslCard";
import MuzonGroup from "../../Components/MuzonGroup/MuzonGroup";
import PhoneCard from "../../Components/PhoneCard/PhoneCard.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/counter.js";

function InfoCard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = useLocation();
  const itemId = location.state?.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (pathname || id) {
      const timeout = setTimeout(scrollToTop, 100);
      return () => clearTimeout(timeout);
    }

    dispatch(increment(1));
  }, [pathname, itemId]);

  useEffect(() => {
    fetch("http://localhost:3004/ALL")
      .then((res) => res.json())
      .then((data) => {
        data = data.filter((el) => {
          return el.id == itemId;
        });
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemId]);

  useEffect(() => {
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
      {data.map((el) => {
        return (
          <PhoneCard
            ID={itemId}
            image={el.image}
            cardHeadertitle={el.new ? " NEW PRODUCT" : " "}
            cardHerotitle={el.name}
            description={el.description}
            Price={`$ ${el.price}`}
          />
        );
      })}

      <Features />
      {data.map((el) => {
        return (
          <UnwerslCard
            OneImg={el.gallery.first}
            TwoImg={el.gallery.second}
            ThreeIng={el.gallery.third}
          />
        );
      })}

      <MuzonGroup />
      <ItemGroup />
      <BestUser />
    </>
  );
}

export default InfoCard;
