import React from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="md:flex items-center gap-12 text-black cursor-pointer">
        <a href="#" style={{ color: "#1090CB" }}>
          Home
        </a>
        <a href="#" className="transition">
          About us
        </a>
        <a href="#" className="transition">
          Services
        </a>
        <a href="#" className="transition">
          Blog
        </a>

        <button
          className="contact-btn px-6 py-2 rounded-lg text-white transition shadow-lg"
          style={{
            backgroundColor: "#1090CB",
            boxShadow: "0 4px 10px rgba(16,144,203,0.3)",
          }}
        >
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
