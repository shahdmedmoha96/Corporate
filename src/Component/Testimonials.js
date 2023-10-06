import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
export default function Testimonials(){
    return (
        <section id="testimonials" className='mt-5'>
               <Container fluid>
               <h2 className='text-center  '>CLIENT TESTIMONIALS</h2>
        <p className='text-center text-white-50  '>-what client says about us-</p>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
       <blockquote>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.</p>
       <div className='head'>
        <span className='name'>-JOHN WILLS</span>
        <span className='designiation' >Accountant</span>
       </div>
       </blockquote>
      </Carousel.Item>
      <Carousel.Item>
       <blockquote >
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.</p>
       <div className='head'>
        <span className='name'>-ROCKY JOHNSON</span>
        <span className='designiation' >CEO</span>
       </div>
       </blockquote>
      </Carousel.Item>
      <Carousel.Item>
       <blockquote>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.</p>
       <div className='head'>
        <span className='name'>-JASMINE PERRY</span>
        <span className='designiation' >Accountant</span>
       </div>
       </blockquote>
      </Carousel.Item>
    </Carousel>
        </Container>
        </section>
      );
}