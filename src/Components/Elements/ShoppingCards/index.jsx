import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Images from '../../../Assets/images/js/Images';
import { addToCart, incrementQuantity, decrementQuantity } from '../../../Redux/actions/index';
import {ProductApi} from "../../../api/product.api";

const ShoppingCards = () => {
    const { FiTag, Location, Down, Return, TagTwo, Vector2, Heart, Endirim } = Images;

    const [data, setData] = useState([
        {
            id: 1,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            price: "400 AZN",
            discount: true,
            discountTitle: "10",
            category: "Oil"
        },
        {
            id: 2,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            price: "590 AZN",
            discount: true,
            discountTitle: "2",
            category: "Oil"
        },
        {
            id: 3,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            price: "190 AZN",
            discount: true,
            discountTitle: "5",
            category: "Akumlyator"
        },
        {
            id: 4,
            tag_name: "671987636",
            tag_Title: "E39, E36, E35",
            location: "Baku",
            car_name: "Hundai",
            brand_name: "Shell Rotella 550041918",
            brand_title: "-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket",
            price: "10090 AZN",
            discount: false,
            discountTitle: "",
            category: "Ehtiyat Hissesi"
        }
    ]);


    useEffect(() => {
        ProductApi.GetBestSeller(
            {
                page: 0,
                pageSize: 20
            }
        ).then((res) => {
            setData(res.data)
        } )
    }, []);


    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleQuantityChange = (id, increment) => {
        if (increment) {
            dispatch(incrementQuantity(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    };

    const handleAddToCart = (product) => {
        const itemInCart = cartItems.find(item => item.id === product.id);
        if (itemInCart) {
            handleQuantityChange(product.id, true);
        } else {
            dispatch(addToCart(product));
        }
    };

    const newData = data.map(item => {
        if (item.discount && item.discountTitle) {
            const price = parseFloat(item.price);
            const discountTitle = parseFloat(item.discountTitle);
            const indirimliFiyat = price - (price * (discountTitle / 100));
            return { ...item, indirimliFiyat: indirimliFiyat.toFixed(2) };
        } else {
            return { ...item, indirimliFiyat: item.price };
        }
    });

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {newData.map(d => (
                    <div className="d-block text-decoration-none position-relative col-lg-3 col-md-6" key={d.id}>
                        <div className="CartCenterMain">
                            {d.discount && (
                                <div className="position-absolute" style={{ left: "-21px", top: "-17px" }}>
                                    <img src={Endirim} alt="Discount" />
                                    <p className="text-white position-absolute discount">
                                        {d.discountTitle}% endirim
                                    </p>
                                </div>
                            )}

                            <Link to={`/detail/${d.id}`}>
                                <div className="ImgTitleMain">
                                    <div className="ImgBrendingTitle">
                                        <div className="ImgFocus">
                                            <img src="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg" alt="Product" />
                                        </div>
                                        <div className="TitleCenter ms-3">
                                            <span className="Tag">
                                                <img src={FiTag} alt="FiTag" />
                                                <p className="OemNo text-44">
                                                    {d.tag_name}
                                                </p>
                                            </span>
                                            <span className="TagTwo">
                                                <div className="ImgCenters">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/900px-BMW.svg.png" alt="TagTwo" />
                                                </div>
                                                <p className="brendNo">
                                                    {d.tag_Title}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="OemTextCenter">
                                        <p className="Oem">
                                            OEM № :
                                            <p className="OemNo text-44">
                                                {d.tag_name}
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <div className="LocationBrendNameCenter">
                                <div className="LocationBrend">
                                    <div className="Location">
                                        <img src={Location} alt="Location" />
                                        <p className="LocationName">
                                            {d.location}
                                        </p>
                                        <img src={Down} alt="Down" />
                                    </div>
                                    <div className="Brend">
                                        <img src={TagTwo} alt="TagTwo" />
                                        <p className="BrendTitle">
                                            {d.car_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="Returun">
                                    <Link className="text-decoration-none" to="/">
                                        <img src={Return} alt="Return" />
                                        <p className="ReturunTitle">
                                            return
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <Link to={`/detail/${d.id}`} className="BrendingDetailTitle text-decoration-none">
                                <div className="BrendTitleCenter mt-2">
                                    <h3 className="BrandingName">
                                        {d.brand_name}
                                        <p className="BrandingNameTwo">
                                            {d.brand_title}
                                        </p>
                                    </h3>
                                </div>
                            </Link>

                            <div className="PriceCounter">
                                <div className="prices">
                                    {d.discount && (
                                        <p className="DelPrice">
                                            <del>
                                                {d.price}
                                            </del>
                                        </p>
                                    )}
                                    <p className="Price fb-800">
                                        {d.indirimliFiyat}
                                    </p>
                                </div>

                                <div className="counterCenter">
                                    <button className="del" onClick={() => handleQuantityChange(d.id, false)}>
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={cartItems.find(item => item.id === d.id)?.quantity || 1}
                                        readOnly
                                        className="counter"
                                    />
                                    <button className="plus" onClick={() => handleQuantityChange(d.id, true)}>
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="BasketLikeCenter my-2">
                                <button className="Basket" onClick={() => handleAddToCart(d)}>
                                    <img src={Vector2} alt="Add to Basket" />
                                    <p className="BasketTitle">
                                        Səbətə at
                                    </p>
                                </button>
                                <div className="Heart">
                                    <img src={Heart} alt="Favorite" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingCards;
