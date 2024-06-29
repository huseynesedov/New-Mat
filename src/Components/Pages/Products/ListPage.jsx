import React, { useState } from "react";
import './listStyle.scss'; // Stil dosyanızı burada dahil edin
import { Helmet } from "react-helmet";
import Images from "../../../Assets/images/js/Images";
import ShoppingCards from "../../Elements/ShoppingCards/ProductsPage";

function Home() {
    const { Filtr, wolswagen, BiCar, FiTag2, down, Liner, chrevron_right, Stok, AiOutlineUngroup, glass, List24 } = Images;

    const [open1, setOpen1] = useState(false);
    const handleButtonClick1 = () => {
        setOpen1(!open1);
    };

    const [open2, setOpen2] = useState(false);
    const handleButtonClick2 = () => {
        setOpen2(!open2);
    };

    const [open3, setOpen3] = useState(false);
    const handleButtonClick3 = () => {
        setOpen3(!open3);
    };

    const [open4, setOpen4] = useState(false);
    const handleButtonClick4 = () => {
        setOpen4(!open4);
    };

    const [open5, setOpen5] = useState(false);
    const handleButtonClick5 = () => {
        setOpen5(!open5);
    };

    const [open6, setOpen6] = useState(false);
    const handleButtonClick6 = () => {
        setOpen6(!open6);
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - Home</title>
            </Helmet>

            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="myRow mt-5 align-items-start flex-column">
                    <p className="text-44 f-14 d-flex fb-600">
                        Ana sayfa
                        <img src={chrevron_right} alt="" />
                        Yag
                        <img src={chrevron_right} alt="" />
                        Delphi Oil
                        <img src={chrevron_right} alt="" />
                        <span className="t-01">Shel oil 675347834</span>
                    </p>
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="myRow align-items-start mt-5 d-flex justify-content-between">
                    <div className="myContainer2 rounded">

                        <div className="col">
                            <div className="myRow2 mt-3 ">
                                <button className={`drop2 w-90 align-items-center d-flex justify-content-between ${open1 ? 'clicked' : 'down'}`} onClick={handleButtonClick1}>
                                    <div className="d-flex">
                                        <img src={Filtr} alt="" />
                                        <p className='ms-2 text-black t-79'>
                                            Filter 1
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt="" />
                                    </div>
                                </button>
                                {open1 && (
                                    <div className="dropdown2 mt-2 ms-3">
                                        <ul>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox1`}
                                                        />
                                                        <label htmlFor={`checkbox1`} className="checkmark2" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Aksiya 1</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox2`}
                                                        />
                                                        <label htmlFor={`checkbox2`} className="checkmark2" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Yeni Mahsul 1</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <div className="checkbox2">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox3`}
                                                        />
                                                        <label htmlFor={`checkbox3`} className="checkmark2" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Mevcuddur 1</p>
                                                </li>
                                            </button>
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt="" />

                            <div className="myRow2 mt-3 ">
                                <button className={`drop2 w-90 align-items-center d-flex justify-content-between ${open2 ? 'clicked' : 'down'}`} onClick={handleButtonClick2}>
                                    <div className="d-flex">
                                        <img src={Stok} alt="" />
                                        <p className='ms-2 text-black t-79'>
                                            Stok
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt="" />
                                    </div>
                                </button>
                                {open2 && (
                                    <div className="dropdown3 mt-2 ms-2">
                                        <ul>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2 checkbox3">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox7`}
                                                        />
                                                        <label htmlFor={`checkbox7`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Quba</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2 checkbox3">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox8`}
                                                        />
                                                        <label htmlFor={`checkbox8`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Şuşa</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <div className="checkbox2 checkbox3">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox9`}
                                                        />
                                                        <label htmlFor={`checkbox9`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Lankaran</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2 checkbox3">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox10`}
                                                        />
                                                        <label htmlFor={`checkbox10`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Mingachevir</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2 checkbox3">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox11`}
                                                        />
                                                        <label htmlFor={`checkbox11`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Göyçay</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2 checkbox3">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox12`}
                                                        />
                                                        <label htmlFor={`checkbox12`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">Şəki</p>
                                                </li>
                                            </button>

                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt="" />

                            <div className="myRow2 mt-3 ">
                                <button className={`drop2 w-90 align-items-center d-flex justify-content-between ${open3 ? 'clicked' : 'down'}`} onClick={handleButtonClick3}>
                                    <div className="d-flex">
                                        <img src={AiOutlineUngroup} alt="" />
                                        <p className='ms-2 text-black t-79'>
                                            Mehsulun Novu
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt="" />
                                    </div>
                                </button>
                                {open3 && (
                                    <div className="dropdown2 mt-2 ms-2">
                                        <ul>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2">
                                                        <input
                                                            type="radio"
                                                            name="productType"
                                                            id={`checkbox7`}
                                                        />
                                                        <label htmlFor={`checkbox7`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">
                                                        Ehtiyat hisseleri
                                                    </p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <div className="checkbox2">
                                                        <input
                                                            type="radio"
                                                            name="productType"
                                                            id={`checkbox8`}
                                                        />
                                                        <label htmlFor={`checkbox8`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">
                                                        Yag
                                                    </p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <div className="checkbox2">
                                                        <input
                                                            type="radio"
                                                            name="productType"
                                                            id={`checkbox9`}
                                                        />
                                                        <label htmlFor={`checkbox9`} className="checkmark2 checkmark3" />
                                                    </div>
                                                    <p className="t-79 ms-2 mb-1">
                                                        Akkumlyator
                                                    </p>
                                                </li>
                                            </button>
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt="" />

                            <div className="myRow2 mt-3 ">
                                <button className={`drop2 w-90 align-items-center d-flex justify-content-between ${open2 ? 'clicked' : 'down'}`} onClick={handleButtonClick4}>
                                    <div className="d-flex">
                                        <img src={FiTag2} alt="" />
                                        <p className='ms-2 text-black t-79'>
                                            Brend
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt="" />
                                    </div>
                                </button>
                                {open4 && (
                                    <div className="dropdown4 mt-2 ms-2">
                                        <ul>
                                            <div className="Searchİnput d-flex position-relative">
                                                <img src={glass} className="position-absolute pos_px" alt="" />
                                                <input type="text" placeholder="Brend axdar..." />


                                            </div>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <p className="t-79 ms-2 mb-1">Brand A</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <p className="t-79 ms-2 mb-1">Brand B</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand C</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand D</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand E</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand F</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand G</p>
                                                </li>
                                            </button>
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt="" />

                            <div className="myRow2 mt-3 ">
                                <button className={`drop2 w-90 align-items-center d-flex justify-content-between ${open2 ? 'clicked' : 'down'}`} onClick={handleButtonClick5}>
                                    <div className="d-flex">
                                        <img src={BiCar} alt="" />
                                        <p className='ms-2 text-black t-79'>
                                            Avtomobil Markasi
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt="" />
                                    </div>
                                </button>
                                {open5 && (
                                    <div className="dropdown4 mt-2 ms-2">
                                        <ul>
                                            <div className="Searchİnput d-flex position-relative">
                                                <img src={glass} className="position-absolute pos_px" alt="" />
                                                <input type="text" placeholder="Avtomobil Markasi axdar..." />

                                            </div>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <div style={{ width: "27px", height: "27px" }}>
                                                        <img className="w-100" src={wolswagen} alt="" />
                                                    </div>
                                                    <p className="t-79 ms-2 mt-2 mb-1">Brand A</p>
                                                </li>
                                            </button>


                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt="" />

                            <div className="myRow2 mt-3 mb-2">
                                <button className={`drop2 w-90 align-items-center d-flex justify-content-between ${open2 ? 'clicked' : 'down'}`} onClick={handleButtonClick6}>
                                    <div className="d-flex">
                                        <img src={List24} alt="" />
                                        <p className='ms-2 text-black t-79'>
                                            Mahsul Grup
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt="" />
                                    </div>
                                </button>
                                {open6 && (
                                    <div className="dropdown4 mt-2 ms-2">
                                        <ul>
                                            <div className="Searchİnput d-flex position-relative">
                                                <img src={glass} className="position-absolute pos_px" alt="" />
                                                <input type="text" placeholder="Brend axdar..." />


                                            </div>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <p className="t-79 ms-2 mb-1">Brand A</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex'>
                                                    <p className="t-79 ms-2 mb-1">Brand B</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand C</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand D</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand E</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand F</p>
                                                </li>
                                            </button>
                                            <button className='picup2'>
                                                <li className='d-flex align-items-center'>
                                                    <p className="t-79 ms-2 mb-1">Brand G</p>
                                                </li>
                                            </button>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>


                    </div>

                    <div className="myContainer1 rounded">
                        <div className="">
                            <ShoppingCards />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
