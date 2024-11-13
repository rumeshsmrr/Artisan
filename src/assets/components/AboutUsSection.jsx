import { motion, useAnimationFrame } from "framer-motion";
import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

const AboutUsSection = () => {
  return (
    <section className="text-center h-fit py-8 px-8 lg:px-32 w-screen bg-primary011">
      <div className="w-full flex flex-col lg:flex-row  justify-between lg:items-end">
        <div className="w-fit h-fit flex flex-col justify-start items-start">
          <div className="flex justify-start gap-2 items-center">
            <h3 className="text-secondary011 font-poppinsRegular tracking-wide text-sm mb-2">
              About Us
            </h3>
            <svg width="200" height="2" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="#d9dada"
                strokeWidth="2"
              />
            </svg>
          </div>

          <h1 className="text-6xl w-[350px] md:w-[390px] text-left mt-2 text-textPrimary011  font-stylishBold mb-4 text-wrap">
            Bringing Heritage to Modern Spaces.
          </h1>
        </div>
        <p
          className="text-textPrimary011 pt-2 font-poppinsBold text-xl mb-12 lg:w-[600px] text-end lg:text-start"
          style={{ textIndent: "5rem" }}
        >
          At Artisan Antique, we are dedicated to sourcing you the finest
          precolonial and colonial Sri Lankan antique furniture. These timeless
          furniture with uncompromised quality is set to enhance your
          contemporary living spaces in a truly Sri Lankan style.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-start md:justify-between items-center  w-full mt-9 lg:mt-36">
        <div className="text-center  w-[200px] ">
          <h2 className="text-[100px] text-textPrimary011 font-poppinsLight">
            <AnimatedCounter from={0} to={900} duration={2} />
            <span className="text-textSecondary011">+</span>
          </h2>
          <p className="text-textSecondary011 text-sm ">
            Products that we have created and sold on the market
          </p>
        </div>

        <div className="text-center w-[200px] mt-8 md:mt-0 flex flex-col items-center">
          <h2 className="text-[100px] text-textPrimary011 font-poppinsLight flex items-center justify-center">
            <AnimatedCounter from={0} to={20000} duration={2} />
            <span className="text-textSecondary011">+</span>
          </h2>
          <p className="text-textSecondary011 text-sm  ">
            Happy and loyal customers buy our products
          </p>
        </div>

        <div className="text-center w-[200px] mt-8 md:mt-0 items-center">
          <h2 className="text-[100px] text-textPrimary011 font-poppinsLight">
            <AnimatedCounter from={0} to={98} duration={2} />
            <span className="text-textSecondary011">%</span>
          </h2>
          <p className="text-textSecondary011 text-sm  ">
            Customers who have purchased will come back again
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
