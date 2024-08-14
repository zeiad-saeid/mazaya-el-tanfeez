/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Hero_1 from "../Hero_1/Hero_1";
import Footer_1 from "../Footer_1/Footer_1";
import Ourserves from "../Ourserves/Ourserves";

import Hero_2 from "../Hero_2/Hero_2";
import NumbersSection from "../NumbersSection/NumbersSection";

import Team from "../Team/Team";
import Recentposts from "../Recentposts/Recentposts";

//
import NewHero from "../NewHero/NewHero";
import NewServices from "../NewServices/NewServices";
import NewPortfolio from "../NewPortfolio/NewPortfolio";
import NewTeamMembers from "../NewTeamMembers/NewTeamMembers";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import NewClientsCards from "../NewClientsCards/NewClientsCards";

//
export default function Home() {
  return (
    <>
      {/* الجزء الاول من الصفحة الرئيسية     */}
      {/* <Hero_1 /> */}
      {/* New Version of Hero Section */}
      {/* <Serves/> */}
      <NewHero />
      <NewServices />
      <NewPortfolio />
      {/* <NewTeamMembers /> */}
      <FrequentlyAskedQuestions />
      {/* الخدمات */}
      {/* <Ourserves /> */}
      {/* الفريق */}
      {/* New Team Section will be made */}
      <NewClientsCards />
      {/* <Team /> */}
      {/* ارقام الانجازات و المشروعات */}
      {/* New Number Section will be made */}
      <NumbersSection />
      {/* عرض الصور */}
      {/* <Serves /> */}
      {/* احدث المنشورات */}
      {/* <Recentposts />  */}
      {/* الجزء الثانى من الصفحة الرئيسية */}
      <Hero_2 />
      {/* باقى footer */}
      {/* <Footer_1 />  */}
    </>
  );
}
