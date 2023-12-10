import "./Filter.css";
import { Row, Col, Button } from "reactstrap";
import { FormControl, FormSelect } from "react-bootstrap";

function Filter() {
    return (
        <Row className="cont">
            <Col>
                <FormControl className="col" placeholder="Postcode/Location" />
            </Col>
            <Col>
                <FormSelect className="col" placeholder="Nationwide">
                    <option>Nationwide-1</option>
                    <option>Nationwide-2</option>
                    <option>Nationwide-3</option>
                </FormSelect>
            </Col>
            <Col>
                <FormSelect className="col" placeholder="Nationwide">
                    <option>Nationwide-1</option>
                    <option>Nationwide-2</option>
                    <option>Nationwide-3</option>
                </FormSelect>
            </Col>
            <Col>
                <FormSelect className="col" placeholder="Select Model">
                    <option>BMW 320i</option>
                    <option>BMW X6</option>
                    <option>BMW 520e</option>
                </FormSelect>
            </Col>
            <Col>
                <Button type="submit" className="search">
                    Search
                </Button>
            </Col>
        </Row>
    );
}

export default Filter;
