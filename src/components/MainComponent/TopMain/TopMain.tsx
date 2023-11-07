import { Button, ButtonGroup } from "react-bootstrap";
import "./TopMain.css"
// import Slides from "./Slides";




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
            <div className="Slides">slides
                {/* <Slides /> */}
            </div>
        </div>
    )
}

export default TopMain