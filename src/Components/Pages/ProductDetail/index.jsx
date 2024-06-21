import React, { useState } from 'react';
import Images from '../../../Assets/images/js/Images';
import './detail.scss';
import DetailElements from '../../Elements/DetailElements';
import ShoppingCards from '../../Elements/ShoppingCards';

const Index = () => {
    let { chrevron_right, ShareSosial } = Images;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

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
                    <div className="border-bottom-line mt-4" style={{ width: '1416px', marginLeft: '-11px' }}></div>
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
                                <tr>
                                    <td style={{ padding: "12px 27px 5px 19px" }} >Otto</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "12px 27px 5px 19px" }} >Otto</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                </tr><tr>
                                    <td style={{ padding: "12px 27px 5px 19px" }} >Otto</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                </tr>
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
                                <tr>
                                    <td style={{ padding: "12px 27px 5px 19px" }} >Mercedes Benz</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} >@mdo</td>
                                </tr>

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
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">English Code</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">HP</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">KW</th>
                                </tr>
                                <tr>
                                    <td style={{ padding: "12px 27px 5px 19px" }} >Mercedes Benz</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                </tr>

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
                                    <th style={{ padding: "12px 27px 5px 19px" }} className='text-44' scope="col">Date</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Quantlty</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">File Number</th>
                                    <th style={{ padding: "12px 27px 5px 19px" }} colSpan={2} scope="col">Sales Price</th>
                                </tr>
                                <tr>
                                    <td style={{ padding: "12px 27px 5px 19px" }} >Mercedes Benz</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                    <td style={{ padding: "12px 27px 5px 19px" }} colSpan={2}>@mdo</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default Index;
