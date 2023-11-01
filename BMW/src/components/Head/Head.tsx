import Carousel from 'react-bootstrap/Carousel';
import NavBar from '../NavBar/NavBar';

function UncontrolledExample() {
    return (
    <>
    <NavBar/>
    <Carousel>
        <Carousel.Item>
            <img
                src="/src/assets/img/shutterstock_472592110.png"
                width="100%"
                height="100%"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
        </Carousel.Item>
    </Carousel>
    </>
    );
}

export default UncontrolledExample;