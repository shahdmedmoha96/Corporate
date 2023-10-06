import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image1 from ".././assets/images/img1.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function About(){
    return(
        <section  id="About" >

    <Container  className='pt-5 pb-5'>
        <h2 className='text-center'>ABOUT US</h2>
        <p className='text-center text-black-50 mb-5'>-learn more about us-</p>
        <Row>
            <Col sm={6}> < Image className='mb-4' src={image1}  /></Col>
            <Col sm={6}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                 <ul>
                          <li>
                            <h5>HTML / CSS / JAVASCRIPT</h5>
                               <ProgressBar variant="danger" now={80} label={`${80}%`} />
                           </li>
                           <li>
                             <h5>RESPONSIVE</h5>
                                <ProgressBar variant="danger" now={95} label={`${95}%`} />
                           </li>
                           <li>
                             <h5>  PHOTOSHOP  </h5>
                                 <ProgressBar variant="danger" now={60} label={`${60}%`} />
                            </li>
      
    
                </ul>
</Col>
        </Row>

    </Container>

        </section>
    )
}