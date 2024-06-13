import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Togs India</h2>

        <p>Discover the art of expression through fashion, where every click tells your unique story.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @togsindia@gmail.com</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/shivam-jha-074838222">
        <CiLinkedin />
        </a>
        <a href="https://www.instagram.com/shivamjha010/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Shivamjha005">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
