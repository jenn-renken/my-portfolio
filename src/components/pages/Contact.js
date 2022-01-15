import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    // function handleChange(e) {
    //     if(e.currentTarget.name === 'email') {
    //         const isValid = validateEmail(e.currentTarget.value);
    //         console.log(isValid);
    //         // is valid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             setErrorMessage('');
    //         } 
    //     } else {
    //         if (!e.currentTarget.value.length) {
    //             setErrorMessage(`${e.currentTarget.name} is required`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.currentTarget.name]: e.currentTarget.value });
    //     }
    // }

    useEffect(() => {
      validate()
    }, [formState])

    function validate() {
      let currentError = "";
      if (formState.name.length <= 0) {
        currentError+="name "
      }
      if (formState.email.length <= 0 || !validateEmail(formState.email)) {
        currentError+="email "
      }
      if (formState.message.length <= 0) {
        currentError+="message "
      }
      if (currentError.length <= 0) {
        setErrorMessage("")
      }
      else {
        setErrorMessage(currentError + "must be included")
      }
      
    }

    function updateName(event) {
      const name = event.currentTarget.value;
      setFormState({...formState, name })
    }

    function updateEmail(event) {
      const email = event.currentTarget.value;
      setFormState({...formState, email })
    }

    function updateMessage(event) {
      const message = event.currentTarget.value;
      setFormState({...formState, message })
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
                        <input type="text" className='input' placeholder="Name" defaultValue={name} onChange={updateName} />
                      </div>
                      
                  </div>
                  <div className='field'>
                      <label htmlFor="email" className='label'>Email address:</label>
                      <input className="input" type="email" placeholder="Email" defaultValue={email} onChange={updateEmail} />
                  </div>
                  <div className='field'>
                      <label htmlFor="message" className='label'>Message:</label>
                      <textarea  className="textarea is-medium" placeholder="Your message" rows={5} defaultValue={message} onChange={updateMessage}/>
                      <p>{errorMessage}</p>
                      <div className='buttons'></div>
                        <button className="button is-link is-light" type="submit">Submit</button>
          
                  </div>
              </form>
            </div>
        </section>
      
    );
}

export default Contact;