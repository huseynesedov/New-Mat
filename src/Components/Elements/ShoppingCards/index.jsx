import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Images from '../../../Assets/images/js/Images';
import { addToCart, incrementQuantity, decrementQuantity } from '../../../Redux/actions/index';
import { ProductApi } from "../../../api/product.api";

const ShoppingCards = () => {
    const { FiTag, Location, Down, Return, TagTwo, Vector2, Heart, Endirim } = Images;

    const [data, setData] = useState([]);


    useEffect(() => {
        ProductApi.GetBestSeller(
            {
                page: 0,
                pageSize: 20
            }
        ).then((res) => {
            setData(res.data)
        })
    }, []);


    // const handleClick = async (idHash) => {
    //     console.log("Gönderilen idHash:", idHash); // idHash değerini kontrol edin

    //     try {
    //         const response = await ProductApi.GetProductById({ id: idHash });
    //         console.log("API Yanıtı:", response); 
    //     } catch (error) {
    //         if (error.response) {
    //             console.error("Hata Detayları:", {
    //                 status: error.response.status,
    //                 data: error.response.data,
    //                 headers: error.response.headers,
    //             });
    //         } else {
    //             console.error('API isteği sırasında bir hata oluştu:', error.message);
    //         }
    //     }
    // };
    

    const dispatch = useDispatch();

    const handleQuantityChange = (id, increment) => {
        if (increment) {
            dispatch(incrementQuantity(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    };


    const cartItems = useSelector(state => state.cart.items);

    const handleAddToCart = async (product) => {
        const itemInCart = cartItems.find(item => item.id === product.id);
   
        if (itemInCart) {
            handleQuantityChange(product.id, true);
        } else {
            try {
                // API'ye POST isteği gönder
                const response = await ProductApi.AddToBasket({
                    productId: product.id,
                    quantity: 1,
                    // Diğer gerekli ürün verilerini ekleyin
                });
   
                if (response && response.status === 200) {
                    // API isteği başarılıysa, ürünü Redux'a ekle
                    dispatch(addToCart(product));
                } else {
                    console.error('Ürün sepete eklenemedi:', response.status);
                }
            } catch (error) {
                console.error('API isteği sırasında bir hata oluştu:', error);
            }
        }
    };
   
    const newData = data.map(item => {
        if (item.prices[0].value && item.discountTitle) {
            const price = parseFloat(item.prices[0].value);
            const discountTitle = parseFloat(item.discountTitle);
            const indirimliFiyat = price - (price * (discountTitle / 100));
            return { ...item, indirimliFiyat: indirimliFiyat.toFixed(2) };
        } else {
            return { ...item, indirimliFiyat: item.prices[0].value };
        }
    });

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {newData.map(d => (
                    <div className="d-block text-decoration-none position-relative col-lg-3 col-md-6" key={d.idHash}>
                        <div className="CartCenterMain">
                            {d.discount && (
                                <div className="position-absolute" style={{ left: "-21px", top: "-17px" }}>
                                    <img src={Endirim} alt="Discount" />
                                    <p className="text-white position-absolute discount">
                                        {d.discountTitle}% endirim
                                    </p>
                                </div>
                            )}

                            <Link to={`/detail/${d.idHash}`} >
                                <div className="ImgTitleMain">
                                    <div className="ImgBrendingTitle">
                                        <div className="ImgFocus">
                                            <img src={`${d.baseUrl}${d.defaultContent}`} alt="Product" />
                                        </div>
                                        <div className="TitleCenter ms-3">
                                            <span className="Tag">
                                                <img src={FiTag} alt="FiTag" />
                                                <p className="OemNo text-44">
                                                    {d.code}
                                                </p>
                                            </span>
                                            <span className="TagTwo">
                                                <div className="ImgCenters">
                                                    <img src={`${d.baseUrl}${d.manufacturerContent}`} alt="Product" />
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
                                                {d.oemCode}
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
                                            {d.storages && d.storages.length > 0 ? d.storages[0].storageCode : ' '}
                                        </p>
                                        <img src={Down} alt="Down" />
                                    </div>
                                    <div className="Brend">
                                        <img src={TagTwo} alt="TagTwo" />
                                        <p className="BrendTitle">
                                            {d.manufacturerName}
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

                            <Link to={`/detail/${d.idHash}`} className="BrendingDetailTitle text-decoration-none">
                                <div className="BrendTitleCenter mt-2">
                                    <h3 className="BrandingName">
                                        {d.name}
                                        <p className="BrandingNameTwo">
                                            {d.description}
                                        </p>
                                    </h3>
                                </div>
                            </Link>

                            <div className="PriceCounter">
                                <div className="prices">
                                    {d.discount && (
                                        <p className="DelPrice">
                                            <del>
                                                {/* {d.prices[0].value} {d.prices[0].currencyCode} */}
                                            </del>
                                        </p>
                                    )}
                                    <p className="Price fb-800">
                                        {d.prices[0].value} {d.prices[0].currencyName}

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
