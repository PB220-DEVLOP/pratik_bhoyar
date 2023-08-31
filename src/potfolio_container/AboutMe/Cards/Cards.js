import React from "react";

// IMAGES IMPORTED
import { BootstrapIcon, CssIcon, HtmlIcon, JsIcon, LibraryIcon, PhpIcon, SqlIcon } from "../../../Assits/Skills-Icon/iconexport";
import "./Card.css";

export default function Cards() {
  return (
    <div>
      <div className="card mb-3 ">
        <div className="row">
          <div className="col-md-4 ">
            <div className=" container  about-img"></div>
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h1 className="card-title text-warning">
                Greetings! I'm Pratik Bhoyar
              </h1>
              <div className="card-text">
                <p>
                  I'm a passionate and results-driven Full Stack Developer with
                  an unwavering enthusiasm for exploring new avenues of
                  opportunity. My expedition through the captivating landscape
                  of web development has honed my skills in both front-end and
                  back-end realms, making me a versatile player in the field.
                </p>

                <p>
                  Venturing beyond the ordinary, I have cultivated a deep
                  proficiency in harnessing the power of MongoDB, Node.js, and
                  the dynamic Bootstrap framework. These tools, like strokes of
                  a painter's brush, enable me to artistically blend
                  functionality and design, resulting in digital experiences
                  that captivate and engage users.
                </p>

                <p>
                  My purpose is unequivocal: I strive to craft solutions that
                  transcend the ordinary, seamlessly uniting the worlds of
                  aesthetic elegance and high-octane performance. The chasm
                  between design and functionality is where I thrive, creating
                  bridges that elevate user experiences to unparalleled heights.
                </p>

                <p>
                  My quest is not simply for projects, but for collaborative
                  partnerships that ignite innovation. I am eager to embark on a
                  voyage with visionary minds, where we coalesce ideas and
                  expertise to birth revolutionary digital phenomena. Imagine
                  the synergy of your ideas with my technical prowess—an
                  amalgamation that could redefine the digital realm.
                </p>

                <p>
                  Together, we have the potential to weave digital tapestries
                  that resonate with users on profound levels. Don't hesitate to
                  reach out. Let's orchestrate brilliance together, transcending
                  conventions and sculpting the extraordinary. Your vision is
                  the compass, and my skills are the tools; let's map a course
                  to innovation that was previously uncharted.
                </p>
              </div>
              <hr className="border-4 " />
              <h4>Skills :-</h4>
              <div className="d-flex justify-content-between wrap   ">
                <img src={HtmlIcon} alt="HTML LOGO" />
                <img src={CssIcon} alt="CSS LOGO" />
                <img src={JsIcon} alt="JS LOGO" />
                <img src={BootstrapIcon} alt="BOOTSTRAP LOGO" />
                <img src={LibraryIcon} alt="REACTJS LOGO" />
                <img src={SqlIcon} alt="SQL LOGO" />
                <img src={PhpIcon} alt="PHP LOGO" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
