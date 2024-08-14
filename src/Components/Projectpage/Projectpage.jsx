import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NewPortfolio from '../NewPortfolio/NewPortfolio';
const cardData = [
  {
    imgSrc: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "تسليم ڤيلا سكنية",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "latestproject"
  },
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
    title: "مشروع فلا صلبوخ",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "latestproject"
  },
  {
    imgSrc: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "انشاء عمارة سكنية",
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
      <div className="page__title">
        <h2 className="">{t("portfolio_section.title")}</h2>
        <p>{t("portfolio_section.short_description")}</p>
        <div className="divider"></div>
      </div>
    <NewPortfolio showTitle={false} bgColor={'#fff'} />
    </>
  );
}
