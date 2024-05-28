import React from "react";
import Slider from "react-slick";
import ShoppingCards from "../../Elements/ShoppingCards";

import './home.css'
import { Helmet } from "react-helmet";

function Home() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MAT Software - Home</title>
      </Helmet>


      <div className="Container">
        <div className="myRow line">
          <div className="textCenter">
            <h2>En cox satilan brendler</h2>
          </div>
          <div className="BredsSlide">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="BrandCircle">
                  <img className="BrandImg" src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="" />
                </div>
                <div className="BrandCircle">
                  <img className="BrandImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/120px-Mercedes-Benz_Star_2022.svg.png" alt="" />
                </div>
                <div className="BrandCircle">
                  <h3>3</h3>
                </div>
                <div className="BrandCircle">
                  <h3>4</h3>
                </div>
                <div className="BrandCircle">
                  <h3>5</h3>
                </div>
                <div className="BrandCircle">
                  <h3>6</h3>
                </div>
                <div className="BrandCircle">
                  <h3>7</h3>
                </div>
                <div className="BrandCircle">
                  <h3>8d</h3>
                </div>
                <div className="BrandCircle">
                  <h3>9</h3>
                </div>
                <div className="BrandCircle">
                  <h3>10</h3>
                </div>
              </Slider>
            </div>

          </div>

          <div className="BrendImgCenter">
            <div className="CenterImg">
              <img src="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg" alt="" />
            </div>
            <div className="CenterImg">
              <img src="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg" alt="" />
            </div>
          </div>

          <div className="ShopingCartsCenterMain">
            <div className="ShopingTextAndIcon">
              <h2>En cox satilan brendler</h2>
            </div>

            <div className="ShopingCartCenter">
              {/* <div className="CartCenterMain">

                <div className="ImgTitleMain">
                  <div className="ImgBrendingTitle">
                    <div className="ImgFocus">
                      <img src="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg" alt="" />
                    </div>
                    <div className="TitleCenter">
                      <span className="Tag">
                        <img src={Tag} alt="" />
                        <p className="OemNo">
                          6584594
                        </p>
                      </span>
                      <span className="TagTwo">
                        <div className="ImgCenters">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/900px-BMW.svg.png" alt="" />
                        </div>
                        <p className="brendNo">
                          E39, E36, E46
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="OemTextCenter">
                    <p className="Oem">
                      OEM № :
                      <p className="OemNo">
                        6584594
                      </p>
                    </p>
                  </div>
                </div>

                <div className="LocationBrendNameCenter">

                  <div className="LocationBrend">
                    <div className="Location">
                      <img src={Location} alt="" />
                      <p className="LocationName">
                        Baku
                      </p>
                      <img src={Down} alt="" />
                    </div>

                    <div className="Brend">
                      <img src={TagTwo} alt="" />
                      <p className="BrendTitle">
                        Hunday accents
                      </p>
                    </div>
                  </div>

                  <div className="Returun">
                    <Link to="/">
                      <img src={Return} alt="" />
                      <p className="ReturunTitle">
                        return
                      </p>
                    </Link>

                  </div>

                </div>

                <div className="BrendingDetailTitle">
                  <div className="BrendTitleCenter">
                    <h3 className="BrandingName">

                      Shell Rotella 550041918
                      <p className="BrandingNameTwo">
                        -2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket
                      </p>
                    </h3>
                  </div>

                </div>

                <div className="PriceCounter">
                  <div className="prices">
                    <p className="DelPrice">
                      <del>
                        200
                        AZN

                      </del>
                    </p>
                    <p className="Price">
                      190 AZN
                    </p>
                  </div>

                  <div className="counterCenter">
                    <button className="del">
                      -
                    </button>
                    <input type="text" name="" id="" className="counter" />

                    <button className="plus">
                      +
                    </button>
                  </div>
                </div>

                <div className="BasketLikeCenter">
                  <button className="Basket">
                    <img src={Basket} alt="" />
                    <p className="BasketTitle">
                      Səbətə at
                    </p>
                  </button>
                  <div className="Heart">
<img src={Heart} alt="" />
                  </div>
                </div>
              </div> */}

              <ShoppingCards/>
            </div>





          </div>


        </div>
      </div>


    </>
  );
}

export default Home;
