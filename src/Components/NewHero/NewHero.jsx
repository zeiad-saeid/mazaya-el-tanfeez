
import HeroSlider, { Slide, Overlay } from "hero-slider";
import { useTranslation } from "react-i18next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewHero.scss";

import images from "../../images";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowLeft class="arrows" style={{color:"white"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowRight class="arrows" style={{color:"white"}}/>
    </div>
  )
}
const NewHero = () => {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  const slides = [
    {
      id: 1,
      title: `${t("new_hero.title1")}`,
      description: `${t("new_hero.description1")}`,
      button1: `${t("navbar.contact_us")}`,
      button2: `${t("navbar.about_us")}`,
      image: images.loaders,
    },
    {
      id: 2,
      title: `${t("new_hero.title2")}`,
      description: `${t("new_hero.description2")}`,
      button1: `${t("navbar.contact_us")}`,
      button2: `${t("navbar.about_us")}`,
      image: images.men_doing_concrete,
    },
  ];

  return (
    <div className="slider-container newhero">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slider-slide">
            <div
              className="slider-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slider-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="slider-buttons">
                  <Link to="/contact" className="slider-button primary">
                    {slide.button1}
                  </Link>
                  <Link to="/about" className="slider-button secondary">
                    {slide.button2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              <div
                className="slider-content"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slider-overlay">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <div className="slider-buttons">
                    <a href="#" className="slider-button primary">
                      {slide.button1}
                    </a>
                    <a href="#" className="slider-button secondary">
                      {slide.button2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 
    <HeroSlider
        // slideAnimation="left_to_right"
        // orientation="horizontal"
        // initialSlide={1}
        // onBeforeChange={(previousSlide, nextSlide) =>
        //   console.log("Yes", previousSlide, nextSlide)
        // }
        // onChange={(nextSlide) => console.log("onChange", nextSlide)}
        // onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        // style={{
        //   backgroundColor: "rgba(0, 0, 0, 0.33)",
        // }}
        // settings={{
        //   slidingDuration: 250,
        //   slidingDelay: 100,
        //   shouldAutoplay: true,
        //   shouldDisplayButtons: true,
        //   autoplayDuration: 5000,
        //   height: "40vh",
        // }}
        height={"100vh"}
        autoplay={{
          autoplayDuration: 3000,
          autoplayDebounce: 0,
        }}
        controller={{
          initialSlide: 1,
          slidingDuration: 600,
          // slidingDelay: 200,
          // onSliding: (nextSlide) =>
          //   console.log("onSliding(nextSlide): ", nextSlide),
          // onBeforeSliding: (previousSlide, nextSlide) =>
          //   console.log(
          //     "onBeforeSliding(previousSlide, nextSlide): ",
          //     previousSlide,
          //     nextSlide
          //   ),
          // onAfterSliding: (nextSlide) =>
          //   console.log("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay>
          <div className="new__overlay-content">
            <h1>
              {" "}
              {t("hero.company")} {t("hero.company_name")}
            </h1>
            <p>{t("hero.subtitle")} </p>
            <div className="contact-btns">
              <Link to={"/about"}>{t("hero.about_us")}</Link>
              {/* <a
                style={{ marginLeft: 20, marginRight: 20 }}
                href="tel:0555019360"
              >
                اتصل بنا
              </a> 
              </div>
          </div>
        </Overlay>
        <Slide
          // style={}
          background={{
            backgroundImage: images.loaders,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: images.men_doing_concrete,
            backgroundAttachment: "fixed",
            backgroundImageAlt:{}
            // `${t('hero.alt_first_slide')}`
          }}
        />
        <Slide
          background={{
            backgroundImage: images.mockup,
            backgroundAttachment: "fixed",
          }}
        />
      </HeroSlider>
    
     */}
    </>
  );
};

export default NewHero;
