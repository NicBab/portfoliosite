import React from "react";
import "./Intro.css";
import myPic from "../../image/17037709-5A5F-41F2-A024-3EF7A2E76EA1_1_105_c.jpeg";
import { Hamburger } from "../compIndex";

const Intro = () => {
  return (
    <div className="intro">
      <Hamburger />
      <div className="introLeft">
        <div className="introLeftWrapper">
          <h2 className="introHello">Hello, My name is</h2>
          <h1 className="introName">Nick Babineaux</h1>
          <div className="introTitle">
            <div className="introTitleWrapper">
              <div className="introTitleItem">Fullstack</div>
              <div className="introTitleItem">Web</div>
              <div className="introTitleItem">UI/UX</div>
            </div>
          </div>
          <div className="introDescription">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </div>
        </div>
      </div>
      <div className="introRight">
        {/* <div className="introImgBackground"></div> */}
        <img src={myPic} alt="" className="introImg" />
      </div>
    </div>
  );
};

export default Intro;
