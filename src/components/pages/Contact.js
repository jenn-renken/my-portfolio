import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // is valid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
          <div className="container is-max-desktop">
            <div className='title is-4 has-text-link'>Use this form to send me a message!</div>   
              <form id="contact-form" onSubmit={handleSubmit}>
                  <div className='field'>
                      <label htmlFor='name'className='label'>Name:</label>
                      <div className='control'>
                        <input type="text" className='input' placeholder="Name" defaultValue={name} onBlur={handleChange} />
                      </div>
                  </div>
                  <div className='field'>
                      <label htmlFor="email" className='label'>Email address:</label>
                      <input className="input" type="email" placeholder="Email" defaultValue={email} onBlur={handleChange} />
                  </div>
                  <div className='field'>
                      <label htmlFor="message" className='label'>Message:</label>
                      <textarea  className="textarea is-medium" placeholder="Your message" rows={5} defaultValue={message} onBlur={handleChange} />
                      {errorMessage && (
                          <div>
                              <p className='error-text'>{errorMessage}</p>
                          </div>
                      )}
                      <div className='buttons'></div>
                        <button className="button is-link is-light" type="submit">Submit</button>
          
                  </div>
              </form>
            </div>
        </section>
      
    );
}

export default Contact;