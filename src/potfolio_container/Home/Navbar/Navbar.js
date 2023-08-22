import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Typical from "react-typical";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  nav- " data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#Profile">
            <h1>Portfolio</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Certification/skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  ContactMe
                </a>
              </li>
            </ul>
            <span class="navbar-text">
              <Typical
                steps={[
                  "Crafting seamless digital experiences, one stack at a time.",
                  3000,
                  "Transforming ideas into elegant and functional code, from front-end to back-end",
                  3000,
                ]}
                loop={Infinity}
                wrapper="csdeosaat"
              />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
