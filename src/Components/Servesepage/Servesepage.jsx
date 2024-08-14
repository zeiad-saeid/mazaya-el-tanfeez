import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NewServices from "../NewServices/NewServices";

export default function Servesepage() {
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("rtl");

  useEffect(() => {
    // تحديث الاتجاه بناءً على اللغة الحالية
    setDirection(
      i18n.language === "ar" || i18n.language === "hi" ? "rtl" : "ltr"
    );
  }, [i18n.language]);
  const updateDocumentDirection = (lng) => {
    const direction = lng === "ar" || lng === "hi" ? "ltr" : "rtl"; // تعديل الاتجاه بناءً على اللغة
    document.documentElement.dir = direction;
    document.documentElement.lang = lng;
  };
  const cardData = [
    {
      id: 1,
      title: t("services.import_export"),
      description: t("services.details"),
      imgUrl:
        "https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: t("services.renovations"),
      description: t("services.details"),
      imgUrl:
        "https://images.pexels.com/photos/804392/pexels-photo-804392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: t("services.super_deluxe_finish"),
      description: t("services.details"),
      imgUrl:
        "https://images.pexels.com/photos/638487/pexels-photo-638487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: t("services.turnkey"),
      description: t("services.details"),
      imgUrl:
        "https://images.pexels.com/photos/8482872/pexels-photo-8482872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: t("services.real_estate_construction"),
      description: t("services.details"),
      imgUrl:
        "https://images.pexels.com/photos/2036686/pexels-photo-2036686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: t("services.finishes"),
      description: t("services.details"),
      imgUrl:
        "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      {/* سطر علوى */}
      {/* <div className="container-fluid bg-container">
        <div className="row">
          <div className="col bg-image"></div>
        </div>
        <div className="row main-content">
          <div className="col">
            <h2 className="services-title mt-3 fs-2 fw-bold">
              {t("services.title")}
            </h2>
          </div>
        </div>
      </div> */}
      <div className="page__title">
        <h2 className="">{t("services_section.title")}</h2>
        <p>{t("services_section.short_description")}</p>
        <div className="divider"></div>
      </div>
      <NewServices showTitle={false} />
    </>
  );
}
