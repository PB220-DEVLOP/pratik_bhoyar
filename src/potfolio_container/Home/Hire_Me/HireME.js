import React from "react";

export default function HireME() {
  return (
    <>
      <button
        type="button"
        class="btn btn-warning "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        Hire Me
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  ">
          <div class="modal-content bg-dark ">
            <div class="modal-header bg-dark ">
              <h1 class="modal-title fs-5  " id="exampleModalLabel">
                Send Me Your Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body  ">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Recipient:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Enetr Your Email Or Contact Number"
                  />
                </div>
                <div class="mb-3 ">
                  <label for="message-text" class="col-form-label ">
                    Message:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer bg-dark ">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-warning ">
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
