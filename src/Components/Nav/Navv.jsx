// import { useState } from 'react';


import './nav.css'
import { Link } from "react-router-dom";
import Logo from '../../Assets/Logo.png'
import Voice from '../../Assets/keyboard_voice_24px.png'
import Glass from '../../Assets/magnifying-glass.png'

import Heart from '../../Assets/Heart.png'
import Basket from '../../Assets/BiBasket.png'
import Clipboard from '../../Assets/Clipboard.png'
import Vector from '../../Assets/Vector.png'

import User from '../../Assets/User.png'
import FiUser from '../../Assets/FiUser.png'
import Office from '../../Assets/OfficeBuilding.png'
import Key from '../../Assets/Key.png'
import Language from '../../Assets/Language.png'


function Navv() {

  return (
    <>
      <div className="Container">
        <div className="row">
          <div className="logo_SearchBar">
            <img src={Logo} alt="" />
            <label htmlFor="searchBar">
              <div className="search">

                {/* SearchBar */}
                <Link>
                  <input type="text" className='searchTextBar' />
                </ Link>

                <div className='VoiceGlas'>

                  {/* SearchBarda sağ tarafda yerlesen Voice icon */}
                  <Link>
                    <img src={Voice} alt="" className='Voice' />
                  </ Link>

                  {/* SearchBarda sağ tarafda yerlesen mavi button */}
                  <Link>
                    <div className="glasBar">
                      <img src={Glass} alt="" className='' />
                      Axdarış
                    </div>
                  </ Link>

                </div>

              </div>
            </label>
          </div>
          <div className="HiClipboardList">
            <Link>
              <div className="ClipBoard">
                <img src={Heart} alt="" />
                <h3>
                  Sevimlilər
                </h3>
              </div>
            </Link>
            <Link>
              <div className="ClipBoard">
                <img src={Basket} alt="" />
                <h3>
                  Səbət
                </h3>
              </div>
            </Link>
            <Link>
              <div className="ClipBoard">
                <img src={Clipboard} alt="" />
                <h3>
                  Sifarişlər
                </h3>
              </div>
            </Link>
            <div className='BiChevronDown'>


              <div className="imgUser">
                <img src={User} alt="" />
              </div>
              <img src={Vector} className='dropbtn' alt="" />

              <div class="dropdown">

                <div class="dropdown-content">

                  <Link>
                    <div className='UserCart'>
                      <div className='UserImg'>
                        <img src={User} alt="" />
                      </div>
                      <div className='colum'>
                        <p className='NameSurname'>
                          Huseyn Esedov
                        </p>
                        <p className='mail'>
                          asadof28@gmail.com
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link>
                    <img src={FiUser} alt="" />
                    <p className='DownText Blue'>
                      Şəxsi Məlumatlar
                    </p>
                  </Link>

                  <Link>
                    <img src={Office} alt="" />
                    <p className="DownText">
                      Şirkət Məlumatları
                    </p>
                  </Link>

                  <Link>
                    <img src={Key} alt="" />
                    <p className="DownText">
                      Şifrəni Dəyiş
                    </p>
                  </Link>

                  <Link>
                    <img src={Language} alt="" />
                    <p className="DownText">
                      Dili Dəyişdir
                    </p>
                    <div className='ChangeLan'>
                      <p className='LanText'>
                        AZ
                        <div className="LanFlag">

                        </div>
                      </p>
                    </div>
                  </Link>


                  <Link>
                    <div className="upLine">
                      <p className='NameSurname up'>
                        Çıkış
                      </p>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}


export default Navv;