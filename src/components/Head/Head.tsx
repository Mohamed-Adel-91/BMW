// import Carousel from "react-bootstrap/Carousel";
import "./Head.css";
import headImg1 from "../../assets/img/headImg1.png";

function Head() {
    return (
        <div>
            <div>
                <img
                    src={headImg1}
                    alt="slide1"
                    className="d-block w-100"
                    style={{ height: "90vh" }}
                />
            </div>
            <div className="title1">
                <h3>BMW APPROVED USED CARS.</h3>
                <p>
                    Search, reserve and buy your Approved Used BMW - all online.
                </p>
            </div>
        </div>
    );
}

export default Head;
