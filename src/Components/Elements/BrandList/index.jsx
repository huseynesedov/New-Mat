import Slider from "react-slick";
import React, {useState} from "react";
import images from "../../../Assets/images/js/Images";
import Agat from "../../../Assets/images/agat.png";
import Delphi from "../../../Assets/images/delphi.png";
import Holts from "../../../Assets/images/holts.png";
import Lavr from "../../../Assets/images/lavr.png";
import Gm from "../../../Assets/images/gm.png";
import EuroLub from "../../../Assets/images/EUROLUB.png";
import Lamborgini from "../../../Assets/images/lamborgini.png";
import wolswagen from "../../../Assets/images/wolswagen.png";
import nissan from "../../../Assets/images/nissan.png";
const BrandList = () => {

    let {
        Agat,
        Delphi ,
        Holts ,
        Lavr ,
        Gm ,
        EuroLub ,
        Lamborgini ,
        wolswagen ,
        nissan
    } = images

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 10,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
    };

    const [list , setList] = useState([
        {
            id:1,
            url:Agat
        },
        {
            id:2,
            url:Delphi
        },
        {
            id:2,
            url:Holts
        },
        {
            id:2,
            url:Lavr
        },
        {
            id:2,
            url:Gm
        },
        {
            id:2,
            url:EuroLub
        },
        {
            id:2,
            url:Lamborgini
        },
        {
            id:2,
            url:wolswagen
        },
        {
            id:2,
            url:nissan
        },

    ])


    return <div className="Container h-100">
        <div className="myRow h-auto line">
            <div className="text-start w-100 mt-4">
                <h3 className={'font-weight-bold'}>Ən çox axtarılan brendlər</h3>
            </div>
            <div className="BredsSlide">
                <div className="slider-container">
                    <Slider {...settings}>
                        {list.map((s,i)=>{
                            return (
                                <div key={i} className="BrandCircle">
                                    <img className="BrandImg"
                                         src={s.url}
                                         alt=""/>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
}

export default BrandList;
