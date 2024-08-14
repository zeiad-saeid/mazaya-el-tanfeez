/* eslint-disable no-lone-blocks */

import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';


const ScrollToTopButton = () => {
  {/* حالة  الزر */}
  const [isVisible, setIsVisible] = useState(false);

  {/* وظيفة لتغيير حالة رؤية الزر بناءً على التحرك */}
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  {/* استخدام تأثير لتحديد الأحداث عند التمرير */}
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  {/* وظيفة للتمرير إلى الأعلى بسلاسة */}
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  {/* واجهة المستخدم للمكون */}
  return (
    <div className={`scroll-to-top-button ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTopButton;
