import React from 'react'

import logo from '../assets/whitelogo.png'
import Download from './Download';
import { FiYoutube } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <Download />
      <section className="container footer" id='footer' aria-label='footer'>
        <div className="footer-down">
          <div className="footer-left">
          <img src={ logo } alt="" className="logo" />
          <p>Experience seamless financial management with features designed for modern life.</p>
          <div className="socials">
            <a href="#"><FaXTwitter /></a>
            <a href="#"><SlSocialLinkedin /></a>
            <a href="#"><BsInstagram /></a>
            <a href="#"><FiYoutube /></a>
          </div>
          </div>

        <div className="footer-mid">
        <div className="footer-center">
            <h2>Quick Links</h2>
            
              <a href="">Features</a>
              <a href="">Support</a>
              <a href="/about">About Us</a>
           
          </div>

          <div className="footer-center">
            <h2>Resources</h2>
            
              <a href="">Help Center</a>
              <a href="">Developer API</a>
              <a href="/about">Partnership Programs</a>
            
          </div>
        </div>

          <div className="footer-right">
            <h2>Contact Information</h2>
           
              <a href=""><i><CiMail /></i>support@kronopay.app</a>
              <a href=""><i><FiPhone /></i>+234 708 0901 011</a>
              <a href="/about"><i><CiLocationOn /></i>No 12 the Main Street Ikeja, Lagos, Nigeria.</a>
          
          </div>
        </div>

        <div className="footer-copy">
          <p>Copyright 2025 Kronopay. All Rights Reserved</p>
          <div className="legal">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>

      </section>
    </footer>
  )
}

export default Footer