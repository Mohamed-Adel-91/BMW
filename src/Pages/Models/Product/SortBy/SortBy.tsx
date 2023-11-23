import Form from 'react-bootstrap/Form';
import style from "./SortBy.module.css"

const SortBy = () => {
    return (
        <Form>
            <fieldset className='row'>
                <Form.Group className="col">
                    <Form.Label id={style.label}>Sort By:</Form.Label>
                    <Form.Select className="col" id={style.sort} placeholder="Sort By:">
                        <option>Price</option>
                        <option>Model Name</option>
                        <option>Kilometers</option>
                    </Form.Select>
                </Form.Group>
            </fieldset>
        </Form>
    )
}

export default SortBy