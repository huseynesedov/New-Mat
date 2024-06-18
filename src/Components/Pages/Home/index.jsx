import React from "react";
import ShoppingCards from "../../Elements/ShoppingCards";

import './home.css'
import { Helmet } from "react-helmet";
import images from "../../../Assets/images/js/Images";
function Home() {
  let {foodg , elba} = images
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MAT Software - Home</title>
      </Helmet>


      <div className="Container h-100">
        <div className="myRow line">

          <div className="BrendImgCenter">
            <div className="CenterImg">
              <img src={foodg} alt="" />
            </div>
            <div className="CenterImg">
              <img src={elba} alt="" />
            </div>
          </div>

          <div className="ShopingCartsCenterMain mt-5">
            <div className="ShopingTextAndIcon">
              <h2>En cox satilan brendler</h2>
            </div>

            <div className="">
              <ShoppingCards/>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
