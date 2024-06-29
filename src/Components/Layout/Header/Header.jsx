import { Link, useLocation } from "react-router-dom";
import Images from '../../../Assets/images/js/Images';
import './nav.scss';
import React, { useState, useEffect } from "react";
import BrandList from "../../Elements/BrandList";
import { toast } from "react-toastify";
import i18n from "../../../i18n";

const dillerTablo = [
  { name: "AZ", code: "az", flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" },
  { name: "EN", code: "en", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" },
  { name: "RU", code: "ru", flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
];

function Header() {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(dillerTablo[0]);

  const {
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
  } = Images;

  useEffect(() => {
    const savedLanguageCode = localStorage.getItem('language');
    if (savedLanguageCode) {
      const savedLanguage = dillerTablo.find(dil => dil.code === savedLanguageCode);
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
        i18n.changeLanguage(savedLanguage.code);
      }
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleLanguageDropdown = (e) => {
    e.stopPropagation();
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const dilChange = (dil, e) => {
    e.stopPropagation();
    setLanguageDropdownOpen(false);
    setCurrentLanguage(dil);
    i18n.changeLanguage(dil.code);
    toast.success(dil.name);
    localStorage.setItem('language', dil.code);
  };

  const isActive = (path) => location.pathname === path;

  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  useEffect(() => {
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + event.results[i][0].transcript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
    };
  }, [recognition]);

  const startListening = () => {
    recognition.start();
    setListening(true);
  };

  const stopListening = () => {
    recognition.stop();
    setListening(false);
  };

  const handleInputChange = (event) => {
    setTranscript(event.target.value);
  };

  return (
    <>
      <div className="Container">
        <div className="myRow border-bottom-line">
          <div className="logo_SearchBar">
            <Link to={'/'}>
              <img src={Logo} alt="" />
            </Link>
            <label htmlFor="searchBar">
              <div className="search ms-2">
                <input
                  type="text"
                  value={transcript}
                  onChange={handleInputChange}
                  className='searchTextBar'
                />
                <div className='VoiceGlas'>
                  <img
                    src={Voice}
                    onClick={listening ? stopListening : startListening}
                    alt=""
                    className='Voice'
                  />
                  <Link to="/products" className="text-decoration-none">
                    <div className="glasBar">
                      <img src={Glass} alt="" className='' />
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
                <img src={Heart} alt="" />
                <h3>Sevimlilər</h3>
              </div>
            </Link>
            <Link className={'nav-link'} to="/Basket">
              <div className="ClipBoard">
                <img src={Basket} alt="" />
                <h3>Səbət</h3>
              </div>
            </Link>
            <Link className={'nav-link'} to="/Orders">
              <div className="ClipBoard">
                <img src={Clipboard} alt="" />
                <h3>Sifarişlər</h3>
              </div>
            </Link>
            <div className={`BiChevronDown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
              <div className="imgUser">
                <img src={User} alt="" />
              </div>
              <img src={Vector} className='dropbtn' alt="" />
              {isDropdownOpen && (
                <div className="DropDown" onClick={(e) => e.stopPropagation()}>
                  <div className="dropdown-content">
                    <Link>
                      <div className='UserCart'>
                        <div className='UserImg'>
                          <img src={User} alt="" />
                        </div>
                        <div className='colum'>
                          <p className='NameSurname'>Huseyn Esedov</p>
                          <p className='mail'>asadof28@gmail.com</p>
                        </div>
                      </div>
                    </Link>
                    <Link to={'/profile'} className={`d-flex ${isActive('/profile') ? 'Blue' : ''}`}>
                      <div className={`d-flex ${isActive('/profile') ? 'Blue' : ''}`}>
                        <img src={FiUser} alt="" />
                        <p className='DownText'>Şəxsi Məlumatlar</p>
                      </div>
                    </Link>
                    <Link to={'/BusinesProfil'} className={`d-flex ${isActive('/BusinesProfil') ? 'Blue' : ''}`}>
                      <div className={`d-flex ${isActive('/BusinesProfil') ? 'Blue' : ''}`}>
                        <img src={Office} alt="" />
                        <p className='DownText'>Şirkət Məlumatları</p>
                      </div>
                    </Link>
                    <Link to={'/ChangePassword'} className={`d-flex ${isActive('/ChangePassword') ? 'Blue' : ''}`}>
                      <div className={`d-flex ${isActive('/ChangePassword') ? 'Blue' : ''}`}>
                        <img src={Key} alt="" />
                        <p className='DownText'>Şifrəni Dəyiş</p>
                      </div>
                    </Link>
                    <div onClick={toggleLanguageDropdown} className="d-flex" style={{padding:"12px 16px"}}>
                      <img src={Language} alt="" />
                      <p className="DownText">Dili Dəyişdir</p>
                      <div className='ChangeLan'>
                        <p className='LanText'>{currentLanguage.name}</p>
                        <div className="LanFlag">
                          <img className="w-100" src={currentLanguage.flag} alt="" />
                        </div>
                      </div>
                    </div>
                    {isLanguageDropdownOpen && (
                      <div className="LanguageDropdown">
                        {dillerTablo.map((dil, index) => (
                          <div key={index} className="d-flex align-items-center" onClick={(e) => dilChange(dil, e)}>
                            <p className='LanOption'>{dil.name}</p>
                            <div className="LanFlag">
                              <img className="w-100" src={dil.flag} alt="" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link>
                      <div className="upLine">
                        <p className='NameSurname up'>Çıkış</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {(location.pathname === '/' || location.pathname === '/home' || location.pathname === '/products') && <BrandList />}
    </>
  );
}

export default Header;
