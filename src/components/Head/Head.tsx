import Carousel from 'react-bootstrap/Carousel';
import "./Head.css"
import head1 from '../../assets/img/head1.png';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={head1} alt="head1" className='d-block w-100' style={{ height: "90vh" }} />
        <Carousel.Caption>
          <h3>BMW APPROVED USED CARS.</h3>
          <p>Search, reserve and buy your Approved Used BMW - all online.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;