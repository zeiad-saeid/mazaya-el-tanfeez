
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import url_image from "../images/1 (2).png";
import { useTranslation } from 'react-i18next';

const cardData = [
  {
    imgSrc: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "تسليم ڤيلا سكنية",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "latestproject"
  },
  {
    imgSrc: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "مشروع فلا صلبوخ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "latestproject"
  },
  {
    imgSrc: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "انشاء عمارة سكنية",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "latestproject"
  }
];

export default function Recentposts() {
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    // تحديث الاتجاه بناءً على اللغة الحالية
    setDirection(i18n.language === 'ar' || i18n.language === 'hi' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <>
      {/* الجزء الخاص بالعنوان */}
      <div className="services">
        <h2 className="services-title">{t('recent_posts.title')}</h2>
        <p className="services-description">
          {t('recent_posts.description')}
        </p>
        <img className="w-50 image" src={url_image} alt="Latest posts illustration" />
      </div>

      <div className="container1-fluid ms-3" style={{ backgroundColor: "white" }}>
        <div className={`row d-flex align-items-center justify-content-center ${direction === 'rtl' ? 'text-end' : 'text-start'}`}>
          {Array.isArray(cardData) && cardData.map((card, index) => (
            <div key={index} className="col-md-4">
              <div className="card1" style={{ backgroundColor: '#13233C', color: "white" }}>
                <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                <div className={`card1-body ${direction}`}>
                  <h5 className="card1-title mb-5 mt-2">{card.title}</h5>
                  <p className="card1-text">{card.text}</p>
                  <div className={`button-container ${direction === 'rtl' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <button
                      style={{ backgroundColor: '#F5C139', color: "#13233C", width: '200px' }}
                      className="button-3"
                      role="button"
                    >
                      <Link to={card.link} className="text-decoration-none d-flex align-items-center justify-content-between" style={{ color: "#13233C", width: '70%' }}>
                        {t('recent_posts.learn_more')}
                        <i className={`fa-solid fa-angles-${direction === 'rtl' ? 'left' : 'right'}`}></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
