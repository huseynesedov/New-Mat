import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Rating } from 'primereact/rating';

// import 'bootstrap/dist/css/bootstrap.min.css;';
import "./style.css"

import images from "../../../Assets/images/js/Images";
import NewAddres from "./addres"

const Profile = () => {
    let { user, mail, location, tel, pen, NewAddress, Add_Bin, SearchBar, FiTag,ModalClose } = images

    const [ShowNewAddres, setShowNewAddres] = useState(false);
    const [isFlex, setIsFlex] = useState(false);

    const handleClick = () => {
        setShowNewAddres(true);
        setIsFlex(!isFlex);
    };
    const handleHideClick = () => {
        setIsFlex(!isFlex);
        setShowNewAddres(false);
    };

    const [currentPage, setCurrentPage] = useState(1);

    const handlePage1Click = () => {
        setCurrentPage(1);
    };

    const handlePage2Click = () => {
        setCurrentPage(2);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [val2, setVal2] = useState(null);

    return <>
        <div className="mat-container">
            <div className="mat-row">
                <div className="mat-row2">

                    <div className="mat-p">
                        <p className="matP">
                            Şəxsi Məlumatlar
                        </p>
                    </div>

                    <div className="mat-profilInformationContainer">
                        <div className="mat-ProfilContainer">

                            <div className="mat-ProfilCenter">

                                <div className="mat-Profil">
                                    <img src={user} alt="" />
                                </div>
                                <div className="mat-UserInformationCenter">
                                    <div className="mat-UserName">
                                        <p className="UserName">
                                            Mahta Aghajani
                                        </p>
                                    </div>
                                    <div className="mat-UserInformation d-flex">
                                        <span className="d-flex mat-UserMail">
                                            <img src={mail} alt="" />
                                            <p className="mat-UserMailText"> Demo@gmail.com</p>
                                        </span>
                                        <span className="d-flex mat-UserMail ml-20">
                                            <img src={location} alt="" />
                                            <p className="mat-UserMailText"> Azerbaijan , Baku</p>
                                        </span>
                                        <span className="d-flex mat-UserMail ml-20">
                                            <img src={tel} alt="" />
                                            <p className="mat-UserMailText">+994101001010</p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mat-TwoPage">

                                <button className="mat-ButtonInfo Active" onClick={handlePage1Click}>Şəxsi Məlumatlar</button>
                                <button className="mat-ButtonBack " onClick={handlePage2Click}>Geri Bildirmə</button>
                            </div>

                        </div>
                    </div>
                    <div className="mat-UserInformationContainer w-100">
                        {currentPage === 1 && (
                            <div className="mat2-ProfilContainer">

                                <div className="row ">

                                    <div className="col d-flex flex-row-reverse">
                                        <button type="button" className="UserEditİnfo">
                                            <img src={pen} alt="" />
                                            <span>Məlumatı redaktə edin</span>
                                        </button>
                                    </div>
                                </div>


                                <div className="row ">
                                    <div className="col-5">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputName" className="black-4">Ad</label>
                                                <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputName" aria-describedby="nameHelp" placeholder="Huseyn" />

                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-5">
                                        <div className="form-group">
                                            <label for="exampleInputSurname" className="black-4">Soyad</label>
                                            <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputSurname" aria-describedby="emailHelp" placeholder="Əsədov" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-5">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputNumber" className="black-4">Telefon</label>
                                                <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder="+994 123456789" />

                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-5">
                                        <div className="form-group">
                                            <label for="exampleInputCity" className="black-4">Şəhər</label>
                                            <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Baku" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-5">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputNumber" className="black-4">Rayon</label>
                                                <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder="Abşeron" />

                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-5">
                                        <div className="form-group">
                                            <label for="exampleInputCity" className="black-4">Küçə</label>
                                            <input type="text" className="form-control w-402p input-place mt-2 focus-ring-none" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Xirdalan şəh., Mexaniki dəstə, ..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row d-flex flex-direction-colum">
                                    <div className="col-9">

                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1" className="black-4">Address</label>
                                            <textarea className="form-control mt-2 textarea" id="exampleFormControlTextarea1" placeholder="
                                        Street:  Xirdalan Seh., Mexaniki Deste, 23 Az1000, Absheron 
                                        State/province/area:    Baku 
                                        Phone number:  994 12 4480063"  >

                                            </textarea>
                                        </div>
                                        <div className="col mt-4">

                                            <div className="col d-flex flex-row-reverse ">
                                                <img src={Add_Bin} alt="" className={`${isFlex ? 'd-flex' : ''} Add_Bin`} onClick={handleHideClick} />
                                            </div>
                                            {ShowNewAddres && <NewAddres />}
                                            <button onClick={handleClick} className="AddNewAddres">
                                                <img src={NewAddress} alt="" />
                                                <span>Yeni Addres Yazın</span>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentPage === 2 && (
                            <div className="mat3-ProfilContainer">

                                <div className="row mt-5 ">
                                    <div className="col ">
                                        <button type="button" className="ProductSearch">
                                            <input type="text" className="SearchInput" placeholder="Məhsul Axdarışı" />
                                            <img src={SearchBar} alt="" className="SearchBarIcon" />
                                        </button>
                                    </div>
                                </div>



                                <div className="row d-flex  justify-content-between mt-5">
                                    <div className="col-4 border rounded" style={{ width: "366px" }}>
                                        <div className="row">
                                            <div className="col d-flex align-items-center justify-content-center">
                                                <img src="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg" className="mt-4" style={{ width: "144px", height: "136px" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="row mt-4 ">
                                            <div className="col TagNo d-flex aligin-items-center">
                                                <img src={FiTag} alt="" />
                                                <span className="black-4">56808394934</span>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <p style={{ fontSize: "15px", color: "#797979" }}>
                                                    <b className="black-4" style={{ fontSize: "16px !important" }}>Shell Rotella 550041918 </b>-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <p style={{ color: "#797979", fontSize: "12px", marginLeft: "5px" }}>
                                                    Təslim edilən tarix : 10-10-2010
                                                </p>
                                            </div>
                                        </div>       
                                        
                                        <div className="row mt-4 mb-4">
                                            <div className="col d-flex align-items-center justify-content-center">
                                                <button className="ProductEvaluate" onClick={handleShow}>
                                                    Məhsulu Dəyərləndir
                                                </button>
                                            </div>
                                        </div>


                                        <Modal
                                            show={show}
                                            onHide={handleClose}
                                            backdrop="static"
                                            keyboard={false}
                                            aria-labelledby="contained-modal-title-vcenter"

                                        >
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col mt-3">
                                                        <span style={{ fontSize: "18px", fontWeight: "500" }}>
                                                            Məhsulu Dəyərləndir
                                                        </span>
                                                    </div>
                                                    <div className="col mt-3 d-flex justify-content-end">
                                                        <div className="x" onClick={handleClose}>
                                                            <img src={ModalClose} alt="" />
                                                        </div>
                                                    </div>

                                                    <div className="row">

                                                        <div className="row d-flex flex-column" style={{ marginLeft: "3px" }}>
                                                            <div className="col d-flex mt-4 mb-3" >
                                                                <div className="col-2 " style={{ width: "94px", height: "84px" }}>
                                                                    <img src="https://seyler.ekstat.com/img/max/800/i/iOA665pDf2mr7M8P-636554123779981811.jpg" className=" w-100 h-100" alt="" />
                                                                </div>
                                                                <div className="col-7 d-flex align-items-center" style={{ marginLeft: "20px" }}>
                                                                    <p style={{ fontSize: "15px", color: "#797979" }}>
                                                                        <b className="black-4" style={{ fontSize: "16px !important" }}>Shell Rotella 550041918 </b>-2PK T6 Tam Sintetik Ağır Mühərrik Yağı 5W-40, 2,5 Qalon Sürahi, 2 paket
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <Modal.Header>
                                                        </Modal.Header>

                                                        <div className="row d-flex align-items-center mt-3">
                                                            <div className="col-5  d-flex align-items-center" style={{ marginLeft: "15px" }}>

                                                                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                                                                    Məhsulu Dəyərləndir
                                                                </p>
                                                            </div>
                                                            <div className="col-5 d-flex align-items-center mb-1" style={{ marginLeft: "-30px" }}>
                                                                <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-4" style={{ marginLeft: "3px" }}>
                                                            <div className="col">
                                                                <label htmlFor="exampleFormControlTextarea1">Şərhiniz </label>
                                                                <textarea class="form-control mt-2 ModalTextarea" id="exampleFormControlTextarea1" placeholder="Şərhiniz">

                                                                </textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Modal.Footer className="mt-4">
                                                <Button className="ModalClose" onClick={handleClose}>
                                                    Bağla
                                                </Button>
                                                <Button className="ModalSend" onClick={handleClose}>
                                                    Göndər
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>



                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>


    </>
}

export default Profile;




