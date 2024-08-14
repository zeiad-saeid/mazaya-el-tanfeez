import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./About.css";
import "./About.scss";

export default function About() {
  const { t, i18n } = useTranslation();
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const { data } = await axios.get(
        "https://gayekapp.com/mzaya/api/about-us"
      );
      // console.log(data.abouts);
      // setAboutData(data.abouts);
    };
    getApi();
  }, []);

  const currentLanguage = i18n.language;
  const leftAlignedLanguages = ["en", "tr", "zh"];

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  // وظيفة لإزالة علامات <p>
  const removePTags = (text) => {
    return text.replace(/<p>/g, "").replace(/<\/p>/g, "");
  };

  return (
    <>
      <div className="page__title">
        <h2 className="">{t("about.who_we_are")}</h2>
        {/* <p>{t("contact.contact_us_description")}</p> */}
        <div className="divider"></div>
      </div>
      {/* <div className="aboutpage"></div> */}
      <div className="aboutpage-container">
        <div className="aboutpage-image">
          <img
            src="https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        {i18n.language === "ar" && (
          <div className="aboutpage-content">
            <h3>{t("about.who_we_are")}</h3>
            <p>{aboutData[0]?.desc_ar}</p>
          </div>
        )}
        {i18n.language === "en" && (
          <div className="aboutpage-content">
            <h3>{t("about.who_we_are")}</h3>
            <p>{aboutData[0]?.desc_en}</p>
          </div>
        )}
      </div>
      <div className="aboutpage-objectives-vision">
        <div className="aboutpage-objectives">
          <div className="icon">
            <i className="fa-solid fa-star"></i>
          </div>
          {i18n.language === "ar" && (
            <div className="aboutpage-objectives-content">
              <h3>{t("about.mission")}</h3>
              <p>{aboutData[0]?.objectives_ar}</p>
            </div>
          )}
          {i18n.language === "en" && (
            <div className="aboutpage-objectives-content">
              <h3>{t("about.mission")}</h3>
              <p>{aboutData[0]?.objectives_en}</p>
            </div>
          )}
        </div>
        <div className="aboutpage-vision">
          <div className="icon">
            <i className="fa-solid fa-heart"></i>
          </div>
          {i18n.language === "ar" && (
            <div className="aboutpage-vision-content">
              <h3>{t("about.vision")}</h3>
              <p>{aboutData[0]?.vision_ar}</p>
            </div>
          )}
          {i18n.language === "en" && (
            <div className="aboutpage-vision-content">
              <h3>{t("about.vision")}</h3>
              <p>{aboutData[0]?.vision_en}</p> 
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* <div className="container-fluid bg-container">
        <div className="row">
          <div className="col bg-image"></div>
        </div>
        <div className="row main-content">
          {aboutData.map((about, index) => (
            <div className="col" key={index}>
              <h4 className='pt-2 fs-2 fw-semibold'>
                {currentLanguage === 'ar' ? removePTags(about.title_ar) : removePTags(about.title_en)}
              </h4>
            </div>
          ))}
        </div>
      </div> */}
      <div className="page__title">
        <h2 className="">{t("about.who_we_are")}</h2>
        {/* <p>{t("contact.contact_us_description")}</p> */}
        <div className="divider"></div>
      </div>
      <div
        className={`container mt-5 ${
          leftAlignedLanguages.includes(currentLanguage)
            ? "text-start"
            : "text-end"
        }`}
      >
        <div className="row">
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        {aboutData.map((about, index) => (
          <div className="aboutpage-container1" key={index}>
            <h5 className="fs-1 mt-4">{t("about.who_we_are")}</h5>
            <div className="text-container">
              {currentLanguage === "ar"
                ? truncateText(removePTags(about.desc_ar), 15)
                : truncateText(removePTags(about.desc_en), 15)}
            </div>
          </div>
        ))}
      </div>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <div className="row">
          <div className="col-md-6 mt-3 d-flex flex-column align-items-center">
            <div className="icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="text text-center">
              <h3 className="ms-">{t("about.mission")}</h3>
              <div className="text-container ms-3">
                {currentLanguage === "ar"
                  ? truncateText(
                      removePTags(
                        aboutData[0]?.objectives_ar ||
                          "Lorem ipsum dolor sit amet..."
                      ),
                      15
                    )
                  : truncateText(
                      removePTags(
                        aboutData[0]?.objectives_en ||
                          "Lorem ipsum dolor sit amet..."
                      ),
                      15
                    )}
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3 d-flex flex-column align-items-center">
            <div className="icon">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="text text-center">
              <h3 className="ms-1 ">{t("about.vision")}</h3>
              <div className="text-container3 ms-3">
                <p>
                  {currentLanguage === "ar"
                    ? truncateText(
                        removePTags(
                          aboutData[0]?.vision_ar ||
                            "Lorem ipsum dolor sit amet..."
                        ),
                        15
                      )
                    : truncateText(
                        removePTags(
                          aboutData[0]?.vision_en ||
                            "Lorem ipsum dolor sit amet..."
                        ),
                        15
                      )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
