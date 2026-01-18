import React from "react";
import { Link } from "react-router-dom";
import "../../styles/subcomponent-style/ContactMenu.css";

const ContactMenu = () => {
  return (
    <div className="contact-menu-root-cont">
      <div className="list-contact-cont">
        <div className="square"></div>
        <ul id="list_contact_1" className="list-contact">
          <li>
            <Link>Facebook</Link>
          </li>
          <li>
            <Link>GitHub</Link>
          </li>
          <li>
            <Link>LinkedIn</Link>
          </li>
          <li>
            <Link>Instagram</Link>
          </li>
        </ul>
        <hr id="contactHr" />
        <ul id="list_contact_2" className="list-contact">
          <li>Email: ssjmukherjee@gmail.com</li>
          <li>Phone Number: +918902473706</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMenu;
