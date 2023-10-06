import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
export default function Contact(){
    return (
        <section id="Contact" >
        <Container>
        <h2 className='text-center mt-5'>CONTACT US</h2>
        <p className='text-center text-black-50 mb-5'>-get connected with us-</p>
        <form>
        <Row className='mb-5'>
            <Col sm={4}>
        <Form.Control required type="text"className='mb-3' placeholder="Enter your Full Name" />
  
            </Col >
            <Col sm={4}>
        <Form.Control required type="email" className='mb-3' placeholder="Enter your Email Adress" />
  
            </Col>
            <Col sm={4}>
        <Form.Control required type="number" placeholder="Enter your Contact Number" />
  
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Control required  as="textarea" placeholder="Enter your Contact Message" rows={3} />
            </Col>
        </Row>
        <Row className='text-center p-5'>
            <Col>
            <Button type="submit">Submit</Button>
            </Col>
        </Row>
        </form>
        </Container>
        <div className='google-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33914.20772110479!2d31.413183169220403!3d30.55181145284574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7fb5bd8302bf9%3A0xa9f02ad232609972!2z2YPZgdixINmF2K3ZhdivINis2KfZiNmK2LQ!5e0!3m2!1sen!2seg!4v1696585666806!5m2!1sen!2seg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Container className='p-5 mt-5 text-center'>
            <Row>
                <Col sm={4}>
                    <i className="fas fa-envelope"> </i>
                    <span className='text-black-50 d-block'>hello@domain.com</span>
                 </Col>
                 <Col sm={4}>
                 <i className="fas fa-phone"></i>
                    <span className='text-black-50 d-block'>000-000-0000</span>
                 </Col>
                 <Col sm={4}>
                 <i className="fas fa-map-marker-alt"></i>
                    <span className='text-black-50 d-block'>London, United Kingdom</span>
                 </Col>
            </Row>


        </Container>
        </section>
    )}