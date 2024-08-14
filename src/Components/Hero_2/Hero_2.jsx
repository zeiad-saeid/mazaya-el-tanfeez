import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero_2.css";
import url_image from "../images/1 (2).png";
import { useTranslation } from "react-i18next";
import axios from "axios";

// const partnersData = [
//   {
//     id: 1,
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-5.jpg",
//   },
//   {
//     id: 2,
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-5.jpg",
//   },
//   {
//     id: 3,
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-5.jpg",
//   },
//   {
//     id: 4,
//     image: "https://demo.phpscriptpoint.com/acon/public/uploads/service-5.jpg",
//   },
// ];

export default function Hero_2() {
  const { t } = useTranslation();
  const [partnersData, setPartnersData] = useState([]);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const { data } = await axios.get(
          "https://gayekapp.com/mzaya/api/partners"
        );
        setPartnersData(data.partners);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchPartners();
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const partnerGroups = chunkArray(partnersData, 3);

  return (
    <>
      <Row
        style={{ backgroundColor: "#F6F6F6" }}
        className="red d-flex align-items-center text-center justify-content-center p-0"
      >
        <div className="section__title">
          <h2 className="">{t("partner.title")}</h2>
          <p>{t("partner.description")}</p>
          <div className="divider"></div>
        </div>
      </Row>
      {partnerGroups.map((group, groupIndex) => (
        <Row
          style={{ backgroundColor: "#F6F6F6" }}
          className="d-flex align-items-center text-center justify-content-center p-0"
          key={groupIndex}
        >
          {group.map((partner) => (
            <Col sm="4" className="col-custom" key={partner.id}>
              <img
                className="logo mb-3 w-75"
                src={partner.image}
                alt={partner.alt}
              />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}
