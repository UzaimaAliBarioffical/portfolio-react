import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="my-5 p-4 border rounded shadow">
      <h2 className="mb-4">Contact Me</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder=" Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your Message" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
