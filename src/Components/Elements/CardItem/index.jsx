import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../../Assets/images/js/Images';
import { useAuth } from "../../../AuthContext"
import {Space, Spin} from "antd";
import {BasketApi} from "../../../api/basket.api";
const CardItem = ({d, classes}) => {
    const { FiTag, Location, Down, Return, TagTwo, Vector2, Heart, Endirim } = Images;
    let [quantity , setQuantity] = useState(1)
    const [loading, setLoading] = useState(false);
    const { logout  , openNotification }= useAuth()

    const handleAddToCart = async (product) => {
        setLoading(true)
        await  BasketApi.AddToBasket( {
            productId: product.idHash,
            quantity
        }).then(() =>{
            openNotification('Əlavə edildi' , `${product.name} səbətə əlavə edildi` , false )
        }).catch((err)=>{
            openNotification('Xəta baş verdi' , err.response.data.message , true )
        }).finally(() =>{
            setLoading(false)
        })
    };

    return <div className={`d-block text-decoration-none position-relative ${classes}`}
                key={d.idHash}>
        <div className="CartCenterMain">
            {d.discount > 0 ? (
                <div className="position-absolute" style={{left: "-21px", top: "-17px"}}>
                    <img src={Endirim} alt="Discount"/>
                    <p className="text-white position-absolute discount">
                        {d.discountTitle}% endirim
                    </p>
                </div>
            ) : ''}

            <Link to={`/detail/${d.idHash}`}>
                <div className="ImgTitleMain">
                    <div className="ImgBrendingTitle">
                        <div className="ImgFocus">
                            <img style={{objectFit: "contain"}} src={`${d.defaultContent}`} alt="Product"/>
                        </div>
                        <div className="TitleCenter ms-3">
                                                <span className="Tag">
                                                    <img src={FiTag} alt="FiTag"/>
                                                    <p className="OemNo text-44">
                                                        {d.code}
                                                    </p>
                                                </span>
                            <span className="TagTwo">
                                                    <div className="ImgCenters">
                                                        <img src={`${d.manufacturerContent}`} alt="Product"/>
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
                        <img src={Location} alt="Location"/>
                        <p className="LocationName">
                            {d.storages && d.storages.length > 0 ? d.storages[0].storageCode : ' '}
                        </p>
                        <img src={Down} alt="Down"/>
                    </div>
                    <div className="Brend">
                        <img src={TagTwo} alt="TagTwo"/>
                        <p className="BrendTitle">
                            {d.manufacturerName}
                        </p>
                    </div>
                </div>
                <div className="Returun">
                    <Link className="text-decoration-none" to="/">
                        <img src={Return} alt="Return"/>
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
                    {d.discount ? (
                        <p className="DelPrice">
                            <del>
                                {(d.prices[0].value * d.discount) / 100} {d.prices[0].currencyName}
                            </del>
                        </p>
                    ) : ''}
                    <p className="Price fb-800">
                        {d.prices[0].value} {d.prices[0].currencyName}
                    </p>
                </div>

                <div className="counterCenter">
                    <button className="del" onClick={() => {
                        if (quantity > 0) {
                            setQuantity(  quantity -= 1)
                        }
                    }}>
                        -
                    </button>
                    <input
                        type="text"
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value)
                        }}
                        className="counter"
                    />
                    <button className="plus" onClick={() => {
                      setQuantity(  quantity += 1)
                    }}>
                        +
                    </button>
                </div>
            </div>

            <div className="BasketLikeCenter my-2">
                <button className="Basket" onClick={() => handleAddToCart(d)}>
                    {loading ? <Spin className="custom-spin"  size={'small'}/> : ''}
                    <img src={Vector2} alt="Add to Basket"/>
                    <p className="BasketTitle">
                        Səbətə at
                    </p>
                </button>
                <div className="Heart">
                    <img src={Heart} alt="Favorite"/>
                </div>
            </div>
        </div>
    </div>
}

export default CardItem;
