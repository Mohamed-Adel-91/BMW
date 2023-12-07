import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Filter.css'
import { Row } from 'reactstrap';

function Filter() {
    return (
        <Row className="con p-4">
            <Form.Group className="row">
                <Form.Group className="col">
                    <Form.Control className="col" placeholder="Postcode/Location" />
                </Form.Group>
                <Form.Group className="col">
                    <Form.Select className="col" placeholder="Nationwide">
                        <option>Nationwide-1</option>
                        <option>Nationwide-2</option>
                        <option>Nationwide-3</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="col">
                    <Form.Select className="col" placeholder="1 Series">
                        <option>1 Series</option>
                        <option>2 Series</option>
                        <option>3 Series</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="col">
                    <Form.Select className="col" placeholder="Select Model">
                        <option>BMW 320i</option>
                        <option>BMW X6</option>
                        <option>BMW 520e</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="col">
                    <Button type="submit" className="search">Search</Button>
                </Form.Group>

            </Form.Group>
        </Row>
    );
}

export default Filter;