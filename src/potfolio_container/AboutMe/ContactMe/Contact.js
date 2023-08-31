import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

  function ContactUs ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2jp1nm', 'template_6j36hbi', form.current, 'NuefVlgXicCVcJ4qA')
      .then((result) => {
          console.log(result.text); 
          console.log("sucessfully send")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container mt-3  ">
      <h1 className="text-center text-warning ">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className=' p-5 text-light  '>
        <label className="form-label ">Name</label>
        <input type="text" name="user_name" className="form-control " /><br/>
        <label className="form-label ">Email</label>
        <input type="email" name="user_email" className="form-control " /><br/>
        <label className="form-label "> Message</label>
        <textarea name="message" className="form-control" /><br/>
        <div className='container-fluid d-flex  '>
        <input type="submit" value="Send" className="btn btn-outline-warning m-auto justify-content-center  "/>
        </div>
      </form>
    </div>
  );
};
export default ContactUs