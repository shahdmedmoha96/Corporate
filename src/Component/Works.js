import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from ".././assets/images/img2.jpg";
import img2 from "../assets/images/img3.jpg";
import img3 from "../assets/images/img4.jpg";
import img4 from "../assets/images/img5.jpg";
import img5 from "../assets/images/img6.jpg";
import img6 from "../assets/images/img7.jpg";
import img7 from "../assets/images/img8.jpg";
import img8 from "../assets/images/img9.jpg";
import img9 from "../assets/images/img1.jpg";
import Pagination from 'react-bootstrap/Pagination';

export default function Works() {

  return (
    <section id="Work">
      <Container >
        <h2 className="text-center mt-5">OUR WORKS</h2>
        <p className="text-center text-black-50 mb-5">-our awesome works-</p>
        <Row>
          <Col sm={4}>
            <div className="box">
              <img src={img1} />
              <div className="text ">
                <h5>lonely Path</h5>
                <span>Web Design</span>
              </div>
            </div>
          </Col>
          <Col  sm={4}>
            <div className="box">
              <img src={img2} />
              <div className="text">
                <h5>photographer Girl</h5>
                <span>Brending</span>
              </div>
            </div>
          </Col>
          <Col  sm={4}>
            <div className="box">
              <img src={img3} />
              <div className="text">
                <h5>The Difference </h5>
                <span>Web Design</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col  sm={4}>
            <div className="box">
              <img src={img4} />
              <div className="text">
                <h5>Nature Patterns</h5>
                <span>Branding</span>
              </div>
            </div>
          </Col>
          <Col  sm={4}>
            <div className="box">
              <img src={img5} />
              <div className="text">
                <h5>The Difference</h5>
                <span>photographer</span>
              </div>
            </div>
          </Col>
          <Col  sm={4}>
            <div className="box">
              <img src={img6} />
              <div className="text">
                <h5>winter Sonata</h5>
                <span>Web Design</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col  sm={4}>
            <div className="box">
              <img src={img7} />
              <div className="text">
                <h5>lonely Path</h5>
                <span>Branding</span>
              </div>
            </div>
          </Col>
          <Col  sm={4}>
            <div className="box">
              <img src={img8} />
              <div className="text">
                <h5>Appreciation</h5>
                <span>photographer</span>
              </div>
            </div>
          </Col>
          <Col  sm={4}>
            <div className="box">
              {" "}
              <img src={img9} />
              <div className="text">
                <h5>Happy Days</h5>
                <span>Web Design</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row >
        <Pagination >
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

    </Pagination>
        </Row>
      </Container>
    </section>
  );
}
