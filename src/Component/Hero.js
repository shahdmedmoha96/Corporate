import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
export default function Hero(){
    var heroData = [
        {
          id: 1,
          image: require('../assets/images/img-hero1.jpg'),
          title: 'The perfect design for your website',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.google.com'
        },
        {
          id: 2,
          image: require('../assets/images/img-hero2.jpg'),
          title: 'Start Your Future Financial Plan',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.facebook.com'
        },
        {
          id: 3,
          image: require('../assets/images/img-hero3.jpg'),
          title: 'Enjoy the Difference',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.twitter.com'
        }
      ]
    return (
        <section id="home" className='hero-black'>
        <Carousel data-bs-theme="dark"  className='text-white'>
            {
                heroData.map(hero => {
                   return(
                    <Carousel.Item  key={hero.id}>
                    <img
                      className="d-block w-100"
                      src={hero.image}
                      alt={"slide"+ hero.id}
                    />
                    <Carousel.Caption className='text-white'>
                      <h1>{hero.title}</h1>
                      <p>{hero.description}</p>
                      <Button href={hero.link} variant="danger">LEARN MORE <i className="fas fa-chevron-right"></i></Button>
                      
                    </Carousel.Caption>
                  </Carousel.Item>
                   ) 
                })
            }
        
         
        </Carousel>
        </section>
      );
}