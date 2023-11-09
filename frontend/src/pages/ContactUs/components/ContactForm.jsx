import { useState, useEffect } from "react";
import axios from 'axios'; 
import '../css/contactform.css';

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    question: "",
    requirements: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (e) => {
    e.preventDefault(); 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag = false; 
    Object.keys(formData).map(key => {
      if (formData[key] === '') {
        flag = true; 
      }
    });
    if (flag) {
      alert('All fields are required');
      return; 
    }
    axios.post('https://api-promoters-intl.onrender.com/contact-us', formData).then(result => {
      alert('request sent'); 
      console.log(result); 
    }).catch(err => {
      alert('something went wrong'); 
      console.log(err); 
    }); 
    setFormData(initialFormData);
  };
  
  return (
    <div className="contact-form-wrapper" id="contactForm">
      <h2>WE’D LOVE TO HEAR FROM YOU</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Full Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              placeholder="Email Address"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              placeholder="Phone Number"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <input
              placeholder="Question"
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              placeholder="Requierments"
              type="text"
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};




export default ContactForm;
