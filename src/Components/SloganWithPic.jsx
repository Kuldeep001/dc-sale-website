import React from "react";
import "./SloganWithPic.css";
import sachin from "../Assets/Sachin dc.png";

const SloganWithPic = () => {
  return (
  
      <div className="slogan-with-image">
        <div className="para">
          <h1>About me</h1>
         <li>
         I am an Indian entrepreneur living in New Delhi. I've been involved
            in coaching and consulting business for over 5 years now, and have
            created several lucrative businesses till date - TLC Masterminds
            (working as Sr. Vice President and mentoring more than 100
            coaches/healers/consultants over 12 different countries).
            </li>
            <li>
            Back in
            2019, I was tired of undervaluing my services, posting reels and
            videos, writing blog posts that nobody read, and was not having a
            proper framework to get leads and close sales.
            </li>
            <li>
            Nothing worked and I
            was in this overwhelming stage that I didn't know how to escape.
            Since then, I have worked with esteemed Ed-tech, Saas companies in
            India in generating over 1 Cr - 5 Cr per month with their
            businesses. 
            </li>
      <li>
      Now my mission is to empower more people like yourself
      to realise similar or greater results.
      </li>
         </div>

        <div className="image">
          <img className="img" src={sachin} alt="img" />
        </div>
      </div>
  
  );
};

export default SloganWithPic;
