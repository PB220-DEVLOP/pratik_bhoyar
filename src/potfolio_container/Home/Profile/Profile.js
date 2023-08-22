import React from "react";
import Typical from "react-typical"; 
import "./Profile.css";
import HireME from "../Hire_Me/HireME";

export default function Profile() {
  return (
    <div className="profile-container Profile">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/pratik-bhoyar-1b1176198/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/PB220-DEVLOP">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/pra_tik220/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.instagram.com/pra_tik220/">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.instagram.com/pra_tik220/">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <spam className="highlighted-text">Pratik</spam>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
            <Typical
            steps={[
                "Frountend dev",
                1000,
                "BackEnd Dev",
                1000,
                "Bootstrap Framework",
                1000,
                "PHP",
                1000,
                "MongoDB",
                1000,
            ]}
            loop={Infinity}
            wrapper="csdeosaat"
            />
              </h1>
              <span className='profile-role-tagline'>
              Transforming Ideas into Scalable Web Solutions
              </span>
            </span>
          </div>
          <div className="profile-options">
           <HireME/>
            <a href='pbresume.pdf' download={'pbresume.pdf'} >
            <button className="btn highlighted-btn text-bg-secondary ">get resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
