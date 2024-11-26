import { Link, useLocation } from "react-router-dom";
import Images from '../../../Assets/images/js/Images';
import './nav.scss';
import React, { useState, useEffect, useRef } from "react";
import BrandList from "../../Elements/BrandList";
import { toast } from "react-toastify";
// import i18n from "../../../i18n";
import { useAuth } from "../../../AuthContext";
import { useTranslation } from "react-i18next";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button, Dropdown } from "antd";
import { AdminApi } from "../../../api/admin.api";


const dillerTablo = [
  { name: "AZ", code: "az", flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" },
  { name: "EN", code: "en", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" },
  { name: "RU", code: "ru", flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
];

function Header() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(dillerTablo[0]);
  const dropdownRef = useRef(null);

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
    Return
  } = Images;


  useEffect(() => {
    if (searchParams.get('search')) {
      setTranscript(searchParams.get('search'))
    }
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
    setDropdownOpen(false);
    setCurrentLanguage(dil);
    i18n.changeLanguage(dil.code);
    toast.success(dil.name);
    localStorage.setItem('language', dil.code);
  };

  const isActive = (path) => location.pathname === path;


  const [data, setData] = useState([]); // Gələn məlumatları burada saxlayırıq
  const [decodedToken, setDecodedToken] = useState(null); // Dekod olunmuş token-i saxlayırıq
  const [idHash, setIdHash] = useState(null); // Token'den gelen id'yi saklamak için


  const decodeJwt = (token) => {
    try {
      const payloadBase64 = token.split(".")[1]; // Token-in ikinci hissəsi payload hissəsidir
      const decodedPayload = atob(payloadBase64); // Base64 formatından decode edirik
      return JSON.parse(decodedPayload); // JSON formatına çeviririk
    } catch (error) {
      console.error("Token decoding error:", error); // Hata varsa konsolda göstəririk
      return null;
    }
  };

  useEffect(() => {
    // localStorage-dən token almaq
    const savedToken = localStorage.getItem("token"); // 'token' açarı ilə saxlanmış olanı götür
    if (savedToken) {
      const decoded = decodeJwt(savedToken); // Token-i decode edirik
      setDecodedToken(decoded); // Dekod olunmuş məlumatı state-ə yazırıq
      setTimeout(() => {
        UserData(decoded.UserIdHash); // idH
      }, 1000)
      if (decoded) {
        setDecodedToken(decoded); // Dekod olunmuş məlumatı state-ə yazırıq
        setIdHash(decoded?.id); // Token'den gelen id'yi idHash olaraq belirliyoruz
      }
    }

  }, []);

  const UserData = async (idHash) => {
    console.log(idHash);
    if (idHash) {
      try {
        const response = await AdminApi.GetUserPersonalInformationById(idHash); // idHash kullanıyoruz
        console.log("API response:", response); // API cevabını konsola yazdırıyoruz
        setData({ ...response, idHash }); // response ile birlikte idHash'i de kaydediyoruz
      } catch (error) {
        if (error.response && error.response.data.message === 2017) {
          console.warn("Unauthorized access, logging out..."); // 401 hatasında çıkış yapılıyor
          logout();
        } else {
          console.error("Error fetching user data:", error); // Diğer hatalar
        }
      }
    }
    console.log(data)
  };




  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  useEffect(() => {
    recognition.lang = 'az';
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
    setSearchParams('search', event.target.value)
    setTranscript(event.target.value);
  };

  const { logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setLanguageDropdownOpen(false);
  }, [location]);

  const { t, i18n } = useTranslation();

  const handleSearch = () => {
    navigate(`/products?search=${transcript}`)
  };


  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleButtonClick = () => {
    setDropdownVisible(false);
  };
  const dropdownMenu = (
    <div className="d-flex flex-column basket-dropdown">
      <Link to={"/Basket"}>
        <Button onClick={handleButtonClick}>
          <span className="d-flex align-items-center">
            <img src={Basket} alt="" />
            <span className="ms-2 basket-title">{t("Nav.basket")}</span>
          </span>
        </Button>
      </Link>
      <Link to={"/Return"}>
        <Button className="mt-2" onClick={handleButtonClick}>
          <span className="d-flex align-items-center">
            <img src={Return} alt="" />
            <span className="ms-2 basket-title">{t("Nav.return")}</span>
          </span>
        </Button>
      </Link>
    </div>
  );

  return (
    <>
      <div className="Container">
        <div className="myRow border-bottom-line">
          <div className="logo_SearchBar">
            <Link to={'/'}>
              <img src={Logo} alt="" />
            </Link>
            <div className="ms-2">

              <label htmlFor="searchBar">
                <div className="search">
                  <input
                    type="text"
                    value={transcript}
                    onChange={handleInputChange}
                    className='searchTextBar'
                  />
                  <div className="VoiceGlas">
                    <img
                      src={Voice}
                      onClick={listening ? stopListening : startListening}
                      alt=""
                      className={`Voice ${listening ? "active" : ""}`}
                    />
                    <div onClick={() => handleSearch()} className="text-decoration-none">
                      <div className="glasBar">
                        <img src={Glass} alt="" />
                        {t("Nav.search")}
                      </div>
                    </div>
                  </div>

                </div>
              </label>
            </div>
          </div>
          <div className="HiClipboardList">
            {/* <Link className={'nav-link'}>
              <div className="ClipBoard">
                <img src={Heart} alt="" />
                <h3>{t("Nav.favorites")}</h3>
              </div>
            </Link> */}


            <Dropdown
              visible={dropdownVisible}
              onVisibleChange={setDropdownVisible}
              overlay={dropdownMenu}
              placement="bottom"
              arrow
              trigger={['click']}
            >
              <div>
                <div className="ClipBoard" style={{cursor:"p"}} >
                  <img src={Basket} alt="" onClick={handleToggleDropdown} />
                  <h3>{t("Nav.basket")}</h3>
                </div>
              </div>
            </Dropdown>

            <Link className={'nav-link'} to="/Orders">
              <div className="ClipBoard">
                <img src={Clipboard} alt="" />
                <h3>{t("Nav.orders")}</h3>
              </div>
            </Link>
            <div ref={dropdownRef} className={`BiChevronDown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
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
                          <p className='NameSurname'>{data.companyName}</p>
                          <p className='mail'>{data.companyEmail}</p>
                        </div>
                      </div>
                    </Link>
                    <Link to={'/profile'} className={`d-flex ${isActive('/profile') ? 'Blue' : ''}`}>
                      <div className={`d-flex ${isActive('/profile') ? 'Blue' : ''}`}>
                        <img src={FiUser} alt="" />
                        <p className='DownText'>{t("Nav.dropdown.personal")}</p>
                      </div>
                    </Link>
                    <Link to={'/BusinesProfil'} className={`d-flex ${isActive('/BusinesProfil') ? 'Blue' : ''}`}>
                      <div className={`d-flex ${isActive('/BusinesProfil') ? 'Blue' : ''}`}>
                        <img src={Office} alt="" />
                        <p className='DownText'>{t("Nav.dropdown.company")}</p>
                      </div>
                    </Link>
                    <Link to={'/ChangePassword'} className={`d-flex ${isActive('/ChangePassword') ? 'Blue' : ''}`}>
                      <div className={`d-flex ${isActive('/ChangePassword') ? 'Blue' : ''}`}>
                        <img src={Key} alt="" />
                        <p className='DownText'>{t("Nav.dropdown.password")}</p>
                      </div>
                    </Link>
                    <div onClick={toggleLanguageDropdown} className="d-flex" style={{ padding: "12px 16px" }}>
                      <img src={Language} alt="" />
                      <p className="DownText">{t("Nav.dropdown.language")}</p>
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
                    <Link onClick={logout}>
                      <div className="upLine">
                        <p className='NameSurname up'>{t("Nav.exit")}</p>
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
