import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    address: "",
    address_ar: "",
    phone1: "",
    phone2: "",
    contact_email: "",
    facebook: "",
    youtube: "",
    instgram: "",
    linkedin: "",
    whatsapp: "",
    twitter: "",
    number_1: "0",
    number_2: "0",
    number_3: "0",
    number_4: "0",
    name: "mzaya",
    logo: "https://gayekapp.com/mzaya/public/uploads/configuration/79425521.png",
    icon: "https://gayekapp.com/mzaya/public/uploads/configuration/66961709.png",
  });
  async function fetchSettings() {
    const { data } = await axios.get("https://gayekapp.com/mzaya/api/settings");
    setSettings(data.setting);
  }
  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
