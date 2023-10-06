import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import img1 from ".././assets/images/team1.jpg";
import img2 from "../assets/images/team2.jpg";
import img3 from "../assets/images/team3.jpg";
import img4 from "../assets/images/team4.jpg";
import img5 from "../assets/images/team5.jpg";
import img6 from "../assets/images/team6.jpg";
import img7 from "../assets/images/team7.jpg";
import img8 from "../assets/images/team8.jpg";   
export default function Teams(){
    return(
        <section id="teams">
                    <Container>
        <h2 className='text-center mt-5'>OUR TEAMS</h2>
        <p className='text-center text-black-50 mb-5'>-some of our experts-</p>
      
        <Row>
          <Col sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
                <div className='image'>
                <img src={img1} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
             
              <div className="text ">
                <h5>Gabriel Hart</h5>
                <span >Web Design</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
          
          <Col  sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
            <div className='image'>
                <img src={img2} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
              <div className="text p-5 p-sm-1  text-center text-sm-start">
                <h5>photographer Girl</h5>
                <span>Brending</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
          <Col  sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
            <div className='image'>
                <img src={img3} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
              <div className="text">
                <h5>The Difference </h5>
                <span>Web Design</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
          <Col  sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
            <div className='image'>
                <img src={img4} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
              <div className="text">
                <h5>Happy Days</h5>
                <span>Web Design</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col  sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
            <div className='image'>
                <img src={img5} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
              <div className="text">
                <h5>Nature Patterns</h5>
                <span>Branding</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
          <Col  sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
            <div className='image'>
                <img src={img6} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
              <div className="text">
                <h5>The Difference</h5>
                <span>photographer</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
          <Col  sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
            <div className='image'>
                <img src={img7} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
              <div className="text">
                <h5>winter Sonata</h5>
                <span>Web Design</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
          <Col  sm={3}>
            <div className="box p-5 p-sm-1  text-center text-sm-start">
            <div className='image'>
                <img src={img8} />
                <div className='icons'>
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>
              <div className="text">
                <h5>Appreciation</h5>
                <span>photographer</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
        </section>
    )
}