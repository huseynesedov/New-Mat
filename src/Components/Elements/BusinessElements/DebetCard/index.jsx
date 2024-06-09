import React from 'react'

import { BankCardInfos } from "./DebetInfo";

const randomClasses = [
    'gradient1',
    'gradient2',
    'gradient3'
];

function getRandomClass() {
    const randomIndex = Math.floor(Math.random() * randomClasses.length);
    return randomClasses[randomIndex];
}

const DebetExpo = () => {
    return (
        <>
            {BankCardInfos.map((Debet) => {
                const randomClass = getRandomClass();
                return (

                    // Cartlarin Random rengleri bas verir

                    <div className={`col-xl-3 col-lg-4 col-md-6 ms-4  ${randomClass}`} key={Debet.id}>
                        
                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-between mt-4 ms-2 ">
                                <p
                                    style={{ fontSize: "16px", fontWeight: "500" }}
                                    className={`s ${Debet.Color}`}
                                >
                                    {Debet.Bank_name}
                                </p>
                                <div className="d-flex" style={{ width: "24px", height: "24px" }}>
                                    <img
                                        className="w-100"
                                        style={{ marginLeft: "-12px" }}
                                        // Bank logo
                                        src={Debet.Bank_Logo_Src}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col ms-2 mt-3">
                                <p>
                                    {/* Bank Karti nomresi */}
                                    {Debet.Bank_Num}
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-between mt-4 ms-2">
                                <p
                                    style={{ fontSize: "14px", fontWeight: "500" }}
                                >
                                    {/* Bank kartindaki ad */}
                                    {Debet.Bank_User}
                                </p>
                                <div className="d-flex" style={{ width: "36px", height: "21px" }}>
                                    <img
                                        className="w-100"
                                        style={{ marginLeft: "-12px" }}
                                        // visa and master
                                        src="https://seeklogo.com/images/V/VISA-logo-F3440F512B-seeklogo.com.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default DebetExpo;
