// import React, { useState, useEffect } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Dropdown from 'react-bootstrap/Dropdown';
// import './Navbar.css';

// export default function Navbar() {
//   const { t, i18n } = useTranslation();
//   const [nav2Expanded, setNav2Expanded] = useState(false);
//   const [navCollapsed, setNavCollapsed] = useState(true);
//   const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'ar'); // قم بتحديث الحالة بناءً على اللغة الحالية

//   const handleNavLinkClick = () => {
//     setNav2Expanded(false);
//     setNavCollapsed(true);
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setSelectedLanguage(lng);
//     updateDocumentDirection(lng);
//   };

//   const updateDocumentDirection = (lng) => {
//     const direction = (lng === 'ar' || lng === 'hi') ? 'ltr' : 'rtl'; // تعديل الاتجاه بناءً على اللغة
//     document.documentElement.dir = direction;
//     document.documentElement.lang = lng;
//   };

//   useEffect(() => {
//     updateDocumentDirection(selectedLanguage);
//   }, [selectedLanguage]);

//   useEffect(() => {
//     // تحديث اتجاه المستند عند التحميل الأولي للصفحة
//     updateDocumentDirection(i18n.language);
//     setSelectedLanguage(i18n.language);
//   }, [i18n.language]);

//   const languageFlags = {
//     ar: "https://flagcdn.com/sa.svg",
//     en: "https://flagcdn.com/gb.svg",
//     zh: "https://flagcdn.com/cn.svg",
//     tr: "https://flagcdn.com/tr.svg",
//     hi: "https://flagcdn.com/in.svg"
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg nav1 d-none d-lg-flex">
//         <div className="container-fluid text-white">
//           <div className="collapse navbar-collapse" id="navbarSupportedContent1">
//             <ul className={`navbar-nav ${document.documentElement.dir === 'rtl' ? 'ms-auto' : 'me-auto'} mt-1`}>
//               <li className="nav-item ms-5">
//                 <Link className="nav-1 text-decoration-none text-white" aria-current="page" to="/">
//                   <i className="fa-solid fa-phone-volume"></i> +0125545588
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-1 text-white text-decoration-none" to="/">
//                   <i className="fa-solid ps-3 fa-envelope g-2"></i> مازيا@gmail.com
//                 </Link>
//               </li>
//             </ul>
//             <ul className="list-unstyled d-flex mt-3 me-5">
//               <li>
//                 <NavLink to="#" target="_blank" className="fa-brands p-1 fa-facebook text-decoration-none my-3 mx-1 text-white"></NavLink>
//               </li>
//               <li>
//                 <NavLink to="#" target="_blank" className="fa-brands p-1 fa-google text-decoration-none my-3 mx-1 text-white"></NavLink>
//               </li>
//               <li>
//                 <NavLink to="#" target="_blank" className="fa-brands p-1 fa-linkedin text-decoration-none my-3 mx-1 text-white"></NavLink>
//               </li>
//               <li>
//                 <NavLink to="#" target="_blank" className="fa-brands p-1 fa-whatsapp text-decoration-none my-3 mx-1 text-white"></NavLink>
//               </li>
//               <li>
//                 <NavLink to="#" target="_blank" className="fa-brands p-1 fa-x-twitter text-decoration-none my-3 mx-1 text-white"></NavLink>
//               </li>
//             </ul>
//             <Dropdown>
//               <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown-toggle">
//                 <img
//                   src={languageFlags[selectedLanguage]}
//                   alt="Selected Language"
//                   style={{ width: '20px', marginRight: '8px' }}
//                 />
//               </Dropdown.Toggle>

//               <Dropdown.Menu >
//                 <Dropdown.Item  onClick={() => changeLanguage('ar')}>
//                   <img src="https://flagcdn.com/sa.svg" alt="Arabic" style={{ width: '20px', marginRight: '8px' }} />
//                   عربي
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => changeLanguage('en')}>
//                   <img src="https://flagcdn.com/gb.svg" alt="English" style={{ width: '20px', marginRight: '8px' }} />
//                   English
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => changeLanguage('zh')}>
//                   <img src="https://flagcdn.com/cn.svg" alt="Chinese" style={{ width: '20px', marginRight: '8px' }} />
//                   中文
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => changeLanguage('tr')}>
//                   <img src="https://flagcdn.com/tr.svg" alt="Turkish" style={{ width: '20px', marginRight: '8px' }} />
//                   Türkçe
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => changeLanguage('hi')}>
//                   <img src="https://flagcdn.com/in.svg" alt="Hindi" style={{ width: '20px', marginRight: '8px' }} />
//                   हिन्दी
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//         </div>
//       </nav>

//       <nav className={`navbar navbar-expand-lg nav2 sticky-top ${nav2Expanded ? 'expanded' : ''}`}>
//         <div className="container-fluid">
//           <div className="logo">
//             <img src="https://static.vecteezy.com/system/resources/thumbnails/008/075/444/small/the-logo-of-home-housing-residents-real-estate-with-a-concept-that-presents-rural-nature-with-a-touch-of-leaves-and-sunflowers-vector.jpg" alt="Logo" />
//           </div>
//           <button
//             className="navbar-toggler mt-0 mb-0"
//             type="button"
//             aria-label="Toggle navigation"
//             onClick={() => setNavCollapsed(!navCollapsed)}
//           >
//             <i className="text-center fa-solid fa-bars"></i>
//           </button>
//           <div className={`collapse navbar-collapse ${!navCollapsed ? 'show' : ''}`} id="navbarSupportedContent2">
//             <ul className={`navbar-nav ${document.documentElement.dir === 'rtl' ? 'me-auto' : 'ms-auto'}`}>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="contact" style={{ color: '#13233C' }} onClick={handleNavLinkClick}>{t('navbar.contact_us')}</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="projectpage" style={{ color: '#13233C' }} onClick={handleNavLinkClick}>{t('navbar.company_projects')}</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="servesepage" style={{ color: '#13233C' }} onClick={handleNavLinkClick}>{t('navbar.services')}</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="gallery" style={{ color: '#13233C' }} onClick={handleNavLinkClick}>{t('navbar.gallery')}</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="about" style={{ color: '#13233C' }} onClick={handleNavLinkClick}>{t('navbar.about_us')}</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link active" aria-current="page" to="" style={{ color: '#13233C' }} onClick={handleNavLinkClick}>{t('navbar.home')}</NavLink>
//               </li>
//             </ul>
//             {/* محتويات nav1 لإظهارها على الشاشات الصغيرة والمتوسطة */}
//             <div className="navbar-text-content d-lg-none">
//               <div className="nav1-content">
//                 <div className="nav-item">
//                   <NavLink className="nav-link" aria-current="page" to="">
//                     <i className="fa-solid fa-phone-volume text-dark"> +0125545588 </i>
//                   </NavLink>
//                 </div>
//                 <div className="nav-item">
//                   <NavLink className="nav-link" to="">
//                     <i className="fa-solid fa-envelope text-dark g-2"></i> مازيا@gmail.com
//                   </NavLink>
//                 </div>
//               </div>
//               <ul className="list-unstyled d-flex flex-column align-items-start ">
//                 <li>
//                   <NavLink to="#" target="_blank" className="fa-brands p-1 fa-facebook text-decoration-none my-3 text-dark"></NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="#" target="_blank" className="fa-brands p-1 fa-google text-decoration-none my-3 text-dark"></NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="#" target="_blank" className="fa-brands p-1 fa-linkedin text-decoration-none my-3 text-dark"></NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="#" target="_blank" className="fa-brands p-1 fa-whatsapp text-decoration-none my-3 text-dark"></NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="#" target="_blank" className="fa-brands p-1 fa-x-twitter text-decoration-none my-3 text-dark"></NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// --------------------------------------------

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

// import { GrClose } from "react-icons/gr";

import images from "../../images";
import "./Navbar.scss";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
// ,"مشاريع الشركة"الرئيسية", "تواصل معنا","معرض الأعمال" "الخدمات", "من نحن"
const Navbar = (props) => {
  // فكرة الناف بار الجديد : هنشوف ال URL فوق بيأشر لفين ومنها نغير اللون المحدد
  const location = useLocation();
  const { pathname } = location;
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "ar"
  ); // قم بتحديث الحالة بناءً على اللغة الحالية
  const [activePage, setActivePage] = useState(pathname);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [settings, setSettings] = useState([]);
  const [errorLang, setErrorLang] = useState(true);

  const getSettings = async () => {
    try {
      let result = await axios.get("https://gayekapp.com/mzaya/api/settings");
      setSettings(result.data);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  useEffect(() => {
    // runs on location, i.e. route, change
    // console.log("handle route change here", pathname);
    setActivePage(pathname);
  }, [pathname]);

  // const handleClick = (index) => {
  //   setActivePage(index);
  // };

  const languageFlags = {
    ar: "https://flagcdn.com/sa.svg",
    en: "https://flagcdn.com/gb.svg",
    zh: "https://flagcdn.com/cn.svg",
    tr: "https://flagcdn.com/tr.svg",
    hi: "https://flagcdn.com/in.svg",
  };

  const changeLanguage = (lng) => {
    if (lng === "hi") {
      i18n.changeLanguage(lng);
      setSelectedLanguage(lng);
      updateDocumentDirection(lng);
    } else {
      i18n.changeLanguage(lng);
      setSelectedLanguage(lng);
      updateDocumentDirection(lng);
    }
  };

  // if (localStorage.getItem('i18nextLng')) {
  //   useEffect(() => {
  //     if (localStorage.getItem('i18nextLng') === "hi") {
  //     } else {
  //       document.body.setAttribute(
  //         "style",
  //         `direction: ${i18n.dir()} !important`
  //       );
  //     }
  //   }, [localStorage.getItem('i18nextLng')]);
  // }
  useEffect(() => {
    if (errorLang) {
      if (
        localStorage.getItem("i18nextLng") !== "en" ||
        localStorage.getItem("i18nextLng") !== "hi" ||
        localStorage.getItem("i18nextLng") !== "zh" ||
        localStorage.getItem("i18nextLng") !== "tr"
      ) {
        localStorage.setItem("i18nextLng", "ar");
        i18n.changeLanguage("ar");
        changeLanguage("ar");
      }
      setErrorLang(false);
    }

    if (selectedLanguage === "hi") {
    } else {
      document.body.setAttribute(
        "style",
        `direction: ${i18n.dir()} !important`
      );
    }
  }, [i18n, i18n.language]);

  const updateDocumentDirection = (lng) => {
    // الدنيا مضروبة هنا جامد شغل استسهال
    // مفيش اتقان في الشغل كروت واجري
    // const direction = lng === "ar" || lng === "hi" ? "ltr" : "rtl"; // تعديل الاتجاه بناءً على اللغة
    // document.documentElement.dir = direction;
    // document.documentElement.lang = lng;
    if (lng === "hi") {
      document.body.setAttribute("style", `direction: rtl !important`);
    }
  };

  const menu = [
    {
      name: `${t("navbar.home")}`,
      link: "/",
    },
    {
      name: `${t("navbar.about_us")}`,
      link: "/about",
    },
    {
      name: `${t("navbar.gallery")}`,
      link: "/gallery",
    },
    {
      name: `${t("navbar.services")}`,
      link: "/services",
    },
    {
      name: `${t("navbar.company_projects")}`,
      link: "/projects",
    },
    {
      name: `${t("navbar.contact_us")}`,
      link: "/contact",
    },
  ];

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg nav1 d-none d-lg-flex">
        <div className="container-fluid text-white">
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <ul
              className={`navbar-nav ${
                document.documentElement.dir === "ltr" ? "ms-auto" : "me-auto"
              } mt-1`}
            >
              <li className="nav-item ms-5">
                <Link
                  className="nav-1 text-decoration-none text-white"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-phone-volume"></i>{" "}
                  {settings?.setting?.phone1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-1 text-white text-decoration-none" to="/">
                  <i className="fa-solid ps-3 fa-envelope g-2"></i>{" "}
                  {settings?.setting?.email}
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled d-flex mt-3 me-5">
              <li>
                <NavLink
                  to="#"
                  target="_blank"
                  className="fa-brands p-1 fa-facebook text-decoration-none my-3 mx-1 text-white"
                ></NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  target="_blank"
                  className="fa-brands p-1 fa-google text-decoration-none my-3 mx-1 text-white"
                ></NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  target="_blank"
                  className="fa-brands p-1 fa-linkedin text-decoration-none my-3 mx-1 text-white"
                ></NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  target="_blank"
                  className="fa-brands p-1 fa-whatsapp text-decoration-none my-3 mx-1 text-white"
                ></NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  target="_blank"
                  className="fa-brands p-1 fa-x-twitter text-decoration-none my-3 mx-1 text-white"
                ></NavLink>
              </li>
            </ul>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="dropdown-toggle"
              >
                <img
                  src={languageFlags[selectedLanguage]}
                  alt="Selected Language"
                  style={{
                    width: "20px",
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("ar")}>
                  <img
                    src="https://flagcdn.com/sa.svg"
                    alt="Arabic"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  عربي
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  <img
                    src="https://flagcdn.com/gb.svg"
                    alt="English"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("zh")}>
                  <img
                    src="https://flagcdn.com/cn.svg"
                    alt="Chinese"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  中文
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("tr")}>
                  <img
                    src="https://flagcdn.com/tr.svg"
                    alt="Turkish"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  Türkçe
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("hi")}>
                  <img
                    src="https://flagcdn.com/in.svg"
                    alt="Hindi"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  हिन्दी
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav> */}

      <div className="app__topnavbar">
        <ul className="app__topnavbaremail">
          <li className="nav-item">
            <a
              className="nav-1 text-decoration-none text-white"
              aria-current="page"
              href={`tel:${settings?.setting?.phone1}`}
            >
              <BsFillTelephoneFill /> {settings?.setting?.phone1}
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`mailto:${settings?.setting?.email}`}
              className="nav-1 text-white text-decoration-none"
              to="/"
            >
              <BsEnvelopeFill /> {settings?.setting?.email}
            </a>
          </li>
        </ul>
        <div className="app__topnavbar-translate">
          <ul className="list-unstyled d-flex mt-3 me-5">
            <li>
              <NavLink
                to={settings?.setting?.facebook}
                target="_blank"
                className="p-1 text-decoration-none my-3 mx-1 text-white"
              >
                <BsFacebook />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={settings?.setting?.instgram}
                target="_blank"
                className="p-1 text-decoration-none my-3 mx-1 text-white"
              >
                <BsInstagram />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={settings?.setting?.youtube}
                target="_blank"
                className="p-1 text-decoration-none my-3 mx-1 text-white"
              >
                <BsYoutube />
              </NavLink>
            </li>
          </ul>
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="dropdown-toggle"
            >
              <img
                src={languageFlags[selectedLanguage]}
                alt="Selected Language"
                style={{
                  width: "20px",
                  marginRight: "8px",
                  marginLeft: "8px",
                }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("ar")}>
                <img
                  src="https://flagcdn.com/sa.svg"
                  alt="Arabic"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                عربي
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="English"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("zh")}>
                <img
                  src="https://flagcdn.com/cn.svg"
                  alt="Chinese"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                中文
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("tr")}>
                <img
                  src="https://flagcdn.com/tr.svg"
                  alt="Turkish"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                Türkçe
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("hi")}>
                <img
                  src="https://flagcdn.com/in.svg"
                  alt="Hindi"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                हिन्दी
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="app__navbar">
        <Link to="/" className="app__navbar-logo">
          <img src={settings?.configurations?.logo} alt="logo" />
        </Link>
        <div className="app__navbar-list">
          {menu.map((item, index) => (
            <div key={index} className="app__navbar-item">
              <Link
                className={activePage === item.link ? "active" : ""}
                // className={urlCheck === item.link ? "active" : ""}
                // onClick={() => handleClick(index)}
                to={item.link}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        {/* Menu for Navigation Bar */}
        <div className="app__navbar-menu">
          {toggleMenu ? (
            ""
          ) : (
            <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div
              className={`${
                i18n.dir() === "rtl"
                  ? "app__navbar-menu-container"
                  : "app__navbar-menu-container-right"
              }`}
            >
              <div className="app__navbar-menu-btn">
                <HiX onClick={() => setToggleMenu(false)} />
              </div>
              {console.log(i18n.dir())}
              {console.log(i18n.dir())}
              {console.log(i18n.dir())}

              <div className="app__navbar-menu-items">
                {menu.map((item, index) => (
                  <div key={index} className="app__navbar-menu-item">
                    <Link
                      className={activePage === item.link ? "active" : ""}
                      onClick={() => {
                        // handleClick(index);
                        setToggleMenu(false);
                      }}
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                {/* <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="dropdown-toggle"
                  >
                    <img
                      src={languageFlags[selectedLanguage]}
                      alt="Selected Language"
                      style={{
                        width: "20px",
                        marginRight: "8px",
                        marginLeft: "8px",
                      }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => changeLanguage("ar")}>
                      <img
                        src="https://flagcdn.com/sa.svg"
                        alt="Arabic"
                        style={{ width: "20px", marginRight: "8px" }}
                      />
                      عربي
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage("en")}>
                      <img
                        src="https://flagcdn.com/gb.svg"
                        alt="English"
                        style={{ width: "20px", marginRight: "8px" }}
                      />
                      English
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage("zh")}>
                      <img
                        src="https://flagcdn.com/cn.svg"
                        alt="Chinese"
                        style={{ width: "20px", marginRight: "8px" }}
                      />
                      中文
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage("tr")}>
                      <img
                        src="https://flagcdn.com/tr.svg"
                        alt="Turkish"
                        style={{ width: "20px", marginRight: "8px" }}
                      />
                      Türkçe
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => changeLanguage("hi")}>
                      <img
                        src="https://flagcdn.com/in.svg"
                        alt="Hindi"
                        style={{ width: "20px", marginRight: "8px" }}
                      />
                      हिन्दी
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                {/* <ul className="list-unstyled d-flex mt-3 me-5">
                  <li>
                    <NavLink
                      to="#"
                      target="_blank"
                      className="fa-brands p-1 fa-facebook text-decoration-none my-3 mx-1 text-white"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      target="_blank"
                      className="fa-brands p-1 fa-google text-decoration-none my-3 mx-1 text-white"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      target="_blank"
                      className="fa-brands p-1 fa-linkedin text-decoration-none my-3 mx-1 text-white"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      target="_blank"
                      className="fa-brands p-1 fa-whatsapp text-decoration-none my-3 mx-1 text-white"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      target="_blank"
                      className="fa-brands p-1 fa-x-twitter text-decoration-none my-3 mx-1 text-white"
                    ></NavLink>
                  </li>
                </ul> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
