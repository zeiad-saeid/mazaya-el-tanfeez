import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./NewClientsCards.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowLeft class="arrows" style={{ color: "white" }} />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowRight class="arrows" style={{ color: "white" }} />
    </div>
  );
}

const Cards = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [teamsData, setTeamsData] = useState([]);

  const getTeamsData = async () => {
    try {
      let result = await axios.get("https://gayekapp.com/mzaya/api/teams");
      setTeamsData(result.data.teams);
      // console.log(result.data.teams);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    getTeamsData();
  }, []);

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // return (
  // <div className="app__cards">
  //   <div className="section__title">
  //     <h2 className="">{t("teams_section.title")}</h2>
  //     <p>{t("teams_section.short_description")}</p>
  //     <div className="divider"></div>
  //   </div>
  //   <motion.div
  //     ref={carousel}
  //     className="carousel"
  //     whileTap={{ cursor: "grabbing" }}
  //   >
  //     <motion.div
  //       drag="x"
  //       dragConstraints={{ left: 0, right: width }}
  //       className="inner-carousel"
  //     >
  //       {teamsData.map((card) => {
  //         return (
  //           <motion.div className="item" key={card.id}>
  //             <div className="item-content">
  //               <h2>{card.name_ar}</h2>
  //               <p>{card.sub_title_ar}</p>
  //             </div>
  //             <img src={card.image} alt={card.title} />
  //           </motion.div>
  //         );
  //       })}
  //     </motion.div>
  //   </motion.div>
  // </div>
  // );

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   nextArrow: <SampleNextArrow to="next" />,
  //   prevArrow: <SamplePrevArrow to="prev" />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  // return (
  //   <>
  //     <div className="newclientscards slider-container">
  //       <Slider {...settings}>
  //         {teamsData.map((card) => {
  //           return (
  //             <div className="item" key={card.id}>
  //               <div className="item-content">
  //                 <h2>{card.name_ar}</h2>
  //                 <p>{card.sub_title_ar}</p>
  //               </div>
  //               <div className="item-image">
  //                 <img src={card.image} alt={card.title} />
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </Slider>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="section__title teamssection">
        <h2 className="">{t("teams_section.title")}</h2>
        <p>{t("teams_section.short_description")}</p>
        <div className="divider"></div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 6,
          },
          // when window width is >= 640px
          740: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {teamsData.map((card) => {
          return (
            <SwiperSlide className="newclientscard" key={card.id}>
              {/* <div className="newclientscard-content">
                <h2>{card.name_ar}</h2>
                <p>{card.sub_title_ar}</p>
              </div>
              <div className="newclientscard-image">
                <img src={card.image} alt={card.title} />
                
              </div> */}
              <div className="profile-card">
                <img
                  src={card.image}
                  alt={card.name_ar}
                  className="profile-image"
                />
                <div className="profile-info">
                  <h2>{card.name_ar}</h2>
                  <p>{card.sub_title_ar}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Cards;
