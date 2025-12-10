import React from "react";
import heroImage from "../../assets/hero.svg";
import sideimg from "../../assets/side-img.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
        {/* Left Content */}
        <div className="z-10">
          <h1 className="hero-title text-4xl md:text-4xl">
            Experienced <span className="mobile">mobile and web</span>{" "}
            applications and website builders measuring.
          </h1>

          <p className="hero-text mt-6 text-sm md:text-base max-w-lg">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of projects. We
            develop mobile applications for Android & iOS.
          </p>

          <div className="mt-8 flex space-x-4">
            <button className="hero-btn-primary">Contact us</button>
            <button className="hero-btn-outline">View more</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center">
          <img src={heroImage} alt="Hero" className="relative top-[-100px]" />
        </div>
      </div>
      {/* sideimg */}
      <img src={sideimg} alt="Side" className="absolute top-[27%] right-0" />
    </section>
  );
};

export default Hero;
