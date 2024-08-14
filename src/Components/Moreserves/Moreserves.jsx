import React, { useEffect, useState, useRef, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Moreserves.css";

export default function Moreserves() {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);

  const checkContentHeight = useCallback(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight > ref.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const getService = async () => {
      try {
        const { data } = await axios.get(
          "https://gayekapp.com/mzaya/api/services"
        );
        const serviceData = data.services.find((s) => s.id === id);
        setService(serviceData);
        setServices(data.services);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    getService();
  }, [id]);

  useEffect(() => {
    if (service) {
      checkContentHeight();
    }
  }, [service, checkContentHeight]);

  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(checkContentHeight);
      observer.observe(ref.current, { childList: true, subtree: true });

      return () => observer.disconnect();
    }
  }, [checkContentHeight]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!service) {
    return <div>Loading...</div>;
  }

  const content = i18n.language === "ar" ? service.text_ar : service.text_en;
  const isRTL = i18n.language === "ar" || i18n.language === "ur";

  const textstyle = {
    wordWrap: "break-word",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
    width: "100%",
    direction: isRTL ? "rtl" : "ltr",
    textAlign: isRTL ? "right" : "left",
    WebkitLineClamp: isOpen ? "unset" : "3",
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
  };

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div className="container-fluid bg-container">
        <div className="row">
          <div className="col bg-image"></div>
        </div>
        <div className="row main-content">
          <div className="col">
            <h4 className="pt-2 fs-1 fw-bold">
              {i18n.language === "ar" ? service.name_ar : service.name_en}
            </h4>
          </div>
        </div>
      </div> */}
      <div className="page__title">
        <h2 className="">
          {i18n.language === "ar" ? service.name_ar : service.name_en}
        </h2>
        <div className="divider"></div>
      </div>
      <Container>
        <Row>
          <Col md={7}>
            {service.image && (
              <div className="moreserves-image-container">
                <img
                  className="w-100 mt-5 d-flex justify-content-center"
                  src={service.image}
                  alt={
                    i18n.language === "ar" ? service.name_ar : service.name_en
                  }
                />
              </div>
            )}
          </Col>
          <Col md={5}>
            <div className="sidebar mt-5">
              <div className="sidebar-item category">
                <h3
                  className="pt-5"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {isRTL ? "الخدمات" : "Services"}
                </h3>
                <ul>
                  {services.map((serviceItem) => (
                    <li key={serviceItem.id} className={isRTL ? "rtl" : "ltr"}>
                      <Link to={`/services/${serviceItem.id}`}>
                        {i18n.language === "ar"
                          ? serviceItem.name_ar
                          : serviceItem.name_en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="container-padding">
        <div className={`text-start ${isRTL ? "rtl" : "ltr"}`}>
          <h3 style={{ textAlign: isRTL ? "right" : "left" }}>
            {isRTL ? "وصف الخدمة" : "Description"}
          </h3>
          <div className="col-md-12 col-s">
            <div
              ref={ref}
              className="text-container"
              style={textstyle}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>

          {showReadMore && (
            <button className="read-more-btn" onClick={toggleReadMore}>
              {isOpen
                ? i18n.language === "ar"
                  ? "اقرأ أقل"
                  : "Read Less"
                : i18n.language === "ar"
                ? "اقرأ المزيد"
                : "Read More"}
            </button>
          )}
        </div>
      </Container>
    </>
  );
}
