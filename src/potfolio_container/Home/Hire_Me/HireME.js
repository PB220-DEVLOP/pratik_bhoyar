import React from "react";

export default function HireME() {
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
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body  ">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Recipient:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Enetr Your Email Or Contact Number"
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="message-text" className="col-form-label ">
                    Message:
                  </label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer bg-dark ">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-warning ">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      <script>
   </script>
    </>
    
  );
}
