import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsContext } from '../SettingsContext';

export default function Footer_1() {
  const { t } = useTranslation();
  const settings = useContext(SettingsContext);

  const footerItems = [
    {
      icon: 'fa-map-location-dot',
      title: 'footer_1.title_3',
      text: settings.address,
    },
    {
      icon: 'fa-phone-volume',
      title: 'footer_1.title_2',
      text: (
        <>
          {settings.phone1} <br /> {settings.phone2}
        </>
      ),
    },
    {
      icon: 'fa-user-tie',
      title: 'footer_1.title_1',
      text: "ffff",
    },
  ];

  return (
    <div className='bg-warning'>
      <div className="container text-center">
        <div className="row">
          {footerItems.map((item, index) => (
            <div className="col-sm-4 mt-2" key={index}>
              <i className={`fa-solid ${item.icon} fs-1`}></i>
              <p className='fw-bold fs-2'>{t(item.title)}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
