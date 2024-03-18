import React from "react";
import Header from "../../Components/Header";
import "./main.css";
import Footer from "../../Components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <>
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
