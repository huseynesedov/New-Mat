import React, { useEffect, useState } from "react";
import "./style.css";
import images from "../../../Assets/images/js/Images";
import NewAddres from "../../Elements/ProfileElement/Address/index";
import ProdcutItem from "../../Elements/ProfileElement/ProductItem/index";
import { AdminApi } from "../../../api/admin.api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../AuthContext";

const Profile = () => {
    let { user, mail, location, tel, pen, NewAddress, Add_Bin, SearchBar } = images;
    const [ShowNewAddres, setShowNewAddres] = useState(false);
    const [isFlex, setIsFlex] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    
    const [data, setData] = useState(null); // Gələn məlumatları burada saxlayırıq
    const { logout } = useAuth(); // useAuth içindən logout funksiyasını çağırırıq
    const [decodedToken, setDecodedToken] = useState(null); // Dekod olunmuş token-i saxlayırıq
    const [idHash, setIdHash] = useState(null); // Token'den gelen id'yi saklamak için

    // Token-i decode etmək üçün funksiya
    const decodeJwt = (token) => {
        const payloadBase64 = token.split('.')[1]; // Token-in ikinci hissəsi payload hissəsidir
        const decodedPayload = atob(payloadBase64); // Base64 formatından decode edirik
        return JSON.parse(decodedPayload); // JSON formatına çeviririk
    };

    useEffect(() => {
        // localStorage-dən token almaq
        const savedToken = localStorage.getItem('token'); // 'token' açarı ilə saxlanmış olanı götür
        if (savedToken) {
            const decoded = decodeJwt(savedToken); // Token-i decode edirik
            setDecodedToken(decoded); // Dekod olunmuş məlumatı state-ə yazırıq
            setIdHash(decoded?.id); // Token'den gelen id'yi idHash olaraq belirliyoruz
            console.log('Dekod olunmuş token:', decoded); // Tokeni konsola yazdırırıq
        }
    }, []);

    const UserData = async () => {
        if (idHash) {
            try {
                const response = await AdminApi.GetOemByProductId({ id: idHash }); // idHash istifadə olunur
                console.log("API response:", response);
                setData({ ...response, idHash }); // response ilə birlikdə idHash-i də saxlayırıq
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    logout(); // 401 status kodu gəldikdə logout
                }
                console.error("Error fetching product data:", error);
            }
        }
    };

    useEffect(() => {
        if (idHash) {
            UserData(); // idHash tanımlandığında API isteğini yapıyoruz
        }
    }, [idHash]); // idHash dəyişəndə yenidən işə düşəcək

    const handleClick = () => {
        setShowNewAddres(true);
        setIsFlex(!isFlex);
    };

    const handleHideClick = () => {
        setIsFlex(!isFlex);
        setShowNewAddres(false);
    };

    const handlePage1Click = () => {
        setCurrentPage(1);
    };

    const handlePage2Click = () => {
        setCurrentPage(2);
    };

    return (
        <>
            <div className="mat-container">
                <div className="mat-row">
                    <div className="mat-row2">
                        <div className="mat-p">
                            <p className="matP">Şəxsi Məlumatlar</p>
                        </div>

                        <div className="mat-profilInformationContainer">
                            <div className="mat-ProfilContainer">
                                <div className="mat-ProfilCenter">
                                    <div className="mat-Profil">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="mat-UserInformationCenter">
                                        <div className="mat-UserName">
                                            <p className="UserName">{data?.FullName}</p>
                                        </div>
                                        <div className="mat-UserInformation d-flex">
                                            <span className="d-flex mat-UserMail">
                                                <img src={mail} alt="" />
                                                <p className="mat-UserMailText"> {data?.Email}</p> {/* Dinamik mail gösterimi */}
                                            </span>
                                            <span className="d-flex mat-UserMail ml-20">
                                                <img src={location} alt="" />
                                                <p className="mat-UserMailText"> Azerbaijan , Baku</p>
                                            </span>
                                            <span className="d-flex mat-UserMail ml-20">
                                                <img src={tel} alt="" />
                                                <p className="mat-UserMailText">{data?.PhoneNumber}</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mat-TwoPage">
                                    <button className={`mat-ButtonInfo ${currentPage === 1 ? "Active" : ""}`} onClick={handlePage1Click}>Şəxsi Məlumatlar</button>
                                    <button className={`mat-ButtonBack ${currentPage === 2 ? "Active" : ""}`} onClick={handlePage2Click}>Geri Bildirmə</button>
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
                                                    <label htmlFor="exampleInputName" className="black-4">Ad</label>
                                                    <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputName" aria-describedby="nameHelp" placeholder="Huseyn" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputSurname" className="black-4">Soyad</label>
                                                <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputSurname" aria-describedby="emailHelp" placeholder="Əsədov" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputNumber" className="black-4">Telefon</label>
                                                    <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder="+994 123456789" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputCity" className="black-4">Şəhər</label>
                                                <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Baku" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputNumber" className="black-4">Rayon</label>
                                                    <input type="text" className="form-control w-402p input-place mt-2" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder="Abşeron" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputCity" className="black-4">Küçə</label>
                                                <input type="text" className="form-control w-402p input-place mt-2 focus-ring-none" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Xirdalan şəh., Mexaniki dəstə, ..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row d-flex flex-direction-colum">
                                        <div className="col-10">
                                            <button type="button" className="addAddress mt-4" onClick={handleClick}>Yeni Ünvan əlavə et</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentPage === 2 && <ProdcutItem />}
                        </div>
                    </div>
                </div>
            </div>
            {ShowNewAddres && <NewAddres onHide={handleHideClick} />}
        </>
    );
};

export default Profile;
