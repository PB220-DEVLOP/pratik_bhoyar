import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
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
    <div className='container bg-dark  text-light p-4 mt-5  '>
      <h1 className='text-center'>Contact Us</h1>
    <form ref={form} onSubmit={sendEmail} >
      <label className='form-label '>Name</label>
      <input type="text" name="user_name" className='form-control '/>
      <label className='form-label '>Email</label>
      <input type="email" name="user_email" className='form-control ' />
      <label className='form-label '> Message</label>
      <textarea name="message"  className='form-control' />
      <input type="submit" value="Send" className='btn-outline-warning  '/>
    </form>
    </div>
  );
};