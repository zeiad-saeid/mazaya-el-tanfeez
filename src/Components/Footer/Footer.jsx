// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import "./Footer.css";

// export default function Footer() {
//   const { t, i18n } = useTranslation();
//   const isRtl = i18n.language === 'ar'; // Assuming 'ar' is the language code for Arabic or any other RTL language

//   return (
//     <div className='text-end w-100 text-light' style={{ backgroundColor: '#13233C' }}>
//       <div className="container-fluid footer">
//         <div className="row">
//           {/* جزء1 */}
//           <div className={`col-md-3 mt-5 ${isRtl ? 'text-end' : 'text-start'}`}>
//             <h5 className="text-light ms-2">{t('footer.quick_links')}</h5>
//             <p className="fo mt-3 ms-2">
//               <Link className='text-decoration-none list-unstyled text-white' to="">{t('footer.home')}</Link>
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">
//               <Link className='text-decoration-none list-unstyled text-white' to="">{t('footer.terms_conditions')}</Link>
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">
//               <Link className='text-decoration-none list-unstyled text-white' to="">{t('footer.privacy_policy')}</Link>
//               <hr className="border-bottom" />
//             </p>
//           </div>
//           {/* جزء2 */}
//           <div className={`col-md-3 mt-5 ${isRtl ? 'text-end' : 'text-start'}`}>
//             <h5 className="text-light ms-2">{t('footer.popular_news')}</h5>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//             </p>
//           </div>
//           {/* جزء3 */}
//           <div className={`col-md-3 mt-5 ${isRtl ? 'text-end' : 'text-start'}`}>
//             <h5 className="text-light ms-2">{t('footer.latest_news')}</h5>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//               <hr className="border-bottom" />
//             </p>
//             <p className="fo mt-3 ms-2">Lorem ipsum dolor sit amet.
//             </p>
//           </div>
//           {/* جزء4 */}
//           <div className={`col-md-3 mt-5 ${isRtl ? 'text-end' : 'text-start'}`}>
//             <h5 className="text-light ms-2">{t('footer.about_us')}</h5>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt atque excepturi nam sint ducimus necessitatibus placeat ab tenetur, qui exercitationem neque iste totam accusamus commodi accusantium, sed soluta vero odit?</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillTelephoneFill,
  BsYoutube,
} from "react-icons/bs";

import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./Footer.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const [settings, setSettings] = useState([]);

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

  const getFooterData = async () => {
    try {
      let result = await axios.get("https://gayekapp.com/mzaya/api/about-us");
      setFooterData(result.data.abouts);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    getFooterData();
  }, []);

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="app__footer">
        <div className="app__footer-contact">
          <h2>{t("footer.contact_information")}</h2>
          <div className="app__footer-contact-icons">
            <a href={settings?.setting?.facebook}>
              <BsFacebook />
            </a>
            <a href={settings?.setting?.instgram}>
              <BsInstagram />
            </a>
            <a href={settings?.setting?.youtube}>
              <BsYoutube />
            </a>
          </div>
          <div className="app__footer-contact-phone">
            <BsFillTelephoneFill />
            <a href={`tel:${settings?.setting?.phone1}`}>
              {settings?.setting?.phone1}
            </a>
          </div>
          <div className="app__footer-contact-mail">
            <HiMail />
            <a href={`mailto:${settings?.setting?.email}`}>
              {settings?.setting?.email}
            </a>
          </div>
        </div>
        <div className="app__footer-sitemap">
          <h2>{t("footer.important_links")}</h2>
          {menu.map((item, index) => (
            <div key={index} className="app__footer-item">
              <Link onClick={scrollToTop} to={item.link}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="app__footer-about">
          <h2>
            {i18n.language === "ar" && footerData[0]
              ? footerData[0]?.title_ar
              : footerData[0]?.title_en}
          </h2>
          <p>
            {i18n.language === "ar" && footerData[0]
              ? footerData[0]?.short_desc_ar
              : footerData[0]?.short_desc_en}
          </p>
        </div>
      </div>

      <div className="bg-dark text-white text-center">
        {t("footer.copyrights")}
      </div>
    </>
  );
};

export default Footer;
