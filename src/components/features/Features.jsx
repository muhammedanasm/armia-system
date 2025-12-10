import React from "react";
import featurimg from "../../assets/feature.svg";
import featureimg2 from "../../assets/feature2.svg";
import featureimg3 from "../../assets/feature3.svg";
import happyimg from "../../assets/happy 1.svg";
import "./features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="text-center mb-16">
        <h2 className="features-title">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="features-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24 relative">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center feature-item">
          <div>
            <div className="icon-feature flex items-center gap-4 mb-4">
              <div className="left_section">
                <img src={happyimg} alt="Happy Icon" />
              </div>
              <div className="right_section">
                <p>Lorem Ipsum is simply dummy text</p>
                <small>Lorem Ipsum is simply dummy text</small>
              </div>
            </div>
            <h3>
              Lorem Ipsums dfgd
              <span>is simply dummy text of the printing.</span>
            </h3>
            <p>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
          </div>
          <div className="relative">
            <img className="feature-image" src={featurimg} alt="Mobile App" />
          </div>
        </div>

        {/* Feature 2 (Reversed) */}
        <div className="grid md:grid-cols-2 gap-12 items-center feature-item">
          <div className="order-2 md:order-1 relative">
            <img
              className="feature-image"
              src={featureimg2}
              alt="Web Builder"
            />
            <div className="feature-circle-blue"></div>
          </div>
          <div className="order-1 md:order-2">
            <div className="icon-feature flex items-center gap-4 mb-4">
              <div className="left_section">
                <img src={happyimg} alt="Happy Icon" />
              </div>
              <div className="right_section">
                <p>Lorem Ipsum is simply dummy text</p>
                <small>Lorem Ipsum is simply dummy text</small>
              </div>
            </div>
            <h3>
              Lorem Ipsum <span>is simply dummy text of the printing.</span>
            </h3>
            <p>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center feature-item">
          <div>
            <div className="icon-feature flex items-center gap-4 mb-4">
              <div className="left_section">
                <img src={happyimg} alt="Happy Icon" />
              </div>
              <div className="right_section">
                <p>Lorem Ipsum is simply dummy text</p>
                <small>Lorem Ipsum is simply dummy text</small>
              </div>
            </div>
            <h3>
              Lorem Ipsum <span>is simply dummy text of the printing.</span>
            </h3>
            <p>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects.
            </p>
          </div>
          <div className="relative">
            <img className="feature-image" src={featureimg3} alt="VR Headset" />
            <div className="feature-circle-purple"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
