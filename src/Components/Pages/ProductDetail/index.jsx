import React, { useState } from 'react';
import Images from '../../../Assets/images/js/Images';
import './detail.scss';
import DetailElements from '../../Elements/DetailElements';
import ShoppingCards from '../../Elements/ShoppingCards';

const Index = () => {
    let { chrevron_right, ShareSosial } = Images;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePage1Click = () => {
        setCurrentPage(1);
    };
    const handlePage2Click = () => {
        setCurrentPage(2);
    };
    const handlePage3Click = () => {
        setCurrentPage(3);
    };
    const handlePage4Click = () => {
        setCurrentPage(4);
    };
    const handlePage5Click = () => {
        setCurrentPage(5);
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
                        <button className={`mat-ButtonInfo ${currentPage === 1 ? 'Active' : ''}`} onClick={handlePage1Click}>
                            Benzer Mahsular
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 2 ? 'Active' : ''}`} onClick={handlePage2Click}>
                            Qem Ref
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 3 ? 'Active' : ''}`} onClick={handlePage3Click}>
                            Cross Ref
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 4 ? 'Active' : ''}`} onClick={handlePage4Click}>
                            Istifada Olunan NV-Lar
                        </button>
                        <button className={`mat-ButtonBack ${currentPage === 5 ? 'Active' : ''}`} onClick={handlePage5Click}>
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
                <div className="container-fluid  d-flex justify-content-center ">
                    <div className="myRow">
                        
                    </div>
                </div>
            )}
        </>
    );
};

export default Index;
