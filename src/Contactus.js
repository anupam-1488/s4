import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Header } from './Header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Container className="contact-page my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="contact-title">How Can We Help You?</h2>
            <p className="contact-subtitle">We’re here to answer your questions and help you with our products.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h5 className="contact-form-title">Contact Us!</h5>
            <Form>
              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="I am interested in your products. Please contact me back on Email/Phone."
                  className="contact-textarea"
                />
              </Form.Group>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Name" required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Your E-mail" required />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formPhone">
                    <Form.Control type="text" placeholder="Phone" required />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="contact-button">
                Send Inquiry
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <Card className="mb-4 contact-card">
              <Card.Body>
                <Card.Title className="contact-card-title">Customer Care</Card.Title>
                <Card.Text>
                  <strong>Phone:</strong> +91 8886 331 331<br />
                  <strong>Email:</strong> diamondmedicare@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4 contact-card">
              <Card.Body>
                <Card.Title className="contact-card-title">Office Address</Card.Title>
                <Card.Text>
                  123 Diamond St.<br />
                  Vijayawada, Andhra Pradesh 520010<br />
                  India
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
