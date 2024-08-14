import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "./FrequentlyAskedQuestions.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";
const FrequentlyAskedQuestions = () => {
  const [selected, setSelected] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const { t, i18n } = useTranslation();

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  // const questionsAndAnswers = [
  //   {
  //     question: "اكتب هنا مكان السؤال",
  //     answer:
  //       "اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, ",
  //   },
  //   {
  //     question: "اكتب هنا مكان السؤال",
  //     answer:
  //       "اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, ",
  //   },
  //   {
  //     question: "اكتب هنا مكان السؤال",
  //     answer:
  //       "اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, ",
  //   },
  //   {
  //     question: "اكتب هنا مكان السؤال",
  //     answer:
  //       "اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, ",
  //   },
  //   {
  //     question: "اكتب هنا مكان السؤال",
  //     answer:
  //       "اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, اهلا وسهلا بكم, ",
  //   },
  // ];

  const getQuestionsAndAnswers = async () => {
    try {
      let result = await axios.get("https://gayekapp.com/mzaya/api/questions");
      setQuestionsAndAnswers(result.data.questions);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  useEffect(() => {
    getQuestionsAndAnswers();
  }, []);
  // useEffect(() => {
  //   console.log(i18n.language)
  // }, [i18n, i18n.language]);

  return (
    <>
      <div className="frequentquestions">
        <div className="frequentquestions-image">
          <img
            src="https://demo.phpscriptpoint.com/acon/public/uploads/faq-main-photo.png"
            alt=""
          />
        </div>
        <div className="frequentquestions-content">
          <h2>{t("qanda_section.title")}</h2>
          <p>{t("qanda_section.short_description")}</p>
          <div className="accordion">
            {i18n.language === "ar" &&
              questionsAndAnswers.map((question, index) => (
                <div key={question.id} className="accordion-item">
                  <div className="title" onClick={() => toggle(index)}>
                    <h2>{question.question_ar}</h2>
                    <span>
                      {selected === index ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </div>
                  <div
                    className={selected === index ? "content show" : "content"}
                  >
                    {question.answer_ar}
                  </div>
                </div>
              ))}
            {i18n.language === "en" &&
              questionsAndAnswers.map((question, index) => (
                <div key={question.id} className="accordion-item">
                  <div className="title" onClick={() => toggle(index)}>
                    <h2>{question.question_en}</h2>
                    <span>
                      {selected === index ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </div>
                  <div
                    className={selected === index ? "content show" : "content"}
                  >
                    {question.answer_en}
                  </div>
                </div>
              ))}
            {i18n.language === "ur" &&
              questionsAndAnswers.map((question, index) => (
                <div key={question.id} className="accordion-item">
                  <div className="title" onClick={() => toggle(index)}>
                    <h2>{question.question_ur}</h2>
                    <span>
                      {selected === index ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </div>
                  <div
                    className={selected === index ? "content show" : "content"}
                  >
                    {question.answer_ur}
                  </div>
                </div>
              ))}
            {i18n.language === "tr" &&
              questionsAndAnswers.map((question, index) => (
                <div key={question.id} className="accordion-item">
                  <div className="title" onClick={() => toggle(index)}>
                    <h2>{question.question_tr}</h2>
                    <span>
                      {selected === index ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </div>
                  <div
                    className={selected === index ? "content show" : "content"}
                  >
                    {question.answer_tr}
                  </div>
                </div>
              ))}
            {i18n.language === "zh" &&
              questionsAndAnswers.map((question, index) => (
                <div key={question.id} className="accordion-item">
                  <div className="title" onClick={() => toggle(index)}>
                    <h2>{question.question_zh}</h2>
                    <span>
                      {selected === index ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </div>
                  <div
                    className={selected === index ? "content show" : "content"}
                  >
                    {question.answer_zh}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
