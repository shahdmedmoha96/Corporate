import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

export default function Footer(){
    const [showtopbtn , setshowbtn]=useState(false)
    useEffect(()=>{
        window.onscroll =function(){
            if(window.scrollY>400){
                setshowbtn(true)
            }else{
                setshowbtn(false)
            }
        }
    },[])
 
function topFunction() {
window.scrollTo({
    top:0,
    behavior: "smooth"
})

}
    return(
        <Container fluid>
            <p>© 2022 Corporate. All Right Reserved.</p>
            <div className='icons'>
                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                {
                  showtopbtn && (<div className='go-top' onClick={topFunction}>TOP</div>)  
                }
        </Container>
    )
}