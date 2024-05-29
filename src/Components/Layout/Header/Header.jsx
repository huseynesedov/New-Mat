import { Link } from "react-router-dom";
import  Images from '../../../Assets/images/js/Images'
import './nav.css'
import React from "react";
import BrandList from "../../Elements/BrandList";
import {useLocation} from "react-router-dom";

function Header() {
  let location = useLocation()
  let {
    Basket,
    Heart,
    Logo,
    Voice,
    Glass,
    Clipboard,
    Vector,
    User,
    FiUser,
    Office,
    Key,
    Language,
  } = Images

  return (
      <>
        <div className="Container">
          <div className="myRow border-bottom-line">
            <div className="logo_SearchBar">
              <Link to={'/'}>
                <img src={Logo} alt=""/>
              </Link>
              <label htmlFor="searchBar">
                <div className="search">
                  <Link>
                    <input type="text" className='searchTextBar'/>
                  </ Link>
                  <div className='VoiceGlas'>
                    <Link>
                      <img src={Voice} alt="" className='Voice'/>
                    </ Link>
                    <Link>
                      <div className="glasBar">
                        <img src={Glass} alt="" className=''/>
                        Axtarış
                      </div>
                    </Link>
                  </div>
                </div>
              </label>
            </div>
            <div className="HiClipboardList">
              <Link className={'nav-link'}>
                <div className="ClipBoard">
                  <img src={Heart} alt=""/>
                  <h3>
                    Sevimlilər
                  </h3>
                </div>
              </Link>
              <Link className={'nav-link'}>
                <div className="ClipBoard">
                  <img src={Basket} alt=""/>
                  <h3>
                    Səbət
                  </h3>
                </div>
              </Link>
              <Link className={'nav-link'}>
                <div className="ClipBoard">
                  <img src={Clipboard} alt=""/>
                  <h3>
                    Sifarişlər
                  </h3>
                </div>
              </Link>

              <div className='BiChevronDown'>


                <div className="imgUser">
                  <img src={User} alt=""/>
                </div>
                <img src={Vector} className='dropbtn' alt=""/>

                <div class="dropdown">

                  <div class="dropdown-content">

                    <Link>
                      <div className='UserCart'>
                        <div className='UserImg'>
                          <img src={User} alt=""/>
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
                      <img src={FiUser} alt=""/>
                      <p className='DownText Blue'>
                        Şəxsi Məlumatlar
                      </p>
                    </Link>

                    <Link>
                      <img src={Office} alt=""/>
                      <p className="DownText">
                        Şirkət Məlumatları
                      </p>
                    </Link>

                    <Link>
                      <img src={Key} alt=""/>
                      <p className="DownText">
                        Şifrəni Dəyiş
                      </p>
                    </Link>

                    <Link>
                      <img src={Language} alt=""/>
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
        </div>

        {
          location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/products' ?
              <BrandList/>
              : ''
        }
      </>
  );
}


export default Header;
