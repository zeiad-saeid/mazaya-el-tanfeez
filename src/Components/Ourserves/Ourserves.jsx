import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Ourserves.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import url_image from "../images/1 (2).png";

export default function Ourserves() {
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState([]);
  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    const getApi = async () => {
      try {
        const { data } = await axios.get('https://gayekapp.com/mzaya/api/services');
        setServices(data.services);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getApi();
  }, []);

  useEffect(() => {
    setDirection(i18n.language === 'ar' || i18n.language === 'hi' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <>
      <div className="services mt-2" style={{ backgroundColor: "white" }}>
        <h2 className="services-title fs-3 fw-bold">{t('services.title')}</h2>
        <p className="services-description">{t('services.description')}</p>
        <img className='w-50 image' src={url_image} alt="" />
      </div>

      <div className="container-fluid text-center mt-2" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col">
            <div className="container1-fluid">
              <div className={`row d-flex align-items-center justify-content-center ${direction}`} style={{ backgroundColor: "white" }}>
                {services.map((service) => (
                  <div className="col-md-4" key={service.id}>
                    <div className="card1 my-2" style={{ backgroundColor: '#13233C', color: "white" }}>
                      <img src={service.image} className="card-img-top" alt={i18n.language === 'ar' ? service.name_ar : service.name_en} />
                      <div className={`card1-body me-2 text-${direction === 'rtl' ? 'end' : 'start'}`}>
                        <h5 className="card1-title mb-3 mt-3" style={{ fontWeight: 'bold' }}>{i18n.language === 'ar' ? service.name_ar : service.name_en}</h5>
                        <p className="card1-text" style={{ fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>
                          {truncateText(i18n.language === 'ar' ? service.short_description_ar : service.short_description_en, 20)}
                        </p>
                        <button style={{ backgroundColor: '#F5C139', color: "#13233C", width: '150px', borderRadius: '5px', padding: '5px' }} className="button-3 d-flex justify-content-between align-items-center">
                          <Link to={`/services/${service.id}`} className='text-decoration-none d-flex align-items-center' style={{ color: "#13233C", width: '100px' }}>
                            {t('services.learn_more')}
                            <i className={`fa-solid fa-angles-${direction === 'rtl' ? 'left' : 'right'} ms-2 ${direction === 'rtl' ? 'me-2' : ''}`}></i>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
