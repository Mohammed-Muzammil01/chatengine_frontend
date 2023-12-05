import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToCreateChatBot = (id) => {
    const createChatBotSection = document.getElementById(id);
    if (createChatBotSection) {
      createChatBotSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Contact Us</h6>
            <div className="call">
              <h3>
                <MdAddCall />
              </h3>
              <p>+91 6304439802</p>
            </div>
            <div className="call">
              <h3>
                <BiLogoGmail />
              </h3>
              <p>chatengine@gmail.com</p>
            </div>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <Link to="/usecase">Create</Link>
              </li>
              <li>
                <Link onClick={() => scrollToCreateChatBot("feature-section")}>
                  Feature
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToCreateChatBot("section-3")}>
                  How to use
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToCreateChatBot("section-4")}>
                  Buy
                </Link>
              </li>
              <li>
                <Link onClick={() => scrollToCreateChatBot("section-5")}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by ChatEngine
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a href="/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaMedium />
                </a>
              </li>
            </ul>
          </div>
          <div className="love">
            <h4>Made with ❤️</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
