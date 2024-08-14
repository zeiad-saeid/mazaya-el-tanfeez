// Number.js
import React, { useState, useContext } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";
import { SettingsContext } from "../SettingsContext";
// import "./Number.css";
import "./NumbersSection.scss";

export default function Number() {
  const [counterOn, setCounterOn] = useState(false);
  const { t } = useTranslation();
  const settings = useContext(SettingsContext);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="numbersection">
          <div className="numbersection-overlay"></div>
          <div className="nums lastnums">
            <div className="num">
              <h4>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_1}
                    duration={2}
                    delay={1}
                  />
                )}
              </h4>
              <p>{t("numbers.achievements")}</p>
            </div>
          </div>
          <div className="nums">
            <div className="num">
              <h4>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_2}
                    duration={2}
                    delay={1}
                  />
                )}
              </h4>
              <p>{t("numbers.satisfied_clients")}</p>
            </div>
          </div>
          <div className="nums">
            <div className="num">
              <h4>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_3}
                    duration={2}
                    delay={1}
                  />
                )}
              </h4>
              <p>{t("numbers.completed_projects")}</p>
            </div>
          </div>
          <div className="nums">
            <div className="num">
              <h4>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_4}
                    duration={2}
                    delay={1}
                  />
                )}
              </h4>
              <p>{t("numbers.employees")}</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="background-container">
        <div className="background-images"></div>
        <div className="contents">
          <div className="grid-container">
            <div className="col separator0">
              <p className="fs-2 fw-bold">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_1}
                    duration={2}
                    delay={1}
                  />
                )}
              </p>
              <p className="fs-4 fw-bolder">{t("numbers.achievements")}</p>
            </div>

            <div className="col separator0">
              <p className="fs-2 fw-bold">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_2}
                    duration={2}
                    delay={1}
                  />
                )}
              </p>
              <p className="fs-4 fw-bolder">{t("numbers.satisfied_clients")}</p>
            </div>

            <div className="col separator0">
              <p className="fs-2 fw-bold">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_3}
                    duration={2}
                    delay={1}
                  />
                )}
              </p>
              <p className="fs-4 fw-bolder">
                {t("numbers.completed_projects")}
              </p>
            </div>

            <div className="col">
              <p className="fs-2 fw-bold">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={settings.number_4}
                    duration={2}
                    delay={1}
                  />
                )}
              </p>
              <p className="fs-4 fw-bolder">{t("numbers.employees")}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
