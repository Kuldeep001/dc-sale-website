import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import ImageWithSlogan from "./Components/ImageWithSlogan";
import SloganWithPic from "./Components/SloganWithPic";
import Rating from "./Components/Rating";
import Card from "./Components/Card";
import Expert from "./Components/Expert";
import Revenue from "./Components/Revenue";
import LogoSlider from "./Components/LogoSlider";
import stage from  "./Assets/stage.JPG";
import book from  "./Assets/book.jpeg";
// import styled from "styled-components";

function App() {
  const items = [
    {
      imgSrc: "https://business.ucf.edu/wp-content/uploads/sites/4/2020/11/VirtualSalesCall.jpg",
      heading: "Virtual Sales Training Prgoram",
      paragraph:
        "Our consulting and training has helped companies to turn around sluggish sales. Our training is customised as per the company needs and is rooted in human behavioural psychology that provides the sustainable results irrespective at what price you sell or whether you are newbie or an experienced person.",
      link: " https://dahiyaconsulting.com/lp",
    },
    {
      imgSrc: stage,
      heading: "Sales Structure Parnership",
      paragraph:
        "Accelerate your growth with a customised partnership! This partnership includes online coach and role playing for skill reinforcement, 1:1 work with Sachin Dahiya on your product marketing and sales (aligned with new model of selling), coaching support and alignment for your sales team and/or sales manager.",
      link: "https://dahiyaconsulting.com/demo",
    },
    {
      imgSrc: book,
      heading: "Sachin & Transform Your Sales Team",
      paragraph:
        "Inspire your team to action. Sachin Dahiya is a recognised sales consultant who has worked with countless business owners, entreperneurs how to go from getting average results in selling to becoming a multi-crore business.",
      link: "https://dahiyaconsulting.com/apply",
    },
  ];

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Home />
          <LogoSlider />
          <ImageWithSlogan />
          <Services />
          <SloganWithPic />

          <div className="Ecards">
            <Expert
              imageSrc1="https://media.licdn.com/dms/image/D4D12AQHqS8xuRD0P8w/article-cover_image-shrink_720_1280/0/1692605285173?e=2147483647&v=beta&t=yr6ubNp5HHeeeciUMt8qmoJ2o9FmWyioLUXk36ozK3E"
              imageSrc2="https://cdn-icons-png.flaticon.com/512/5074/5074341.png"
              imageSrc3="https://www.datocms-assets.com/16499/1580123686-top-5-edtech-challenges-startups-are-facing.jpg?auto=format"
              heading="WE Expert in"
              paragraph="Sass and Ed-tech"
            />
          </div>

          <div className="card1">
            <Card
              imageSrc="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2023/07/resource-How-to-Create-a-Sales-Plan-A-complete-Guide.jpg?w=1024"
              heading="DC Sales Program"
              paragraph="How to grow your Ed-Tech business to  &#8377;  1 Cr."
              linkText="Learn More"
              linkHref="#"
            />
            <Card
              imageSrc="https://i0.wp.com/theyellowspot.com/wp-content/uploads/2023/03/organic-flat-people-business-training-illustrated_23-2148913764-jpg.webp?fit=450%2C300&ssl=1"
              heading="DC X"
              paragraph="How to scale your Ed-tech business to  &#8377; 5 Cr annually and beyond fast profitably with less complexity. "
              linkText="Learn More"
              linkHref="#"
            />
          </div>

          <Rating />

          <div className="apprev">
            <Revenue
              mainHeading="Increase Revenue Now"
              mainParagraph="A revolutionary approach to selling, on the most innovative training solution in the world."
              items={items}
            />
          </div>

          <Contact />
        </Router>
      </div>
    </>
  );
}

export default App;

// 1346- 1347
