import React, { useState } from "react";
import "./Gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import { useTranslation } from "react-i18next";

export default function Serves() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = [
    {
      images: [
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      text: "مشروع ڤلا الملك عبداللة الخيرى بصلبوخ",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      text: "مشروع الحرمين الشريفين البنية التحتية بالتعاون مع شركة بنلادن السعودية",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      text: "أكثر من 20 ڤيلا وشقق سكنية",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      text: "أكثر من 20 ڤيلا وشقق سكنية",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      text: "أكثر من 20 ڤيلا وشقق سكنية",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      text: "أكثر من 20 ڤيلا وشقق سكنية",
    },
  ];

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
      <div className="container-fluid bg-container">
        <div className="row">
          <div className="col bg-image"></div>
        </div>
        <div className="row main-content">
          <div className="col">
            <h2 className="services-title mt-3 fs-2 fw-bold">
              {t("serves.title")}
            </h2>
          </div>
        </div>
      </div>
      <div className="container text-center justify-content-center">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="card" onClick={() => handleShow(index)}>
                <div className="card-image g-5">
                  <img src={project.images[0]} alt="Property" />
                  <div className="overlay">
                    <div className="icons">
                      <HiMiniMagnifyingGlass />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {show && (
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
                    {projects[activeProjectIndex].text}
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
                    fade
                    selectedItem={0}
                    showThumbs={false}
                    dynamicHeight={true}
                  >
                    {projects[activeProjectIndex].images.map((image, i) => (
                      <div key={i}>
                        <img
                          className="d-block w-100"
                          src={image}
                          alt={`Slide ${i + 1}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
