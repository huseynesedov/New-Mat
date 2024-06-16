import React, { useState } from 'react';
import './style.scss';
import Images from '../../../Assets/images/js/Images';
import BasketItems from '../../Elements/BasketItem';

const Basket = () => {
    const [open, setOpen] = useState(false);

    const handleButtonClick = () => {
        setOpen(!open);
    };
    let { Box, CarOrder, down, Liner} = Images
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
                <div className="myRow d-flex align-items-center justify-content-between">
                    <div className="myContainer position-relative rounded" style={{ padding: "0rem 0rem 0.8rem 0rem" }}>


                        <BasketItems />

                    </div>

                    <div className="myContainer2 rounded">
                        <div className="myRow2 mt-5 ">
                            <button className="drop w-100 align-items-center d-flex justify-content-between" onClick={handleButtonClick}>
                                <p className='ms-2 t-79'>
                                    Çatdırılma Növü
                                </p>
                                <img className='me-2' src={down} alt="" />
                            </button>
                            {open && (
                                <div className="dropdown mt-2">
                                    <ul>
                                        <button className='picup'>
                                            <li className='d-flex'>
                                                <img className='ms-2' src={Box} alt="" />
                                                <p className="t-79 ms-2">Pick up</p>
                                            </li>
                                        </button>
                                        <button className='picup'>
                                            <li className='d-flex'>
                                                <img className='ms-2' src={CarOrder} alt="" />
                                                <p className="t-79 ms-2">Normal</p>
                                            </li>
                                        </button>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Line */}
                        <img className='mt-4' src={Liner} alt="" />

                        {/* TextArea */}
                        <div className="row">
                            <div className="myRow3">

                                <p className="text-44 mt-3 fb-600">
                                    Sifariş Qeydi
                                </p>

                                <textarea class="OrderTextarea rounded mt-4 textarea" id="exampleFormControlTextarea1" placeholder="Sifaris Qeydi"></textarea>
                            </div>
                        </div>
                        {/* Line */}
                        <img className='mt-4' src={Liner} alt="" />

                        <div className="row">

                            <div className="myRow3">
                                <p className="text-44 mt-5 fb-600">
                                    Sifariş Xülasə
                                </p>
                                <div className="d-flex aligin-items-center mt-4 justify-content-between">

                                    <p className="text-44 fb-500">
                                        Ümumi Dəyər
                                    </p>
                                    <p className="t-8F  fb-500">
                                        129 AZN
                                    </p>
                                </div>
                                <div className="d-flex aligin-items-center mt-2 justify-content-between">

                                    <p className="text-44 fb-500">
                                        Endirim
                                    </p>
                                    <p className="t-8F fb-500">
                                        11 AZN
                                    </p>
                                </div>
                                <div className="d-flex aligin-items-center mt-4 justify-content-between">

                                    <p className="text-44 fb-600">
                                        Tam Dəyər
                                    </p>
                                    <p className="t-8F fb-500">
                                        118 AZN
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mb-5">
                            <div class="col d-flex align-items-center justify-content-center">
                                <button class="ProductEvaluate2">Təsdiqəyin və Tamamlayın</button></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Basket;


