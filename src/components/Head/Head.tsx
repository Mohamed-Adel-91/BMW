import Carousel from "react-bootstrap/Carousel";
import "./Head.css";
import headImg1 from "../../assets/img/headImg1.png";
import headImg2 from "../../assets/img/headImg2.jpg";
import headImg3 from "../../assets/img/headImg3.jpeg";

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={headImg1} alt="slide1" className="d-block w-100" />
                <Carousel.Caption>
                    <h3>BMW APPROVED USED CARS.</h3>
                    <p>
                        Search, reserve and buy your Approved Used BMW - all
                        online.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={headImg2} alt="slide2" className="d-block w-100" />
                <Carousel.Caption>
                    <h3>BMW APPROVED USED CARS.</h3>
                    <p>
                        Search, reserve and buy your Approved Used BMW - all
                        online.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={headImg3} alt="slide3" className="d-block w-100" />
                <Carousel.Caption>
                    <h3>BMW APPROVED USED CARS.</h3>
                    <p>
                        Search, reserve and buy your Approved Used BMW - all
                        online.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
