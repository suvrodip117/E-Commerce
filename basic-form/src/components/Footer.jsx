import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import ContactMenu from "./sub-components/ContactMenu";

const Footer = () => {
  const [openContact, setOpenContact] = useState(false);

  return (
    <div className="footer-root-cont">
      <div className="about-cont">
        <h1>About</h1>
        <ul className="footer-list">
          <div>
            <li>
              <Link>About Us</Link>
            </li>
            {openContact && <ContactMenu />}
            <li
              id="contact_us_list_item"
              onClick={() => setOpenContact((prev) => !prev)}
            >
              Contact Us
            </li>
          </div>
        </ul>
      </div>
      <div className="seller-cont">
        <h1>Be Our Seller</h1>
        <ul className="footer-list" id="list_seller">
          <li>
            <Link>Sell A Game On Game Freak</Link>
          </li>
          <li>
            <Link>Advertise Your Game</Link>
          </li>
          <li>
            <Link>Bulk Supply Games</Link>
          </li>
        </ul>
      </div>
      <div className="help-cont">
        <h1>Need Help?</h1>
        <ul className="footer-list" id="list_help">
          <li>
            <Link>Manage Your Account</Link>
          </li>
          <li>
            <Link>Return Damaged Product</Link>
          </li>
          <li>
            <Link>Cancell An Order</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
