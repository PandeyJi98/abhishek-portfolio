import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [buttonText, setButtonText] = useState('Send');

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  console.log('Test Variable:', process.env.REACT_APP_TEST_VAR);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const templateId = process.env.REACT_APP_TEMPLATE_ID;
const serviceId = process.env.REACT_APP_SERVICE_ID;
const publicId = process.env.REACT_APP_PUBLIC_ID;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicId,
      template_params: {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        to_name: 'Abhishek Pandey',
        message: message,
        phone: phone
      }
    };

    setButtonText('Sending...');

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res);
      toast.success("Message sent successfully, Thanks for connecting");
      setEmail('');
      setFirstName('');
      setLastName('');
      setMessage('');
      setPhone('');
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while sending the message, please try again later");
    } finally {
      setButtonText('Send');
    }
  }

  return (
    <section className="contact" id="connect">
      <Toaster />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="text" 
                        value={firstName} 
                        placeholder="First Name" 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="text" 
                        value={lastName} 
                        placeholder="Last Name" 
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="email" 
                        value={email} 
                        placeholder="Email Address" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="tel" 
                        value={phone} 
                        placeholder="Phone No." 
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea 
                        rows="6" 
                        value={message} 
                        placeholder="Message" 
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
