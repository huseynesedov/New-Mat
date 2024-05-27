import { Link } from "react-router-dom";

import Tag from '../Assets/Tag.png'
import Location from '../Assets/location.svg'
import Down from '../Assets/DownSharp.svg'
import Return from '../Assets/Return.svg'
import TagTwo from '../Assets/HiTag.svg'
import Basket from '../Assets/shopping.svg'
import Heart from '../Assets/favorite.svg'

0
function Cart() {
    const todos = [
        {
            id: 1,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            del_price: "200 AZN",
            price: "190 AZN"
        },
        {
            id: 2,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            del_price: "200 AZN",
            price: "190 AZN"
        },
        {
            id: 3,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            del_price: "200 AZN",
            price: "190 AZN"
        },
        {
            id: 4,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            del_price: "200 AZN",
            price: "190 AZN"
        },
        {
            id: 5,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            del_price: "200 AZN",
            price: "190 AZN"
        }
    ];
    return (
        <>
            {todos.length > 0 ?

                todos.map((todo) => (
                    <Link to={`/Detail/${todo.id}`}>

                        <div className="CartCenterMain" key={todo.id}>

                            <div className="ImgTitleMain">
                                <div className="ImgBrendingTitle">
                                    <div className="ImgFocus">
                                        <img src="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg" alt="" />
                                    </div>
                                    <div className="TitleCenter">
                                        <span className="Tag">
                                            <img src={Tag} alt="" />
                                            <p className="OemNo">
                                                {todo.tag_name}
                                            </p>
                                        </span>
                                        <span className="TagTwo">
                                            <div className="ImgCenters">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/900px-BMW.svg.png" alt="" />
                                            </div>
                                            <p className="brendNo">
                                                {todo.tag_Title}

                                            </p>
                                        </span>
                                    </div>
                                </div>
                                <div className="OemTextCenter">
                                    <p className="Oem">
                                        OEM № :
                                        <p className="OemNo">
                                            {todo.tag_name}

                                        </p>
                                    </p>
                                </div>
                            </div>

                            <div className="LocationBrendNameCenter">

                                <div className="LocationBrend">
                                    <div className="Location">
                                        <img src={Location} alt="" />
                                        <p className="LocationName">
                                            {todo.location}

                                        </p>
                                        <img src={Down} alt="" />
                                    </div>

                                    <div className="Brend">
                                        <img src={TagTwo} alt="" />
                                        <p className="BrendTitle">
                                            {todo.car_name}

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

                                        {todo.brand_name}

                                        <p className="BrandingNameTwo">
                                            {todo.brand_title}

                                        </p>
                                    </h3>
                                </div>

                            </div>

                            <div className="PriceCounter">
                                <div className="prices">
                                    <p className="DelPrice">
                                        <del>
                                            {todo.del_price}

                                        </del>
                                    </p>
                                    <p className="Price">
                                        {todo.price}

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
                        </div>
                    </Link>
                )) : null
            }

        </>
    );
}

export default Cart;
