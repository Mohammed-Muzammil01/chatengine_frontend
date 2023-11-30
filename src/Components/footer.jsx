import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>Contact Us</h6>
                        <div className='call'>
                            <h3><MdAddCall /></h3>
                            <p>+91 6304439802</p>
                        </div>
                        <div className='call'>
                            <h3><BiLogoGmail /></h3>
                            <p>chatengine@gmail.com</p>
                        </div>
                        
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><Link to="/usecase">Create</Link></li>
                            <li><a href="#feature-section">Feature</a></li>
                            <li><a href="#section-3">How to use</a></li>
                            <li><a href="#section-4">Buy</a></li>
                            <li><a href="#section-5">About Us</a></li>

                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by ChatEngine

                        </p>

                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a href="/"><FaInstagram /></a></li>
                            <li><a href="/"><FaLinkedin /></a></li>
                            <li><a href="/"><FaMedium /></a></li>
                        </ul>
                    </div>
                    <div className='love'>
                        <h4>Made with ❤️</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
