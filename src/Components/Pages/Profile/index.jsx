import "./style.css"

import user from "./assets/User.svg"
import mail from "./assets/MailOutline.svg"
import location from "./assets/Location.svg"
import tel from "./assets/Phone.svg"
const Profile = () => {
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

                                <button className="mat-ButtonInfo Active">Şəxsi Məlumatlar</button>
                                <button className="mat-ButtonBack">Geri Bildirmə</button>
                            </div>

                        </div>
                    </div>
                    <div className="mat-UserInformationContainer">
                        <div className="mat2-ProfilContainer">

                            
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </>
}

export default Profile;
