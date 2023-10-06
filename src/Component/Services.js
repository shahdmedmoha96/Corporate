import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Services(){
    return (
        <section id="Services">
        <Container>
        <h2 className='text-center mt-5'>OUR SERVICES</h2>
        <p className='text-center text-black-50 mb-5'>-services we provide-</p>
          <Row>
 <Col sm={4}>
      <div className='box'>
        <div className='icon'>
        <i className="fas fa-clone   "></i>
        </div>
       
          <h5>Responsive Design</h5>
          <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
       </div>
         
         
  </Col>
  <Col sm={4}>
     <div className='box'>
     <div className='icon'>
          <i className="fas fa-snowflake"></i>
          </div>
          <h5>Creative Design</h5>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
      </div>
</Col>
 <Col sm={4}>  
     <div className='box'>
     <div className='icon'>
            <i className="fas fa-plug"></i>
       </div>
          <h5>SEO Optimized</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
     </div>
 </Col>
      </Row>
          <Row>
      
<Col sm={4}>
      <div className='box'>
      <div className='icon'>
      <i className="fas fa-desktop"></i>
      </div>
            <h5>Retina Ready</h5>
            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
      </div>
</Col>
<Col sm={4}>
      <div className='box'>
      <div className='icon'>
      <i className="fas fa-trophy"></i>
      </div>
            <h5>Brower Compatibility</h5>
            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
      </div>
</Col>
<Col sm={4}>
      <div className='box'>
      <div className='icon'>
      <i className="fas fa-life-ring"></i>
      </div>
            <h5>Customer Support</h5>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
      </div>
</Col>
          </Row>
        </Container>
        </section>
      );
    
}