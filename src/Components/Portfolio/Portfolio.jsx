import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Portfolio.css";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const ref = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);

  const checkContentHeight = () => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight > ref.current.clientHeight);
    }
  };

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(
          "https://gayekapp.com/mzaya/api/projects"
        );
        const projectData = data.projects.find((p) => p.id === id);
        setProject(projectData);
        setProjects(data.projects);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    getProject();
  }, [id]);

  useEffect(() => {
    setIsOpen(false);
    setTimeout(checkContentHeight, 100);
  }, [project]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  const content =
    i18n.language === "ar"
      ? project.text_ar
      : i18n.language === "ur"
      ? project.text_ur
      : i18n.language === "tr"
      ? project.text_tr
      : i18n.language === "zh"
      ? project.text_zh
      : project.text_en;
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

  return (
    <>
      {/* <div className="container-fluid bg-container">
        <div className="row">
          <div className="col bg-image"></div>
        </div>
        <div className="row main-content">
          <div className="col">
            <h4 className="pt-2 fs-1 fw-bold">
              {i18n.language === "ar" ? project.name_ar : project.name_en}
            </h4>
          </div>
        </div>
      </div> */}

      <div className="page__title">
        <h2 className="">
          {i18n.language === "ar" ? project.name_ar : project.name_en}
        </h2>
        <div className="divider"></div>
      </div>

      <Container>
        <Row>
          <Col md={7}>
            {project.image && (
              <div className="portfolio-image-container">
                <img
                  className="w-100 mt-5 d-flex justify-content-center"
                  src={project.image}
                  alt={
                    i18n.language === "ar" ? project.name_ar : project.name_en
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
                  {isRTL ? "المشاريع" : "Projects"}
                </h3>
                <ul>
                  {projects.map((projectItem) => (
                    <li key={projectItem.id} className={isRTL ? "rtl" : "ltr"}>
                      <Link to={`/projects/${projectItem.id}`}>
                        {i18n.language === "ar"
                          ? projectItem.name_ar
                          : projectItem.name_en}
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
            {isRTL ? "وصف المشروع" : "Description"}
          </h3>
          <div className="col-md-12 col-s">
            <div
              ref={ref}
              className={`text-container ${isOpen ? "expanded" : ""}`}
              style={textstyle}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>

          {showReadMore && (
            <button
              className="read-more-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
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

        <table
          className="table table-bordered project-desc"
          style={{
            width: "40%",
            marginRight: isRTL ? "0" : "auto",
            marginLeft: isRTL ? "auto" : "0",
          }}
        >
          <tbody>
            <tr>
              <td className={isRTL ? "rtl" : "ltr"}>{project.client_name}</td>
              <td className={isRTL ? "rtl" : "ltr"}>
                <h5
                  className="fs-6 fw-bold"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {isRTL ? "اسم العميل" : "Client Name"}
                </h5>
              </td>
            </tr>
            <tr>
              <td className={isRTL ? "rtl" : "ltr"}>
                {project.client_company}
              </td>
              <td className={isRTL ? "rtl" : "ltr"}>
                <h5
                  className="fs-6 fw-bold"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {isRTL ? "شركة العميل" : "Client Company"}
                </h5>
              </td>
            </tr>
            <tr>
              <td className={isRTL ? "rtl" : "ltr"}>{project.start_date}</td>
              <td className={isRTL ? "rtl" : "ltr"}>
                <h5
                  className="fs-6 fw-bold"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {isRTL ? "تاريخ بدء المشروع" : "Project Start Date"}
                </h5>
              </td>
            </tr>
            <tr>
              <td className={isRTL ? "rtl" : "ltr"}>{project.end_date}</td>
              <td className={isRTL ? "rtl" : "ltr"}>
                <h5
                  className="fs-6 fw-bold"
                  style={{ textAlign: isRTL ? "right" : "left" }}
                >
                  {isRTL ? "تاريخ انتهاء المشروع" : "Project End Date"}
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
