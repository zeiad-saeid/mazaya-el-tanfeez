import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AboutContext = createContext();

export const AboutProvider = ({ children }) => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const { data } = await axios.get('https://gayekapp.com/mzaya/api/about-us');
      setAboutData(data.abouts);
    };
    getApi();
  }, []);

  return (
    <AboutContext.Provider value={aboutData}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = () => useContext(AboutContext);
