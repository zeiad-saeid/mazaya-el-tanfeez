import React, { useState } from "react";
import "./Serves.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel, CarouselItem } from "react-bootstrap";

import url_image from "../images/1 (2).png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect } from "react";

export default function Serves() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [servesApi, setServesApi] = useState([]);

  async function apiData() {
    const { data } = await axios.get(
      `https://gayekapp.com/mzaya/api/gallery-group`
    );
    setServesApi(data.GalleryGroup);
    // console.log(data.GalleryGroup);
  }

  useEffect(() => {
    apiData();
  }, []);

  const handleShow = (index) => {
    setActiveProjectIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setActiveProjectIndex(null);
  };

  return (
    <>
      <div className="page__title">
        <h2 className="">{t("serves.title")}</h2>
        <p>{t("serves.description")}</p>
        <div className="divider"></div>
      </div>

      <div className="container text-center justify-content-center mt-5">
        {/* <div className="services">
        <h2 className="services-title">{t('serves.title')}</h2>
        <p className="services-description">{t('serves.description')}</p>
        <img className='w-50 image' src={url_image} alt="" />
      </div> */}

        <div className="row">
          {servesApi.map((project, index) => (
            <div
              key={index}
              className="col-md-4 col-12 mb-4 gallery-container1"
            >
              <div className="card" onClick={() => handleShow(index)}>
                <div className="card-image g-5">
                  <img src={project.image} alt="Property" />
                  <div className="overlay">
                    <div className="icons">
                      <i className="fs-1 fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {show && (
          <>
            <div className="modal-backdrop-custom"></div>
            <div
              className="modal show d-block"
              tabIndex="-1"
              role="dialog"
              onClick={handleClose}
            >
              <div
                className="modal-dialog modal-lg"
                role="document"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content">
                  <div className="newmodal-header">
                    <h5 className="modal-title">
                      {servesApi[activeProjectIndex].name}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={handleClose}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Carousel
                      controls={true}
                      indicators={false}
                      interval={2000}
                      fade={true}
                      selectedItem={0}
                      showThumbs={false}
                      dynamicHeight={true}
                    >
                      {servesApi[activeProjectIndex].images.map((image, i) => (
                        <CarouselItem key={i}>
                          <img
                            style={{ objectFit: "cover" }}
                            className="d-block w-100"
                            src={image.image}
                            alt={`Slide ${i + 1}`}
                          />
                        </CarouselItem>
                      ))}
                      {/* <div>
                          <img
                            style={{ objectFit: "cover" }}
                            className="d-block w-100"
                            src={'https://gayekapp.com/mzaya/public/uploads/galleries/19514749.jpeg'}
                            alt={`Slide ${1}`}
                          />
                        </div> */}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
