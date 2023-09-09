import React from "react";
import './Achivements.css'
// import certificate
import fullstack from "./../../../Assits/Certification/full-stack-certificate.png";
import google from "./.././../../Assits/Certification/google-certificate.png"
import aws from "./.././../../Assits/Certification/devtown certificate.png"
// import devtown from "./.././../../Assits/Certification/devtown certificate.png"

export default function Achivements() {
  return (
    <div className=" container-fluid" id="certificate">
        <h1 className="text-warning text-center   mb-4 "> My Certification</h1>
      <div className="row">
        <div className="col-md-4 ">
          <div className="card cretificate text-light ">
            <div className="card-body hover ">
              <div className="card-header ">
                <img
                  src={fullstack}
                  alt="fullstack certificate"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="card-footer ">
                <p>
                  I am thrilled to share that I have successfully completed my
                  Full Stack Development journey from "Rode to Code"! 🚀 It has
                  been an incredible 6-7 months of intense learning, practical
                  application, and building real-time projects that have truly
                  honed my skills in this dynamic field.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card bg-dark cretificate text-light   ">
            <div className="card-body hover ">
              <div className="card-header ">
                <img
                  src={google}
                  alt="fullstack certificate"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="card-footer ">
                <p>
                  I am thrilled to share that I have successfully completed my
                  Full Stack Development journey from "Rode to Code"! 🚀 It has
                  been an incredible 6-7 months of intense learning, practical
                  application, and building real-time projects that have truly
                  honed my skills in this dynamic field.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card bg-dark cretificate text-light  ">
            <div className="card-body hover ">
              <div className="card-header ">
                <img
                  src={aws}
                  alt="fullstack certificate"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="card-footer ">
                <p>
                  I am thrilled to share that I have successfully completed my
                  Full Stack Development journey from "Rode to Code"! 🚀 It has
                  been an incredible 6-7 months of intense learning, practical
                  application, and building real-time projects that have truly
                  honed my skills in this dynamic field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
