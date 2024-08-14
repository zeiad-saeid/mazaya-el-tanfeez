import React, { useEffect, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import { SettingsContext } from "../SettingsContext";
import axios from "axios";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("rtl");
  const [formSubmit, setFormSubmit] = useState(false);
  const settings = useContext(SettingsContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  // }, [i18n.language]);

  const schema = Joi.object({
    name: Joi.string().min(10).max(20).required().messages({
      "string.base": "يجب أن يكون الاسم نصيًا",
      "string.min": "يجب أن يكون الاسم من 10 إلى 20 حرفًا",
      "string.max": "يجب أن يكون الاسم من 10 إلى 20 حرفًا",
      "string.empty": "حقل الاسم مطلوب",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "يجب أن يكون البريد الإلكتروني صالحًا",
        "string.empty": "حقل البريد الإلكتروني مطلوب",
      }),
    phone: Joi.string()
      .pattern(/^\d{1,12}$/)
      .required()
      .messages({
        "string.pattern.base": "يجب أن يكون رقم الهاتف 12 رقمًا أو أقل",
        "string.empty": "حقل الهاتف مطلوب",
      }),
    message: Joi.string().required().messages({
      "string.empty": "حقل الرسالة مطلوب",
    }),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      const errorMessages = {};
      error.details.forEach((detail) => {
        errorMessages[detail.path[0]] = detail.message;
      });
      setErrors(errorMessages);
      return;
    }
    setErrors({});
    try {
      const response = await axios.post(
        "https://gayekapp.com/mzaya/api/postContactus",
        formData
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormSubmit(true);
        console.log("form submit succuessfully 2");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
    }
  };

  // if (success === true) {
  //   useEffect(() => {
  //     console.log(success);
  //     console.log(success);
  //     console.log(success);
  //     const myTimeout = setTimeout(() => {
  //       navigate(0);
  //       setSuccess(false);
  //       setFormSubmit(false);
  //     }, 3000);
  //     return () => {
  //       clearTimeout(myTimeout);
  //     };
  //   }, []);
  // }

  return (
    <>
      {/* <div className="container-fluid bg-container">
        <div className="row">
          <div className="col bg-image"></div>
        </div>
        <div className="row main-content">
          <div className="col">
            <h4 className='pt-2 fs-2 fw-semibold'>{t('contact.contact_us')}</h4>
          </div>
        </div>
      </div> */}
      <div className="page__title">
        <h2 className="">{t("contact.contact_us")}</h2>
        <p>{t("contact.contact_us_description")}</p>
        <div className="divider"></div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-7 mt-3 mb-4">
            <h4>{t("contact.visit_branch")}</h4>
            <div style={{ maxWidth: "100%" }}>
              <iframe
                Width="80%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?width=720&height=600&hl=en&q=${settings.lat},${settings.long}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
          </div>
          <div className="col-md-5 mt-3 mb-4">
            <h4>{t("contact.contact_form")}</h4>
            {formSubmit ? (
              <div className="alert alert-success mt-3" role="alert">
                سيتم التواصل معك فى اقرب وقت
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className={`mb-3 text-${
                    direction === "rtl" ? "end" : "start"
                  }`}
                  controlId="formBasicName"
                >
                  <Form.Label
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                  >
                    {t("contact.name")}
                  </Form.Label>
                  <Form.Control
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className={`mb-3 text-${
                    direction === "rtl" ? "end" : "start"
                  }`}
                  controlId="formBasicEmail"
                >
                  <Form.Label
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                  >
                    {t("contact.email")}
                  </Form.Label>
                  <Form.Control
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className={`mb-3 text-${
                    direction === "rtl" ? "end" : "start"
                  }`}
                  controlId="formBasicPhone"
                >
                  <Form.Label
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                  >
                    {t("contact.phone")}
                  </Form.Label>
                  <Form.Control
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className={`mb-3 text-${
                    direction === "rtl" ? "end" : "start"
                  }`}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                  >
                    {t("contact.your_message")}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`text-${direction === "rtl" ? "end" : "start"}`}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <button
                  style={{
                    backgroundColor: "#13233C",
                    color: "white",
                    width: "200px",
                    border: "none",
                  }}
                  className="button-3"
                  role="button"
                  type="submit"
                >
                  {t("contact.send")}
                </button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
