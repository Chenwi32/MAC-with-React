import React from "react";
import OurStrengths from "../OurStrengths/OurStrengths";
import "./AboutUs.css";
import Intro from "./Intro/Intro";

function AboutUs() {
  return (
    <div className="about__container container">
      <h1 className="about__title">
        <span className="m">
          <em>M</em>
        </span>
        <span className="a">A</span>friculture
      </h1>

      <Intro />

      <p className="about__p">
        <span className="first__char">M</span>Africulture which basically means
        <strong> M</strong>odern
        <strong> A</strong>frican culture is a new trending business brand with
        a primary aim of promoting the modernization of African creative arts
        and craft, and market these great designs to the world
      </p>

      <h2 className="title3">Our Mission</h2>

      <p className="about__p">
        <span className="first__char">T</span>here are a lot of creative minds
        in Africa who create a lot of great designs which deserve to be on great
        platforms like Amazon, e-bay, Alibaba, etc, but they are unable to get
        their designs to these platforms because it's just far beyong their
        reach. That is where MAfriculture comes in.
      </p>

      <p className="about__p">
        MAfriculture is here to provide the platform for the great creative but
        less priviledge people to be able to show their work to the world and
        sell them for what they are worth.
      </p>

      <p className="about__p">
        While we strive to help designers sell their products, we also strive to
        encourage a balance. What does this mean? We believe in the business
        paradigm that quick turn over is better than delaid costly sales, so we
        are striving to get our designers on the same page with this, so that
        even relatively average income people can also be able to purchase items
        from the platform, because at the end of the day, that will sum up all
        together to make something great.
      </p>

      <p className="about__p">
        <span className="first__char">T</span>hrough this endeavor, African
        Tradition, Arts, and Culture of aesthetics will be much more exposed and
        well appreciated. We will ensure customer policies and transactions
        through the best value for money backed by quality and satisfaction in
        all of our packages.
      </p>

      <h2 className="title3">Our Vision</h2>

      <p className="about__p">
        <span className="first__char">M</span>Africulture is a start up with
        limited resources gearing toward becoming the <strong>largest</strong>{" "}
        indigenous e-Commerce portal in Africa.
      </p>

      <h2 className="title3">Our Values</h2>

      <ul>
        <li className="list-items">
          Integrity in dealing honestly with stakeholders
        </li>
        <li className="list-items">
          Ensuring Economic Vitality and Financial Sustainability
        </li>
        <li className="list-items">
          Consistent Delivery of Quality Services and Connecting Community
          Members
        </li>
        <li className="list-items">
          Providing secure investment opportunities to customers, career growth
          opportunities, and potential partners to responsible employees.
        </li>
      </ul>

      <OurStrengths />
    </div>
  );
}

export default AboutUs;
