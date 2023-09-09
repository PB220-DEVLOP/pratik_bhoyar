import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Not01 from "../../Notification/Not01";

function HireME() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a2jp1nm",
        "template_6j36hbi",
        form.current,
        "NuefVlgXicCVcJ4qA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sucessfully send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        Hire Me
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  ">
          <div className="modal-content bg-dark ">
            <div className="modal-header bg-dark ">
              <h1 className="modal-title fs-5  " id="exampleModalLabel">
                Send Me Your Details
              </h1>
              <button
                type="button"
                className="btn-close bg-light "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body  ">
              <form
                ref={form}
                onSubmit={sendEmail}
                className=" p-5 text-light  "
              >
                <label className="form-label ">Name</label>
                <input type="text" name="user_name" className="form-control " />
                <br />
                <label className="form-label ">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control "
                />
                <br />
                <label className="form-label "> Message</label>
                <textarea name="message" className="form-control" />
                <br />
                <div className="container-fluid d-flex  ">
                 <Not01/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script></script>
    </>
  );
}
export default HireME;
