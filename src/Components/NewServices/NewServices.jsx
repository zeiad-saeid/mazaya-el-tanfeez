import React, { useEffect, useState } from "react";
import "./NewServices.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { FaAngleDoubleLeft } from "react-icons/fa";
{
  /* <FaAngleDoubleLeft /> */
}
// const services = [
//   {
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-1.jpg",
//     title: "البناء المعماري",
//     description:
//       "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
//     btnLink: "#",
//   },
//   {
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-2.jpg",
//     title: "الهندسة والتصميم",
//     description:
//       "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
//     btnLink: "#",
//   },
//   {
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-3.jpg",
//     title: "الهندسة والتصميم",
//     description:
//       "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
//     btnLink: "#",
//   },
//   {
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-4.jpg",
//     title: "الهندسة والتصميم",
//     description:
//       "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
//     btnLink: "#",
//   },
//   {
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-5.jpg",
//     title: "الهندسة والتصميم",
//     description:
//       "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
//     btnLink: "#",
//   },
//   {
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-6.jpg",
//     title: "الهندسة والتصميم",
//     description:
//       "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
//     btnLink: "#",
//   },
// ];
const NewServices = ({ showTitle = true }) => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      let result = await axios.get("https://gayekapp.com/mzaya/api/services");
      setServices(result.data.services);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    getServices();
  }, []);
  // useEffect(() => {
  //   console.log(i18n.language)
  // }, [i18n, i18n.language]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="m7mdcontainerm7md newservices">
        {showTitle ? (
          <>
            <div className="section__title">
              <h2 className="">{t("services_section.title")}</h2>
              <p>{t("services_section.short_description")}</p>
              <div className="divider"></div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="newservices__section">
          {i18n.language === "ar" &&
            services.map((service) => {
              return (
                <div key={service?.id} className="newservices__section-service">
                  <div className="image">
                    <img src={service?.image} alt={service?.name_ar} />
                  </div>
                  <div className="content">
                    <h4>{service?.name_ar}</h4>
                    <p>{service?.short_description_ar}</p>
                    <div className="learn-more-btn">
                      <Link
                        to={`/services/${service?.id}`}
                        onClick={() => scrollToTop()}
                      >
                        {t("button_states.read_more")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          {i18n.language === "en" &&
            services.map((service) => {
              return (
                <div key={service?.id} className="newservices__section-service">
                  <div className="image">
                    <img src={service?.image} alt={service?.name_en} />
                  </div>
                  <div className="content">
                    <h4>{service?.name_en}</h4>
                    <p>{service?.short_description_en}</p>
                    <div className="learn-more-btn">
                      <Link
                        to={`/services/${service?.id}`}
                        onClick={() => scrollToTop()}
                      >
                        {t("button_states.read_more")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          {i18n.language === "hi" &&
            services.map((service) => {
              return (
                <div key={service?.id} className="newservices__section-service">
                  <div className="image">
                    <img src={service?.image} alt={service?.name_ur} />
                  </div>
                  <div className="content">
                    <h4>{service?.name_ur}</h4>
                    <p>{service?.short_description_ur}</p>
                    <div className="learn-more-btn">
                      <Link
                        to={`/services/${service?.id}`}
                        onClick={() => scrollToTop()}
                      >
                        {t("button_states.read_more")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          {i18n.language === "tr" &&
            services.map((service) => {
              return (
                <div key={service?.id} className="newservices__section-service">
                  <div className="image">
                    <img src={service?.image} alt={service?.name_tr} />
                  </div>
                  <div className="content">
                    <h4>{service?.name_tr}</h4>
                    <p>{service?.short_description_tr}</p>
                    <div className="learn-more-btn">
                      <Link
                        to={`/services/${service?.id}`}
                        onClick={() => scrollToTop()}
                      >
                        {t("button_states.read_more")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          {i18n.language === "zh" &&
            services.map((service) => {
              return (
                <div key={service?.id} className="newservices__section-service">
                  <div className="image">
                    <img src={service?.image} alt={service?.name_zh} />
                  </div>
                  <div className="content">
                    <h4>{service?.name_zh}</h4>
                    <p>{service?.short_description_zh}</p>
                    <div className="learn-more-btn">
                      <Link
                        to={`/services/${service?.id}`}
                        onClick={() => scrollToTop()}
                      >
                        {t("button_states.read_more")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default NewServices;
