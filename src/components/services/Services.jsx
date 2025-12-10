import React from "react";
import icon1img from "../../assets/icon1.svg";
import icon2img from "../../assets/icon2.svg";
import icon3img from "../../assets/icon3.svg";
import icon4img from "../../assets/icon4.svg";
import sideimg from "../../assets/side-img2.png";

const Services = () => {
  const services = [
    {
      icon: <img src={icon1img} alt="Web Application" className="w-6 h-6" />,
      title: "Web Application",
      bg: "bg-purple-100",
    },
    {
      icon: <img src={icon3img} alt="SEO" className="w-6 h-6" />,
      title: "SEO",
      bg: "bg-green-100",
    },
    {
      icon: <img src={icon2img} alt="AR/VR Solutions" className="w-6 h-6" />,
      title: "AR/VR Solutions",
      bg: "bg-blue-100",
    },
    {
      icon: (
        <img src={icon4img} alt="Mobile Applications" className="w-6 h-6" />
      ),
      title: "Mobile Applications",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="relative">
      <img src={sideimg} alt="Side" className="absolute top-[-415px] left-0" />

      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 hover:shadow-lg transition rounded-xl cursor-pointer bg-white"
            >
              <div className={`p-4 rounded-xl ${s.bg}`}>{s.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{s.title}</h3>
                <p className="text-xs text-gray-400">Lorem Ipsum is simply</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
