import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";

import url_image from "../images/1 (2).png";
import axios from "axios";

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

function Team() {
  const { t, i18n } = useTranslation();
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 992px)" });
  const cardSize = isDesktopOrLaptop ? 4 : 1; // Number of cards displayed based on screen size

  const [cardsData, setCardsData] = useState([]);

  const fetchTeamData = async () => {
    try {
      let { data } = await axios.get("https://gayekapp.com/mzaya/api/teams");

      setCardsData(data.teams);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  const cardGroups = chunkArray(cardsData, cardSize);

  return (
    <div className="services" style={{ backgroundColor: "#F6F6F6" }}>
     <div className="section__title">
              <h2 className="">{t("team.title")}</h2>
              <p>{t("team.description")}</p>
              <div className="divider"></div>
            </div>
      <div className="carousel-container">
        <Carousel
          controls={true}
          indicators={false}
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon custom-prev-icon"
            />
          }
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon custom-next-icon"
            />
          }
        >
          {cardGroups.map((group, carouselIndex) => (
            <Carousel.Item key={carouselIndex}>
              <div className="container-fluid">
                <div className="row g-4">
                  {group.map((card, index) => (
                    <div
                      className={`col-md-${12 / cardSize} col-12`}
                      key={index}
                    >
                      <div
                        className="card2 my-2"
                        style={{ backgroundColor: "#13233C", color: "white" }}
                      >
                        <div
                          className="social-icons mt-4"
                          style={{
                            textAlign: "center",
                            width: "100%",
                            height: "10%",
                          }}
                        >
                          {(card.socialIcons || []).map((icon, i) => (
                            <i key={i} className={`fa-brands ${icon} fs-3`}></i>
                          ))}
                        </div>
                        <img
                          src={card.image}
                          className="card-img-top"
                          alt={
                            i18n.language === "ar" ? card.name_ar : card.name_en
                          }
                        />
                        <div className="card2-body me-2">
                          <h5 className="card2-title mb-5 mt-2">
                            {i18n.language === "ar"
                              ? card.name_ar
                              : card.name_en}
                            <br />{" "}
                            {i18n.language === "ar"
                              ? card.sub_title_ar
                              : card.sub_title_en}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Team;
