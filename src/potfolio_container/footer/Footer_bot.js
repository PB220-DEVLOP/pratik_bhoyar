import React from "react";

export default function Footer_bot() {
  return (
    <div>
      <footer className="text-center text-white foot-bot-bg">
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-github"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-google"></i>
            </a>
            {/* 
      <!-- Instagram --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}
        {/* 
  <!-- Copyright --> */}
        <div className="text-center text-dark p-3 foot-bot-copyright ">
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Portfolio.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
