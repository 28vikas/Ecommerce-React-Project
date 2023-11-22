// Contact.js

import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform any necessary actions, such as sending the form data to your server.
    
    // For this example, we'll just set isSubmitted to true to display the thank-you message.
    setIsSubmitted(true);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='main-contact'>
    <div className='contact-container'>
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <div>
          <p>Thanks for contacting us! We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>

          <button type="submit" className='contact-btn' >Submit</button>
        </form>
      )}
    </div>
    </div>
  );
}

export default Contact;
