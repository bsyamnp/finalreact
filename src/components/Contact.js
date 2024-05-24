import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: '',
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, error: '', success: false });
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormStatus({ loading: false, error: '', success: true });
        // Очистка формы после успешной отправки
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({ loading: false, error: 'Failed to send email. Please try again later.', success: false });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ loading: false, error: 'Failed to send email. Please try again later.', success: false });
    }
  };

  return (
    <main id="main">
      <div className="site-section pb-0 site-portfolio">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-md-6" data-aos="fade-up">
              <h2>Contact</h2>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <div className="col-md-12 mb-3">
                    {formStatus.loading && <div className="loading">Loading</div>}
                    {formStatus.error && <div className="error-message">{formStatus.error}</div>}
                    {formStatus.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
                  </div>
                  <div className="col-md-6 form-group">
                    <button type="submit" className="readmore d-block w-100">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 ml-auto order-2" data-aos="fade-up">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong className="d-block mb-1">Address</strong>
                  <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li className="mb-3">
                  <strong className="d-block mb-1">Phone</strong>
                  <span>+1 232 3235 324</span>
                </li>
                <li className="mb-3">
                  <strong className="d-block mb-1">Email</strong>
                  <span>youremail@domain.com</span>
                </li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
         
