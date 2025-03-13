// import React from "react";
import { Navbar } from "./components/Navbar";
import { Footers } from "./components/Footer";
//import ContactUs from "./components/ContactUS"; 
//import faq from "./components/fAQ";
//import Blog from "./components/blog";
//import BecomeATeacher from "./components/becomeateacher";
//import Class from "./components/class";
//import AboutUs from "./components/aboutUs";
import sliderImg1 from './assets/caro1.jpg';
import sliderImg2 from './assets/sd2.png';
import sliderImg11 from './assets/sd3.png';
import sliderImg3 from './assets/ex (1).jpg';
import sliderImg4 from './assets/ex (2).jpg';
import sliderImg5 from './assets/ex (3).jpg';
import sliderImg6 from './assets/ex (4).jpg';
import sliderImg7 from './assets/ex (5).jpg';
import sliderImg8 from './assets/ex (6).jpg';
import sliderImg9 from './assets/ex (7).jpg';
import sliderImg10 from './assets/ex (8).jpg';
//import { Form } from "react-router-dom";


const App = () => {
  return (
    <>

      {/* ----------------------------- navbar include start----------------------------- */}
      <Navbar />
      {/* ----------------------------- navbar include end----------------------------- */}


      { /* ------------------------- carosel top home start ------------------------- */}
      <div className="CaroselBox">
        <div className="relative w-full h-full lineHide">
          <div className="carouselBoxContent">

            <div className="leftCaroContent">
              <h1 className="leftCaroContentText1"><span className="leftCaroContentText3">online</span> education with tuit<span className="leftCaroContentText3">o</span>ra</h1>
              <p className="leftCaroContentText2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente, cupiditate earum, corporis sunt optio reprehenderit vitae minus sed repellendus doloribus ipsum dolore deserunt voluptate iste repellat quasi, aliquam ea.</p>
            </div>

            <div className="rightCaroContent">
              <div className="SerchBoxHomeCaro">
                <input className="SerchBoxHomeCaroInput" type="text" placeholder="Search class , subject & Teachers" />
                <button className="SerchBoxHomeCaroBtn"><i className="fa-solid fa-search size-6"></i></button>
              </div>
            </div>

          </div>


          {/* swiper area  */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="w-full h-full bgGradintCaro">
                  <img src={sliderImg1} alt="fisrtSlideImg" className="swiperImg" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="w-full h-full bgGradintCaro">
                  <img src={sliderImg2} alt="fisrtSlideImg" className="swiperImg" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="w-full h-full bgGradintCaro">
                  <img src={sliderImg11} alt="fisrtSlideImg" className="swiperImg" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

        </div>
      </div>
      { /* ------------------------- carosel top home end ------------------------- */}


      {/* --------------------------- class section start --------------------------  */}
      <div className="ClaseSectionBoxHome">

        {/* headTopic  */}
        <div className="HedAllSection">
          <div className="HeadTopicBox">
            <h1 className="HeadTopicText1"><span className="HeadTopicText3">l</span>atest Class</h1>
            <p className="HeadTopicText2">our most recent class</p>
          </div>
        </div>

        <div className="ClasesBox">

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg3} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg4} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg5} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg6} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg7} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg8} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg9} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

          <div className="ClasesCard">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div className="ClasesCardImgBox">
                <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg10} alt="Card Image" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Card title
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a className="inline-flex items-center justify-center px-3 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-lg classCrtBtn gap-x-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" href="#">
                  View And Apply
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-center mt-12">
          <button className="showAllBtnClaeses">show all <i className="fa-solid fa-angle-right"></i></button>
        </div>

      </div>
      {/* --------------------------- class section start --------------------------  */}


      {/*  --------------------- best Learning Institutes start --------------------- */}
      <div className="bestTrendingInstitute">

        {/* headTopic  */}
        <div className="HedAllSection">
          <div className="HeadTopicBox">
            <h1 className="HeadTopicText1"><span className="HeadTopicText3">T</span>ending Institutes</h1>
            <p className="HeadTopicText2">best trending for learning institute</p>
          </div>
        </div>

        <div className="BoxTrendingInstitute">
          <div className="relative w-full h-full">

            <div className="swiper mySwiper2">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="ClasesCard">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <div className="ClasesCardImgBox">
                        <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg3} alt="Card Image" />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          company Name
                        </h3>
                        <h3 className="text-sm text-gray-500 dark:text-white">
                          Location name
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ClasesCard">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <div className="ClasesCardImgBox">
                        <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg3} alt="Card Image" />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          company Name
                        </h3>
                        <h3 className="text-sm text-gray-500 dark:text-white">
                          Location name
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ClasesCard">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <div className="ClasesCardImgBox">
                        <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg3} alt="Card Image" />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          company Name
                        </h3>
                        <h3 className="text-sm text-gray-500 dark:text-white">
                          Location name
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ClasesCard">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <div className="ClasesCardImgBox">
                        <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg3} alt="Card Image" />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          company Name
                        </h3>
                        <h3 className="text-sm text-gray-500 dark:text-white">
                          Location name
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ClasesCard">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <div className="ClasesCardImgBox">
                        <img className="w-full h-auto rounded-t-xl ClasesCardImg" src={sliderImg3} alt="Card Image" />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          company Name
                        </h3>
                        <h3 className="text-sm text-gray-500 dark:text-white">
                          Location name
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

      </div>
      { /* ----------------------- {best Learning Institutes end} ----------------------- */}

      { /* ----------------------- {category claseses start} ----------------------- */}
      <div className="categoryClasess">

        {/* headTopic  */}
        <div className="HedAllSection">
          <div className="flex flex-col items-center justify-center m-auto HeadTopicBox">
            <h1 className="w-full text-center HeadTopicText1"><span className="HeadTopicText3">B</span>est category</h1>
            <p className="w-full text-center HeadTopicText2">our clases</p>
          </div>
        </div>

        <div className="categoryClasess">
          <div className="categoryClasessBox">

            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">A/L</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">O/L</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 01</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 03</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 04</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 5</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 06</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 07</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 08</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>
            <div className="categoryClasesesCard">
              <h3 className="categoryClasesesCardText">Grade 09</h3>
              {/* <button className="categoryClasesesCardBtn">Show</button> */}
            </div>

          </div>
        </div>

      </div>
      { /* ----------------------- {category claseses end} ----------------------- */}







      {/* ----------------------------- footer include start----------------------------- */}
      <Footers />
      {/* ----------------------------- footer include end----------------------------- */}
    </>
  );
};

export default App;
