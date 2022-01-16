import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

  
    function handleChange(e) {
      if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage("Your email is invalid.");
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage("");
          }
        }
      }
  
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
  
    function handleBlank(e) {
      if (e.target.name === "Name" || e.target.name === "Message") {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
  
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }

    return (
        <section>
          <div className="container is-max-desktop">
            <div className='title is-4 has-text-link'>Use this form to send me a message!</div>   
              <form id="contact-form">
                  <div className='field'>
                      <label htmlFor='Name' className='label'>Name:</label>
                      <div className='control'>
                        <input 
                          type="text" 
                          className='input' 
                          placeholder="Name" 
                          defaultValue={name} 
                          onBlur={handleBlank} 
                          name="Name"
                        />
                      </div>
                      
                  </div>
                  <div className='field'>
                      <label htmlFor="email" className='label'>Email address:</label>
                      <input 
                        className="input" 
                        type="email" 
                        placeholder="Email" 
                        onBlur={handleChange}
                        name='email'
                      />
                  </div>
                  <div className='field'>
                      <label htmlFor="Message" className='label'>Message:</label>
                      <textarea  
                        className="textarea is-medium" 
                        name='Message'
                        placeholder="Your message" 
                        rows={5} 
                        defaultValue={message} 
                        onBlur={handleBlank}
                      />
               </div>
                  {errorMessage && (
                      <div>
                          <p className="error-text">{errorMessage}</p>
                      </div>
                  )}
                      <div className='buttons'>
                        <button className="button is-link is-light" type="submit">Submit</button>
                      </div>
              </form>
            </div>
        </section>
      
    );
}

export default Contact;