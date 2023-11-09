import ContactForm from "./components/ContactForm";
import ContactUsInfo from "./components/ContactUsInfo";
import Map from "./components/Map";
import './css/contact.css'; 
const Contact = () => {

  return (
    <div >
        <div className="form-wrapper">
          <ContactUsInfo/> 
          <ContactForm/>
        </div>
    </div>
  );
};

export default Contact;
