import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Made with 💖 by MIZERO Eloi</p>
      <p className="icons">
        <Link href="https://twitter.com/EloiMizero">
          <AiOutlineTwitter className="pointer" />
        </Link>

        <Link href="https://github.com/Mizero-eloi">
          <AiOutlineGithub className="pointer" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
