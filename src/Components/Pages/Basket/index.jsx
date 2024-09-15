import React, {useEffect, useState} from 'react';
import './style.scss';
import Images from '../../../Assets/images/js/Images';
import BasketItems from '../../Elements/BasketItem/index';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import {BasketApi} from "../../../api/basket.api";

const Basket = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [originalTotalPrice, setOriginalTotalPrice] = useState(0);
    const [basketItems, setBasketItems] = useState([]);


    useEffect(()=>{
        BasketApi.GetListByCurrent().then((items)=>{
            console.log(items)
            setBasketItems(items.basketDetailList)
        })
    }, [])


    const handleButtonClick = () => {
        setOpen(!open);
    };

    const handleUpdateTotal = (total) => {
        setTotalPrice(parseFloat(total));
    };

    const handleUpdateOriginalTotal = (originalTotal) => {
        setOriginalTotalPrice(parseFloat(originalTotal));
    };

    let { Box, CarOrder, down, Liner } = Images;

    const items = useSelector(state => state.cart.items);
    if (basketItems.length === 0) {
        return <div className="empty-basket">Səbət boşdur</div>;
    }
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="myRow mt-5">
                    <p className="text-44 f-24 fb-600">
                        Sifariş Səbəti
                    </p>
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="myRow d-flex align-items-start justify-content-between">
                    <div className="myContainer w-75 position-relative rounded" style={{ padding: "0rem 0rem 0.8rem 0rem" }}>
                        <BasketItems basketItems={basketItems} onUpdateTotal={handleUpdateTotal} onUpdateOriginalTotal={handleUpdateOriginalTotal} />
                    </div>

                    <div className="myContainer2 rounded">
                        <div className="col ">

                            <div className="row mt-5 ">
                                <div className="myRow2">
                                    <button className="drop align-items-center d-flex justify-content-between" onClick={handleButtonClick}>
                                        <p className='ms-2 fw_400 t-79'>
                                            Çatdırılma Növü
                                        </p>
                                        <img className='me-2' src={down} alt="" />
                                    </button>
                                </div>
                                {open && (
                                    <div className="myRow3">
                                        <div className="dropdown mt-2">
                                            <ul>
                                                <button className='picup'>
                                                    <li className='d-flex'>
                                                        <img className='ms-2' src={Box} alt="" />
                                                        <p className="t-79 fw_400 ms-2">Pick up</p>
                                                    </li>
                                                </button>
                                                <button className='picup'>
                                                    <li className='d-flex'>
                                                        <img className='ms-2' src={CarOrder} alt="" />
                                                        <p className="t-79 fw_400 ms-2">Normal</p>
                                                    </li>
                                                </button>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Line */}
                            <img className='mt-4 w-100' src={Liner} alt="" />

                            {/* TextArea */}
                            <div className="row">
                                <div className="myRow3">
                                    <p className="text-44 mt-3 fb-600">
                                        Sifariş Qeydi
                                    </p>
                                    <textarea className="OrderTextarea rounded mt-4 textarea" id="exampleFormControlTextarea1" placeholder="Sifaris Qeydi"></textarea>
                                </div>
                            </div>

                            {/* Line */}
                            <img className='mt-4 w-100' src={Liner} alt="" />

                            <div className="row">
                                <div className="myRow3">
                                    <p className="text-44 mt-5 fb-600">
                                        Sifariş Xülasə
                                    </p>
                                    <div className="d-flex align-items-center mt-4 justify-content-between">
                                        <p className="text-44 fb-500">
                                            Ümumi Dəyər
                                        </p>
                                        <p className="t-8F fb-500">
                                            {isNaN(originalTotalPrice) ? '0.00' : `${originalTotalPrice.toFixed(2)} AZN`}
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mt-2 justify-content-between">
                                        <p className="text-44 fb-500">
                                            Endirim
                                        </p>
                                        <p className="t-8F fb-500">
                                            {isNaN(originalTotalPrice - totalPrice) ? '0.00' : `${(originalTotalPrice - totalPrice).toFixed(2)} AZN`}
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 justify-content-between">
                                        <p className="text-44 fb-600">
                                            Tam Dəyər
                                        </p>
                                        <p className="t-8F fb-500">
                                            {isNaN(totalPrice) ? '0.00' : `${totalPrice.toFixed(2)} AZN`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5 mb-5">
                                <div onClick={()=>{
                                    navigate('/Orders')
                                }} className="col d-flex align-items-center justify-content-center">
                                    <button className="ProductEvaluate2">Təsdiqəyin və Tamamlayın</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Basket;
