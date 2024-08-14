import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./NewPortfolio.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import { FaAngleDoubleLeft } from "react-icons/fa";
{
  /* <FaAngleDoubleLeft /> */
}

// Sample card data
const cardData = [
  {
    image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-1.jpg",
    title: "البناء المعماري",
    description:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    btnLink: "#",
    category: "BUSINESS",
  },
  {
    image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-2.jpg",
    title: "الهندسة والتصميم",
    description:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    btnLink: "#",
    category: "CORPORATE",
  },
  {
    image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-3.jpg",
    title: "الهندسة والتصميم",
    description:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    btnLink: "#",
    category: "ENGINEERING",
  },
  {
    image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-4.jpg",
    title: "الهندسة والتصميم",
    description:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    btnLink: "#",
    category: "BUSINESS",
  },
  {
    image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-5.jpg",
    title: "الهندسة والتصميم",
    description:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    btnLink: "#",
    category: "ALL",
  },
  {
    image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-6.jpg",
    title: "الهندسة والتصميم",
    description:
      "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور",
    btnLink: "#",
    category: "ALL",
  },
];

const TabContent = ({ category, portfolioData }) => {
  const { t, i18n } = useTranslation();

  const filteredCards =
    category === "ALL"
      ? portfolioData
      : portfolioData.filter((card) => card.category === category);

  {
    /* We Stopped Here */
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <TransitionGroup className="newportfolio__section-cards">
      {i18n.language === "ar" &&
        portfolioData.map((card) => (
          <CSSTransition
            key={card.id}
            timeout={300}
            classNames="newportfolio__section-card"
          >
            <div className="newportfolio__section-card">
              <div className="image">
                <img src={card.image} alt={card.name_ar} />
              </div>
              <div className="content">
                <h4>{card.name_ar}</h4>
                <p>{card.short_description_ar}</p>
                <div className="learn-more-btn">
                  <Link
                    to={`/projects/${card.id}`}
                    onClick={() => scrollToTop()}
                  >
                    {t("button_states.read_more")}
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      {i18n.language === "en" &&
        portfolioData.map((card) => (
          <CSSTransition
            key={card.id}
            timeout={300}
            classNames="newportfolio__section-card"
          >
            <div className="newportfolio__section-card">
              <div className="image">
                <img src={card.image} alt={card.name_en} />
              </div>
              <div className="content">
                <h4>{card.name_en}</h4>
                <p>{card.short_description_en}</p>
                <div className="learn-more-btn">
                  <Link
                    to={`/projects/${card.id}`}
                    onClick={() => scrollToTop()}
                  >
                    {t("button_states.read_more")}
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      {i18n.language === "hi" &&
        portfolioData.map((card) => (
          <CSSTransition
            key={card.id}
            timeout={300}
            classNames="newportfolio__section-card"
          >
            <div className="newportfolio__section-card">
              <div className="image">
                <img src={card.image} alt={card.name_ur} />
              </div>
              <div className="content">
                <h4>{card.name_ur}</h4>
                <p>{card.short_description_ur}</p>
                <div className="learn-more-btn">
                  <Link
                    to={`/projects/${card.id}`}
                    onClick={() => scrollToTop()}
                  >
                    {t("button_states.read_more")}
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      {i18n.language === "tr" &&
        portfolioData.map((card) => (
          <CSSTransition
            key={card.id}
            timeout={300}
            classNames="newportfolio__section-card"
          >
            <div className="newportfolio__section-card">
              <div className="image">
                <img src={card.image} alt={card.name_tr} />
              </div>
              <div className="content">
                <h4>{card.name_tr}</h4>
                <p>{card.short_description_tr}</p>
                <div className="learn-more-btn">
                  <Link
                    to={`/projects/${card.id}`}
                    onClick={() => scrollToTop()}
                  >
                    {t("button_states.read_more")}
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      {i18n.language === "zh" &&
        portfolioData.map((card) => (
          <CSSTransition
            key={card.id}
            timeout={300}
            classNames="newportfolio__section-card"
          >
            <div className="newportfolio__section-card">
              <div className="image">
                <img src={card.image} alt={card.name_zh} />
              </div>
              <div className="content">
                <h4>{card.name_zh}</h4>
                <p>{card.short_description_zh}</p>
                <div className="learn-more-btn">
                  <Link
                    to={`/projects/${card.id}`}
                    onClick={() => scrollToTop()}
                  >
                    {t("button_states.read_more")}
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

const NewPortfolio = ({ showTitle = true, bgColor }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [portfolioData, setPortfolioData] = useState([]);
  const [porfolioDepartments, setPorfolioDepartments] = useState([]);
  const { t, i18n } = useTranslation();

  const getPortfolioData = async () => {
    try {
      let result = await axios.get("https://gayekapp.com/mzaya/api/projects");
      setPortfolioData(result.data.projects);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };
  const getProjectDepartments = async () => {
    try {
      let result = await axios.get(
        "https://gayekapp.com/mzaya/api/project-departments"
      );
      setPorfolioDepartments(result.data.ProjectDepartments);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  const handleTabClick = (category, id) => {
    setActiveTab(category);
    if (category !== "ALL") {
      let res = porfolioDepartments
        .filter((projdep) => projdep.id === id)
        .map((projdep) => projdep.projects);
      setPortfolioData((prevState) => res[0]);
    } else {
      getPortfolioData();
    }
    // setPortfolioData(()=> porfolioDepartments.map((projdep)=>(projdep.name_ar).filter(projdepname=>(projdepname.name_ar === ))
  };

  useEffect(() => {
    getPortfolioData();
    getProjectDepartments();
  }, []);
  return (
    <div
      style={bgColor && { backgroundColor: "#fff" }}
      className="m7mdcontainerm7md newportfolio"
    >
      {showTitle ? (
        <>
          <div className="section__title">
            <h2 className="">{t("portfolio_section.title")}</h2>
            <p>{t("portfolio_section.short_description")}</p>
            <div className="divider"></div>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="tabs">
        {/* {console.log(porfolioDepartments[0].name_ar)} */}
        <button
          className={`tab-button ${activeTab === "ALL" ? "active" : ""}`}
          onClick={() => handleTabClick("ALL")}
        >
          {"ALL"}
        </button>
        {porfolioDepartments.map((porfolioDepartment) => {
          return (
            <button
              key={porfolioDepartment.id}
              className={`tab-button ${
                activeTab === porfolioDepartment.name_ar ? "active" : ""
              }`}
              onClick={() =>
                handleTabClick(
                  porfolioDepartment.name_ar,
                  porfolioDepartment.id
                )
              }
            >
              {porfolioDepartment.name_ar}
            </button>
          );
        })}
      </div>
      <div className="tab-content">
        <TabContent portfolioData={portfolioData} category={activeTab} />
      </div>
    </div>
  );
};

export default NewPortfolio;
