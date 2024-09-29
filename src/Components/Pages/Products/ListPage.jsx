import React, {useEffect, useState} from "react";
import './listStyle.scss'; // Stil dosyanızı burada dahil edin
import { Helmet } from "react-helmet";
import Images from "../../../Assets/images/js/Images";
import ShoppingCards from "../../Elements/ShoppingCards/ProductsPage";
import {CatalogApi} from "../../../api/catalog.api";
import {ProductApi} from "../../../api/product.api";
import {useAuth} from "../../../AuthContext";

function Home() {
    const { Filtr, wolswagen, BiCar, FiTag2, down, Liner, chrevron_right, Stok, AiOutlineUngroup, glass, List24 } = Images;
    const [data, setData] = useState([]);
    const [vehicleBrands, setVehicleBrands] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [storageData, setStorageData] = useState([]);
    const [productGroupData, setProductGroupData] = useState([]);
    const [productTypeData, setProductTypeData] = useState([]);
    const [productBrendData, setProductBrendData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { openNotification  , logout} = useAuth()

    const [reset, setReset] = useState(false);
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

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        setLoading(true)
        ProductApi.GetBestSeller(
            {
                page: 0,
                pageSize: 21
            }
        ).then((res) => {
            setData(shuffleArray(res.data))
        }).catch((err) => {
            if(err.response.status === 401){
                logout()
            }
            openNotification('Xəta baş verdi' , err.response.data.message,  true)
        })
            .finally(() => {
                setLoading(false)
            })
    }, [reset]);

    const getBrendData = () => {
        CatalogApi.GetManufacturerList().then((manufacturerList) => {
            setProductBrendData(manufacturerList)
        })
    }


    const getFilterData = () => {
        CatalogApi.GetOrderTypeList().then((orderTypeList) => {
            setFilterData(orderTypeList)
        })
    }

    const getStorageData = () => {
        CatalogApi.storageGetList().then((storageList) => {
            setStorageData(storageList)
        })
    }

    const getProductTypeData = () => {
        CatalogApi.GetProductTypeList().then((productTypeList) => {
            setProductTypeData(productTypeList)
        })
    }

    const getVehicleBrandData = () => {
        CatalogApi.GetVehicleBrandListAsync().then((vehicleBrands)=>{
            setVehicleBrands(vehicleBrands)
        })
    }
    const getProductGroupData = () => {
        CatalogApi.GetProductTypeList()
        CatalogApi.GetProductGroupListByProductType()
    }

    useEffect(() => {
        getBrendData()
        getFilterData()
        getStorageData()
        getProductTypeData()
        getVehicleBrandData()
        // getProductGroupData()
    }, [reset]);


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MAT Software - Filter</title>
            </Helmet>

            {/*<div className="container-fluid d-flex justify-content-center mt-5">*/}
            {/*    <div className="myRow mt-5 align-items-start flex-column">*/}
            {/*        <p className="text-44 f-14 d-flex fb-600">*/}
            {/*            Ana sayfa*/}
            {/*            <img src={chrevron_right} alt="" />*/}
            {/*            Yag*/}
            {/*            <img src={chrevron_right} alt="" />*/}
            {/*            Delphi Oil*/}
            {/*            <img src={chrevron_right} alt="" />*/}
            {/*            <span className="t-01">Shel oil 675347834</span>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="myRow flex-nowrap align-items-start mt-5 d-flex justify-content-between">
                    <div className="myContainer2 rounded">

                        <div className="col">
                            <div className="myRow4 mt-3 ">
                                <button className={`drop2 w-90 align-items-center d-flex justify-content-between ${open1 ? 'clicked' : 'down'}`} onClick={handleButtonClick1}>
                                    <div className="d-flex">
                                        <img src={Filtr} alt="" />
                                        <p className='ms-2 text-black t-79'>
                                            Filter
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt="" />
                                    </div>
                                </button>
                                {open1 && (
                                    <div className="dropdown2 mt-2 ms-3">
                                        <ul>
                                            {filterData.map((d)=> {
                                                return <button className='picup2'>
                                                    <li className='d-flex'>
                                                        <div className="checkbox2">
                                                            <input
                                                                onClick={() => {
                                                                    setReset(!reset)
                                                                }}
                                                                type="radio" name="filterData" value={d.valueHash}
                                                                id={d.valueHash}
                                                            />
                                                            <label htmlFor={d.valueHash} className="checkmark2"/>
                                                        </div>
                                                        <p className="t-79 ms-2 mb-1">{d.displayText} </p>
                                                    </li>
                                                </button>
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt=""/>

                            <div className="myRow4 mt-3 ">
                                <button
                                    className={`drop2 w-90 align-items-center d-flex justify-content-between ${open2 ? 'clicked' : 'down'}`}
                                    onClick={handleButtonClick2}>
                                    <div className="d-flex">
                                        <img src={Stok} alt=""/>
                                        <p className='ms-2 text-black t-79'>
                                            Stok
                                        </p>
                                    </div>
                                    <div className="DownImg">
                                        <img src={down} alt=""/>
                                    </div>
                                </button>
                                {open2 && (
                                    <div className="dropdown3 mt-2 ">
                                        <ul>
                                            {storageData.map((d)=> {
                                                return <button className='picup2'>
                                                    <li className='d-flex'>
                                                        <div className="checkbox2">
                                                            <input
                                                                onClick={() => {
                                                                    setReset(!reset)
                                                                }}
                                                                type="radio" name="storageData" value={d.valueHash}
                                                                id={d.valueHash}
                                                            />
                                                            <label htmlFor={d.valueHash} className="checkmark2"/>
                                                        </div>
                                                        <p className="t-79 ms-2 mb-1">{d.displayText} </p>
                                                    </li>
                                                </button>
                                            })}


                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt="" />

                            <div className="myRow4 mt-3 ">
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
                                            {productTypeData.map((d)=> {
                                                return <button className='picup2'>
                                                    <li className='d-flex'>
                                                        <div className="checkbox2">
                                                            <input
                                                                onClick={() => {
                                                                    setReset(!reset)
                                                                }}
                                                                type="radio" name="productTypeData" value={d.valueHash}
                                                                id={d.valueHash}
                                                            />
                                                            <label htmlFor={d.valueHash} className="checkmark2"/>
                                                        </div>
                                                        <p className="t-79 ms-2 mb-1">{d.displayText} </p>
                                                    </li>
                                                </button>
                                            })}

                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt="" />

                            <div className="myRow4 mt-3 ">
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
                                                <input  onClick={()=>{
                                                    setReset(!reset)
                                                }}  type="text" placeholder="Brend axdar..." />


                                            </div>
                                            {productBrendData.map((b)=> {
                                                return <button className='picup2'>
                                                    <li className='d-flex'>
                                                        <p className="t-79 ms-2 mb-1">{b.displayText}</p>
                                                    </li>
                                                </button>

                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt=""/>

                            <div className="myRow4 mt-3 ">
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
                                                <input  onClick={()=>{
                                                    setReset(!reset)
                                                }}  type="text" placeholder="Avtomobil Markasi axdar..." />

                                            </div>
                                            {vehicleBrands.map((vehicle) => {
                                                return  <button className='picup2'>
                                                    <li className='d-flex align-items-center'>
                                                        <div style={{width: "27px", height: "27px"}}>
                                                            <img className="w-100" src={vehicle.content} alt=""/>
                                                        </div>
                                                        <p className="t-79 ms-2 mt-2 mb-1">{vehicle.displayText}</p>
                                                    </li>
                                                </button>
                                            })}


                                        </ul>
                                    </div>
                                )}
                            </div>


                            {/* Line */}
                            <img className='mt-3 w-100' src={Liner} alt=""/>

                            <div className="myRow4 mt-3 mb-2">
                                <button
                                    className={`drop2 w-90 align-items-center d-flex justify-content-between ${open2 ? 'clicked' : 'down'}`}
                                    onClick={handleButtonClick6}>
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
                                                <input  onClick={()=>{
                                                    setReset(!reset)
                                                }}  type="text" placeholder="Brend axdar..." />


                                            </div>
                                            {/*<button className='picup2'>*/}
                                            {/*    <li className='d-flex'>*/}
                                            {/*        <p className="t-79 ms-2 mb-1">Brand A</p>*/}
                                            {/*    </li>*/}
                                            {/*</button>*/}

                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>


                    </div>

                    <div className="myContainer1 rounded">
                        <div className="">
                            <ShoppingCards loading={loading} data={data} reset={reset}  setReset={setReset}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
