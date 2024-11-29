import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Header } from './Header';

const events = [
  {
    date: 'APR 6 2024',
    title: 'Medicall 37th Edition, Hyderabad April 2024',
    location: 'Hitex Exhibition Hyderabad HITEX Exhibition Center, Hitex Road, Izzathnagar, Kohtaguda, Hyderabad',
    description: 'Join us at MEDICALL 2024, 37th Edition at HITEX Exhibition Center, showcasing the latest medical innovations.',
    image: 'Images/trail.jpg' // Replace with actual image path
  },
  {
    date: 'FEB 16 2024',
    title: 'Medicall 36th Edition, MUMBAI, FEB 2024',
    location: 'NESCO Center, Western Express Highway, Goregaon (East), Mumbai 400063',
    description: 'Don’t miss Medicall Expo, 36th Edition in Mumbai. Explore cutting-edge healthcare technologies.',
    image: 'Images/trail.jpg' // Replace with actual image path
  }
];

const EventPage = () => {
  return (
    <div>
      <Header />
      <Container className="event-container my-5">
        <h2 className="text-center mb-4 event-title">Our Latest Events</h2>
        {events.map((event, index) => (
          <Row key={index} className="event-row align-items-center mb-5">
            <Col md={2} className="text-center">
              <div className="date-box">
                <span className="month">{event.date.split(' ')[0]}</span>
                <span className="day">{event.date.split(' ')[1]}</span>
                <span className="year">{event.date.split(' ')[2]}</span>
              </div>
            </Col>
            <Col md={6}>
              <h4 className="event-title mb-2">{event.title}</h4>
              <p className="event-location mb-2"><strong>Location:</strong> {event.location}</p>
              <p className="event-description">{event.description}</p>
            </Col>
            <Col md={4}>
              <Card className="event-card">
                <Card.Img variant="top" src={event.image} className="event-image" />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default EventPage;
