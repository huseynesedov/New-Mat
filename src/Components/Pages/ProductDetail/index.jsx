import React, {useEffect, useState} from 'react';
import Images from '../../../Assets/images/js/Images';
import './detail.scss';
import DetailElements from '../../Elements/DetailElements';
import ShoppingCards from '../../Elements/ShoppingCards';
import {ProductApi} from "../../../api/product.api";
import {useParams} from "react-router-dom";
import {useAuth} from "../../../AuthContext";

const Index = () => {
    let { chrevron_right, ShareSosial } = Images;
    const { id } = useParams(); // URL'den ID'yi alırıq
    let idHash = id
    const { logout} = useAuth()
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    let [loading, setLoading] = useState(true); // Default şəkil
    let [error, setError] = useState(false); // Default şəkil
    const [oemData, setOemData] = useState([]); // Ürün bilgilerini saklayacak state
    const [crossList, setCrossList] = useState([]); // Ürün bilgilerini saklayacak state
    const [vehicleList, setVehicleList] = useState([]); // Ürün bilgilerini saklayacak state
    const [selectedImage, setSelectedImage] = useState(''); // Default şəkil

    const fetchOem = async () => {
        setLoading(true)
        if (id) {
            try {
                const response = await ProductApi.GetOemByProductId({ id: idHash });
                console.log("API response: fetchOem", response);
                setOemData(response);
                setLoading(false)
                setError(false)
            } catch (error) {
                if(error.response.status === 401){
                    logout()
                }
                setError(true)
                setLoading(false)
                console.error("Error fetching product data:", error);
            }
        }
    };
    const fetchVehicleList = async () => {
        setLoading(true)
        if (id) {
            try {
                const response = await ProductApi.GetVehicleListByProductId({ id: idHash });
                console.log("API response: fetchVehicleList", response);
                setVehicleList(response);
                setLoading(false)
                setError(false)
            } catch (error) {
                if(error.response.status === 401){
                    logout()
                }
                setError(true)
                setLoading(false)
                console.error("Error fetching product data:", error);
            }
        }
    };
    const fetchCrossList = async () => {
        setLoading(true)
        if (id) {
            try {
                const response = await ProductApi.GetCrossListByProductId({ id: idHash });
                console.log("API response: fetchCrossList", response);
                setCrossList(response);
                setLoading(false)
                setError(false)
            } catch (error) {
                if(error.response.status === 401){
                    logout()
                }
                setError(true)
                setLoading(false)
                console.error("Error fetching product data:", error);
            }
        }
    };


    useEffect(() => {
        console.log("URL'den alınan idHash:", idHash);
        fetchOem();
        fetchVehicleList();
        fetchCrossList();
    }, [idHash]);




    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="myRow mt-4 align-items-start flex-column">
                    <p className="text-44 f-14 d-flex fb-600">
                        Ana sayfa
                        <img src={chrevron_right} alt="" />
                        Yag
                        <img src={chrevron_right} alt="" />
                        Delphi Oil
                        <img src={chrevron_right} alt="" />
                        <span className="t-01">Shel oil 675347834</span>
                    </p>
                    <div className="border-bottom-line mt-4" style={{ width: '100%'}}></div>
                </div>
            </div>

            <div className="container-fluid d-flex ">
                <div className="myRow mt-5 flex-column">
                    <div className="rounded-circle d-flex align-items-center justify-content-center p-48" style={{ marginRight: "90px" }}>
                        <button className="none">
                            <img src={ShareSosial} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center">
                <DetailElements />
            </div>

            <div className="container-fluid d-flex justify-content-center mt-5">
                <div className="myRow mt-3">
                    <div className="mat-TwoPage">
                        <button className={`mat-ButtonInfo ${currentPage === 1 ? 'Active' : ''}`} onClick={() => handlePageClick(1)}>
                            Benzer Mahsular
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 2 ? 'Active' : ''}`} onClick={() => handlePageClick(2)}>
                            Qem Ref
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 3 ? 'Active' : ''}`} onClick={() => handlePageClick(3)}>
                            Cross Ref
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 4 ? 'Active' : ''}`} onClick={() => handlePageClick(4)}>
                            Istifada Olunan NV-Lar
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 5 ? 'Active' : ''}`} onClick={() => handlePageClick(5)}>
                            Stok Harakatlari
                        </button>
                    </div>
                </div>
            </div>

            {currentPage === 1 && (
                <div className="container-fluid  d-flex justify-content-center ">
                    <div className="myRow">
                        <div className="ShopingCartsCenterMain">
                            <ShoppingCards />
                        </div>
                    </div>
                </div>
            )}

            {currentPage === 2 && (
                <div className="container-fluid mt-5 d-flex justify-content-center">
                    <div className="myRow">
                        <table className="table MyTable  table-bordered mt-3">
                            <tbody>
                                <tr>
                                    <th style={{ padding: "12px 27px 5px 19px" }} className='text-44' scope="col">Arac marka</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Qem NO</th>
                                </tr>
                                {oemData.map((d, i)=> {
                                  return  <tr key={i}>
                                        <td style={{padding: "12px 27px 5px 19px"}}>{d.vehicleBrandName}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.oemCode}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {currentPage === 3 && (
                <div className="container-fluid mt-5 d-flex justify-content-center">
                <div className="myRow">
                        <table className="table MyTable  table-bordered mt-3">
                            <tbody>
                                <tr>
                                    <th style={{ padding: "12px 27px 5px 19px" }} className='text-44' scope="col">Uretici adi</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }}  scope="col">Oem No</th>
                                </tr>
                                {crossList.map((d, i)=> {
                                    return  <tr key={i}>
                                        <td style={{padding: "12px 27px 5px 19px"}}>{d.manufacturerName}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.oemCode}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {currentPage === 4 && (
                  <div className="container-fluid mt-5 d-flex justify-content-center">
                    <div className="myRow">
                        <table className="table MyTable  table-bordered mt-3">
                            <tbody>
                                <tr>
                                    <th style={{ padding: "12px 27px 5px 19px" }} className='text-44' scope="col">Arac marka</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Vehicle Model</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Vehicle Type</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Year</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Engine Code</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">HP</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">KW</th>
                                </tr>

                                {vehicleList.map((d, i)=> {
                                    return <tr key={i}>
                                        <td style={{padding: "12px 27px 5px 19px"}}>{d.vehicleBrandName}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.vehicleModelName}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.type}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.date}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.engineCode}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.hp}</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>{d.kw}</td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                  </div>
            )}
            {currentPage === 5 && (
                <div className="container-fluid mt-5 d-flex justify-content-center">
                    <div className="myRow">
                        <table className="table MyTable  table-bordered mt-3">
                            <tbody>
                            <tr>
                                <th style={{padding: "12px 27px 5px 19px" }} className='text-44' scope="col">Date</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Quantlty</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">File Number</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Sales Price</th>
                                </tr>

                                {vehicleList.map((d, i)=> {
                                    return <tr key={i}>
                                        <td style={{padding: "12px 27px 5px 19px"}}>Mercedes Benz</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>@mdo</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>@mdo</td>
                                        <td style={{padding: "12px 27px 5px 19px"}} colSpan={2}>@mdo</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default Index;
