import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the CustomCard component
const CustomCard = ({ title, description,heading, subHeading1, subHeading2,subHeading3,subHeading4,subHeadin1Content,subHeadin2Content,subHeadin3Content,subHeadin4Content }) => {
  return (
    <Card
      style={{
        height: '100%',
        border: '2px solid rgba(75,30,133,0.5)',
        borderRadius: '1.5em',
        background: 'linear-gradient(to bottom right, rgba(75,30,133,1), rgba(75,30,133,0.01))',
        color: 'white',
        padding: '1em',
        backdropFilter: 'blur(12px)',
      }}
      className="d-flex flex-column align-items-start gap-3"
    >
      <Card.Body>
      <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: '1em'
          }}
        >
          <Card.Title
            style={{
              fontSize: '2em',
              fontWeight: '500',
              color: '#0cfabf',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '0.5em 2rem',
              borderRadius: '0.5em',
            }}
          >
            {title}
          </Card.Title>
        </div>
        <Card.Text style={{ fontSize: '0.85em' }}>
          <span style={{ fontWeight: 'bold', color: '#3bff4c' }}>Description:</span> {description}
        </Card.Text>
        <Card.Text style={{ fontSize: '0.85em' }}>
          {/* <span style={{ fontWeight: 'bold', color: 'rgb(225 255 0)' }}>{heading}</span><br /> */}
          <span style={{ fontWeight: 'bold', color: 'rgb(245 125 51)' }}>{subHeading1} </span> {subHeadin1Content}
        </Card.Text>
        <Card.Text style={{ fontSize: '0.85em' }}>
          <span style={{ fontWeight: 'bold', color: 'rgb(245 125 51)' }}>{subHeading2}</span> {subHeadin2Content}
        </Card.Text>
        <Card.Text style={{ fontSize: '0.85em' }}>
          <span style={{ fontWeight: 'bold', color: 'rgb(245 125 51)' }}>{subHeading3}</span> {subHeadin3Content}
        </Card.Text>
        <Card.Text style={{ fontSize: '0.85em' }}>
          <span style={{ fontWeight: 'bold', color: 'rgb(245 125 51)' }}>{subHeading4}</span> {subHeadin4Content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;