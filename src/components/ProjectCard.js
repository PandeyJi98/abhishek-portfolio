
import { Col } from "react-bootstrap";
import { Card, Button } from 'react-bootstrap';
import "./newCss.css";

export const ProjectCard = ({ title, description, imgUrl, handleTabChange }) => {
  const nameShortener = (text, index) => {
    if (text.length > index) {
        return text.substring(0, index) + "...";
    }
    return text;
}
  return (
    <Col size={12} sm={6} md={4} >
      {/* <div className="proj-imgbx">
        <img src={imgUrl} className="imgClass" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div> */}
      <Card className="custom-card">
      <div className="custom-card-img-container">
      <div className="img-popup-wrapper">
            <Card.Img variant="top" src={imgUrl} className="custom-card-img" />
          </div>
      </div>
      <Card.Body>
        <Card.Title className="custom-card-title">
          {title}
        </Card.Title>
        <Card.Text className="card-Text-color">
         {nameShortener(description, 115)}
        </Card.Text>
        <button className="card-button" onClick={() => handleTabChange('second')}>
            Read More
          </button>
      </Card.Body>
    </Card>
    </Col>
  )
}
