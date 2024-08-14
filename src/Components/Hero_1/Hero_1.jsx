import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "./Hero_1.css";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-section">
      {/* صور الخلفية */}
      <Carousel
        controls={true}
        indicators={false}
        interval={2000}
        fade
        prevIcon={<span className="custom-preve-icon" />}
        nextIcon={<span className="custom-nexte-icon" />}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={t('hero.alt_first_slide')}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={t('hero.alt_second_slide')}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={t('hero.alt_third_slide')}
          />
        </Carousel.Item>
      </Carousel>
      {/* النص فوق الخلفية */}
      <div className="hero-caption">
        <h1>{t('hero.company')} <span className='color'> {t('hero.company_name')} </span></h1>
        <p>{t('hero.subtitle')}</p>
        <Link className='text-decoration-none coloers text-light' to="about">
          <button className="btn-1 btn-outline-light col-md-3 me-md-2" type="button">{t('hero.about_us')}</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
