import { Button, ButtonGroup, Carousel } from "react-bootstrap"

import "./TopMain.css"

const TopMain = () => {
    return (
        <div className="TopMainElements">
            <div className="ShowSlidesButton">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">
                        <img src="/public/icons/Group 787.svg" alt="arrow" />
                    </Button>
                    <Button variant="secondary">
                        <img src="/public/icons/Group 786.svg" alt="arrow" />
                    </Button>
                </ButtonGroup>
            </div>
            <div className="Slides">
                <Carousel>
                    <Carousel.Item>
                        {/* <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default TopMain