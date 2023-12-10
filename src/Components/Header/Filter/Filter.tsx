import { Row, Col, Button } from "reactstrap";
import { FormControl, FormSelect } from "react-bootstrap";
import "./Filter.css";

function Filter() {
    return (
        <Row className="cont">
            <Col>
                <FormControl className="col" placeholder="Postcode/Location" />
            </Col>
            <Col>
                <FormSelect
                    title="Nationwide-1"
                    className="col"
                    placeholder="Nationwide-1"
                    aria-labelledby="Select Nationwide option"
                >
                    <option>Nationwide-1</option>
                    <option>Nationwide-2</option>
                    <option>Nationwide-3</option>
                </FormSelect>
            </Col>
            <Col>
                <FormSelect
                    title="Nationwide-2"
                    className="col"
                    placeholder="Nationwide-2"
                    aria-labelledby="Select Another Nationwide option"
                >
                    <option>Nationwide-1</option>
                    <option>Nationwide-2</option>
                    <option>Nationwide-3</option>
                </FormSelect>
            </Col>
            <Col>
                <FormSelect
                    title="Select-Model"
                    className="col"
                    placeholder="Select Model"
                    aria-labelledby="Select Model option"
                >
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
