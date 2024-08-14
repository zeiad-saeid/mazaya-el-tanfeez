import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsWhatsapp } from "react-icons/bs";

import "./WhatsappBtn.scss";

const WhatsappBtn = () => {
  const { t, i18n } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // تحديد الاتجاه بناءً على اللغة الحالية
  const isRtl = i18n.language === "ar" || i18n.language === "ur";

  return (
    <>
      <a className="whatsapp-btn" href="https://wa.me/00966565861697">
        <BsWhatsapp />
      </a>
    </>
    // <div className={`floating-form-container ${isRtl ? 'ltr' : 'rtl'}`}>
    //   <button className="floating-form-button" onClick={toggleForm}>
    //     {t('floatingFormButton.send_message')}
    //   </button>
    //   {showForm && (
    //     <div className={`floating-form ${isRtl ? 'ltr' : 'rtl'}`}>
    //      <h3 className={isRtl ? 'rtl' : 'ltr'}>{t('floatingFormButton.contact_form')}</h3>
    //       <form className={`form-content ${isRtl ? 'rtl' : 'ltr'}`}>
    //         <input type="text" placeholder={t('floatingFormButton.name')} className={isRtl ? 'rtl' : 'ltr'} />
    //         <input type="email" placeholder={t('floatingFormButton.email')} className={isRtl ? 'rtl' : 'ltr'} />
    //         <textarea placeholder={t('floatingFormButton.message')} className={isRtl ? 'rtl' : 'ltr'}></textarea>
    //         <button type="submit">{t('floatingFormButton.send')}</button>
    //       </form>
    //       <button className="close-form-button" onClick={toggleForm}>
    //         <i className="fa-solid fa-x"></i>
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default WhatsappBtn;
