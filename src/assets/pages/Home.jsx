import React from "react";
import "../styles/home.scss";
import Header from "../components/header/Header";
import Contactbtn from "../components/contactbtn/Contactbtn";

function Home() {
  return (
    <>
      <Header />
      <div className="mainContainer" id="mainContainer">
        <main>
          <h1>
            Design <br /> Explor
            <br />
            ration <br /> Sept
          </h1>
          <div className="header-wrap">
            <p className="brand-description">
              An attempt to get notice and also to learn about creative web
              development
            </p>
          </div>
        </main>
        <Contactbtn />
      </div>
    </>
  );
}

export default Home;
