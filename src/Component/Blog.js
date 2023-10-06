import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/images/blog1.jpg";
import img2 from "../assets/images/blog2.jpg";
import img3 from "../assets/images/blog3.jpg";
export default function Blog() {
  return (
    <section id="blog">
      <Container>
        <h2 className="text-center mt-5">LATEST FROM BLOG</h2>
        <p className="text-center text-black-50 mb-5">
          -get our latest news from blog-
        </p>
        <Row>
          <Col sm={4} className="bg-white p-3 box">
            <img src={img1} />
            <div className="text">
              <span>15 Nov 2016</span>
              <h5>Coffee Lovers</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, asperiores eaque quibusdam eum quod cum nesciunt
              </p>
              <button className="btn ">
                LEARN MORE <i className="fas fa-chevron-right"></i>{" "}
              </button>
            </div>
          </Col>
          <Col sm={4} className="bg-white p-3 box ">
            <img src={img2} />
            <div className="text">
              <span>15 Nov 2016</span>
              <h5>Coffee Lovers</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, asperiores eaque quibusdam eum quod cum nesciunt
              </p>
              <button className="btn ">
                LEARN MORE <i className="fas fa-chevron-right"></i>{" "}
              </button>
            </div>
          </Col>
          <Col sm={4} className="bg-white p-3 box ">
            <img src={img3} />
            <div className="text">
              <span>15 Nov 2016</span>
              <h5>Coffee Lovers</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, asperiores eaque quibusdam eum quod cum nesciunt
              </p>
              <button className="btn ">
                LEARN MORE <i className="fas fa-chevron-right"></i>{" "}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
