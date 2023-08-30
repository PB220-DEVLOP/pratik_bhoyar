import React from "react";

export default function Footer_bot() {
  return (
    <div>
      <footer class="text-center text-white foot-bot-bg">
        {/* <!-- Grid container --> */}
        <div class="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section class="mb-4">
            {/* <!-- Facebook --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-github"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-linkedin"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-google"></i>
            </a>
            {/* 
      <!-- Instagram --> */}
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}
        {/* 
  <!-- Copyright --> */}
        <div class="text-center text-dark p-3 foot-bot-copyright ">
          © 2023 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">
            Portfolio.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
