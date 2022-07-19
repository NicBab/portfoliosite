import React from "react";
import "./About.css";
import ME from "../../image/AD9772C5-CF2B-41C2-9C6A-7D97D7EC8D35_1_105_c.jpeg";
import LSU from "../../image/16 LSU 2101 NICHOLAS .pdf-1.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <div className="cardBackground" />
        <div className="aboutCard">
          <img src={ME} alt="" className="aboutImg" />
        </div>
      </div>
      
      <div className="aboutRight">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="aboutDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
        <img src={LSU} alt="" className="a-award-img" />
        <div className="a-award-texts">
        <h4 className="a-award-title">International Design Awards 2021</h4>
        <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;