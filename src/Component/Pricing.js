import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Pricing(){
    return (
        <section id="pricing" >
        <Container>
        <h2 className='text-center mt-5'>PRICING & PLANS</h2>
        <p className='text-center text-black-50 mb-5'>-check our pricing & plans-</p>
        <Row>
            <Col sm={4} >
                <ul className='text-center'>
                    <li  className='heading' >
                        <h5>BASIC</h5>
                        <h3>£49</h3>
                    </li>
                    <li>Wireframing</li>
                    <li>Visual Design</li>
                    <li>5 pages</li>
                    <li>Free Hosting</li>
                    <li>Support & Assistance</li>
                    <li><button className='btn'>OPDER NOW</button></li>
                </ul>
            </Col>
            <Col sm={4}>
            <ul className='text-center active'>
                    <li  className='heading '>
                        <h5>PREMIUM</h5>
                        <h3>£149</h3>
                    </li>
                    <li>Wireframing</li>
                    <li>Visual Design</li>
                    <li>15 pages</li>
                    <li>Free Hosting</li>
                    <li>Support & Assistance</li>
                    <li><button className='btn'>OPDER NOW</button></li>
                </ul>
            </Col>
            <Col sm={4}>
            <ul className='text-center'>
                    <li className='heading'>
                        <h5>ULTIMATE</h5>
                        <h3>£349</h3>
                    </li>
                    <li>Wireframing</li>
                    <li>Visual Design</li>
                    <li>Unlimited pages</li>
                    <li>Free Hosting</li>
                    <li>Support & Assistance</li>
                    <li><button className='btn'>OPDER NOW</button></li>
                </ul>
            </Col>
        </Row>
        </Container>
        </section>
    )
}