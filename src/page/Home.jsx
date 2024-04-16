import React, { useEffect } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../style/animate.css";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Animate
import AOS from "aos";
import "aos/dist/aos.css";

import home2 from "../assets/homepage4.jpg";
import home3 from "../assets/homepage3.jpg";
import home4 from "../assets/homepage2.jpg";
import home1 from "../assets/homepage6.jpg";
import newArrival from "../assets/new-arrival.jpeg";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
//
const Home = () => {
  const images = [
    "https://outfitters.com.pk/cdn/shop/products/F0153108901_lowersM_1.jpg?v=1680153890",
    "https://outfitters.com.pk/cdn/shop/products/E1225-108-902_4_5f4a51fd-50fc-427f-8703-cbb8aad7a9de.jpg?v=1706790810",
    "https://outfitters.com.pk/cdn/shop/products/E0772-401-901_1_57913fcb-6220-4902-9d36-7cd1d995c6c3.jpg?v=1706791098",
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        className="homepage-main flex flex-col"
        style={{ width: "100%", background: "#212121" }}
      >
        <div style={{ width: "100%", height: "100vh" }}>
          <Swiper
            cssMode={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide className="relative">
              <img
                src={home4}
                className="animate-jump animate-duration-1000 animate-delay-500"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="overlay-home absolute bottom-20 left-20 text-left flex flex-col items-start gap-4"
                style={{ width: "40%" }}
              >
                <h1 className="text-shadow animate-fade-up animate-duration-1000 animate-delay-500">
                  NEW COLLABORATION
                </h1>
                <p className="text-shadow animate-fade-up animate-duration-1000 animate-delay-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  exercitationem dolores voluptates libero nemo unde earum
                  delectus! Neque explicabo doloribus vel eligendi. Ducimus
                  eaque ratione consequuntur distinctio minima, velit minus?
                </p>
                <button className="my-4 animate-bounce animate-duration-1000 animate-delay-500">
                  GO TO EXPLORE
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={home2}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="absolute bottom-20 left-20 text-left flex flex-col items-start gap-4"
                style={{ width: "40%" }}
              >
                <h1 className="text-shadow">SALE UPTO 50%</h1>
                <p className="text-shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  exercitationem dolores voluptates libero nemo unde earum
                  delectus! Neque explicabo doloribus vel eligendi. Ducimus
                  eaque ratione consequuntur distinctio minima, velit minus?
                </p>
                <button className="my-4 animate-bounce animate-duration-1000 animate-delay-500">
                  GO TO SHOPPING
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={home3}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="absolute bottom-20 left-20 text-left flex flex-col items-start gap-4"
                style={{ width: "40%" }}
              >
                <h1 className="text-shadow">ESSENTIALS</h1>
                <p className="text-shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  exercitationem dolores voluptates libero nemo unde earum
                  delectus! Neque explicabo doloribus vel eligendi. Ducimus
                  eaque ratione consequuntur distinctio minima, velit minus?
                </p>
                <button className="my-4 animate-bounce animate-duration-1000 animate-delay-500">
                  GO TO SHOPPING
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src={home1}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className="absolute bottom-20 left-20 text-left flex flex-col items-start gap-4"
                style={{ width: "40%" }}
              >
                <h1 className="text-shadow">NEW CATEGORY</h1>
                <p className="text-shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  exercitationem dolores voluptates libero nemo unde earum
                  delectus! Neque explicabo doloribus vel eligendi. Ducimus
                  eaque ratione consequuntur distinctio minima, velit minus?
                </p>
                <button className="my-4 animate-bounce animate-duration-1000 animate-delay-500">
                  GO TO SHOPPING
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* new collection */}
        <div
          className="new-col flex gap-10 py-10 px-20 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
          data-taos-offset="300"
          style={{ width: "100%", height: "auto" }}
        >
          <div
            className="sect_1 flex flex-col items-start gap-8 justify-center p-10"
            data-aos="fade-right"
            style={{ width: "40%", background: "#5c524c" }}
          >
            <h1 className="font-bold">NEW ARRIVALS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              molestias iusto nihil.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              iusto libero aliquid quia molestias veritatis doloribus, pariatur
              cumque perspiciatis eaque laborum, assumenda quibusdam dolore
              quaerat officia illum sunt eveniet saepe?
            </p>
            <button>Explore Here</button>
          </div>
          <div
            className="sect_2 "
            style={{ width: "60%" }}
            data-aos="fade-left"
          >
            <img
              src={newArrival}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fit",
              }}
            />
          </div>
        </div>
        {/*  */}
        <div
          className="homepage pt-16 pb-48 text-center m-auto px-72 flex flex-col gap-4 text-gray-100"
          style={{ background: "#3b3b3b", width: "100%" }}
        >
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="4000"
          >
            WE HAVE SPRING SUMMER COLLECTION NOW
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="4000"
            className="px-48"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            perferendis beatae laudantium dolorum numquam blanditiis.
          </p>
        </div>
        {/* image */}
        <div style={{ width: "100%", height: "100%" }}>
          <div
            className="relative m-auto flex justify-center items-center"
            style={{ width: "80%" }}
          >
            <div className="flex items-center gap-10 justify-center m-auto absolute -top-36">
              <div style={{ width: "100%" }} className="homepage text-center">
                <img
                  src={cat1}
                  alt=""
                  style={{
                    objectFit: "fit",
                    width: "100%",
                    aspectRatio: "2/3",
                    height: "500px",
                  }}
                />
              </div>
              <div style={{ width: "100%" }} className="homepage text-center">
                <img
                  src={cat3}
                  alt=""
                  style={{
                    objectFit: "fit",
                    width: "100%",
                    aspectRatio: "2/3",
                    height: "500px",
                  }}
                />
              </div>
              <div style={{ width: "100%" }} className="homepage text-center">
                <img
                  src={cat2}
                  alt=""
                  style={{
                    objectFit: "fit",
                    width: "100%",
                    aspectRatio: "2/3",
                    height: "500px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* new content */}
        <div
          className="new py-28 text-center m-auto px-72 flex flex-col gap-4 text-gray-100"
          style={{ width: "100%", marginTop: "355px", background: "#5c524c" }}
        >
          <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            NEW COLLECTION FROM OUR COLLABORATION WITH ITZY
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="px-48"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            perferendis beatae laudantium dolorum numquam blanditiis.
          </p>
        </div>
        {/* about us */}
        <div className="main-about">
          <div className="about">
            <div className="about-content" data-aos="zoom-in">
              <h1>ABOUT</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                corporis aspernatur eveniet blanditiis voluptatum quasi esse
                dignissimos, sed sapiente veniam voluptatibus ratione eum
                consequuntur laborum nesciunt quaerat! Magnam, sint ducimus.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        {/* new */}
        {/*  */}
      </div>
    </>
  );
};

export default Home;
