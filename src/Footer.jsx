import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <a href="#">
            <FacebookOutlinedIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <YouTubeIcon />
          </a>
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>
                <a href="#">Audio Description</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Legal Notices</a></li>
              <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Netflix Shop</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Ad Choices</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>
        </div> <br /> <br />
        <div className="service_code">
          <p><a href="#">Service Code</a></p>
        </div>
        <div className="copy-right">
          <p><a href="#">&copy; 1997-2024 Netlfix, Inc.</a></p>
          <h3>
            Built By: <a href="https://yaredlbekele.com/">Yared LB</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
