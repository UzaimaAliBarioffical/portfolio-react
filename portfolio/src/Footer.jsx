import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="Container">
    <footer className="bg-dark text-white py-4 text-center">
   
        <Row>
          <Col>
            <p className="mb-2">&copy; {new Date().getFullYear()} Uzaima Ali Bari. All rights reserved.</p>
            <div>
              <a href="https://github.com/UzaimaAliBarioffical" className="mx-2 text-white text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/uzaima-bari-8a9b352ab/" className="mx-2 text-white text-decoration-none" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:your.email@example.com" className="mx-2 text-white text-decoration-none">Email</a>
            </div>
          </Col>
        </Row>
      
    </footer>
  </div>
  );
};

export default Footer;
