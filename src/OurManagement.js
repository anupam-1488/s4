import React, { useState } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Header } from './Header';

const ManagementTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: 'S. VairaMuthu',
      role: 'Founder & Managing Director',
      image: 'Images/trail.jpg',
      details: 'With over 20 years of experience, S. VairaMuthu leads the company with a vision to revolutionize the medical disposables industry.',
    },
    {
      name: 'S. Sankar',
      role: 'R&D and Factory Management',
      image: 'Images/trail.jpg',
      details: 'S. Sankar manages the research, development, and manufacturing processes with state-of-the-art technology and precision.',
    },
    {
      name: 'V. Padmavathi',
      role: 'Accounts & Overseas Marketing Director',
      image: 'Images/trail.jpg',
      details: 'V. Padmavathi oversees international markets and ensures smooth financial operations with her expertise in overseas marketing.',
    },
    {
      name: 'S. Mahalakshmi',
      role: 'Domestic Marketing Director',
      image: 'Images/trail.jpg',
      details: 'S. Mahalakshmi heads domestic marketing initiatives, connecting the company’s products to hospitals across the country.',
    },
  ];

  return (
    <div>
      <Header />
      <Container className="text-center my-5">
        <h2 className="managementh2 mb-5" style={{ color: '#0077b6' }}>Our Management Team</h2>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col 
              key={index} 
              md={3} 
              sm={6} 
              className="mb-5"
              onMouseEnter={() => setHoveredMember(index)} 
              onMouseLeave={() => setHoveredMember(null)}
              style={{ position: 'relative' }}  // for positioning the detail card
            >
              <div className="team-member">
                <Image 
                  src={member.image} 
                  roundedCircle 
                  fluid 
                  className="managementimg mb-3" 
                  style={{ width: "150px", height: "150px", objectFit: 'cover', border: '4px solid #0077b6' }} 
                />
                <h5 style={{ color: '#005073', fontWeight: '600' }}>{member.name}</h5>
                <p className="managementp" style={{ color: '#333', fontStyle: 'italic' }}>{member.role}</p>
              </div>
              
              {/* Display the detail card on hover */}
              {hoveredMember === index && (
                <Card 
                  className="hover-card"
                  style={{ 
                    position: 'absolute', 
                    top: '100%', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    zIndex: 10, 
                    width: '200px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
                  }}
                >
                  <Card.Body>
                    <Card.Text>{member.details}</Card.Text>
                  </Card.Body>
                </Card>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManagementTeam;
