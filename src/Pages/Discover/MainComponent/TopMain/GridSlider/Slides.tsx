import { Card, CardBody, Col, Row } from "reactstrap";
import TopMain from "../TopMain.json"
import style from "./Slides.module.css"

interface Item {
    id: number,
    src: string,
    name: string,
    price: string,
    category: string,
    model: string,
    kM: string,
    color: string,
    kind: string,
    fender: string,
    description: string
}


const Slides = () => {
    const Elements = TopMain.map((item: Item) => {
        return (
            <Card style={{
                width: '25rem'
            }} className={style.Container} key={item.id}>
                <div className={style.line_one}>
                    <img className={style.car_img} src={item.src} alt="img" />
                    <div className={style.backImg}></div>
                </div>
                <CardBody className={style.cardBody}>
                    <Row className={style.line_two}>
                        <Col sm={6} className={style.name}>{item.name}</Col>
                        <Col sm={6} className={style.price}>{item.price}</Col>
                    </Row>
                    <Row className={style.line_three}>
                        <Col className={style.category}>{item.category}</Col>
                    </Row>
                    <Row className={style.line_four}>
                        <Col sm={2} id="x" className={style.model}>{item.model}</Col>
                        <Col sm={2} id="x" className={style.km}>{item.kM}</Col>
                        <Col sm={2} id="x" className={style.color}>{item.color}</Col>
                        <Col sm={2} id="x" className={style.kind}>{item.kind}</Col>
                        <Col sm={2} id="x" className={style.fender}>{item.fender}</Col>
                    </Row>
                    <Row className={style.line_five}>
                        <Col className={style.description}>{item.description}</Col>
                    </Row>
                </CardBody>
            </Card>
        )
    });

    return (
        <div className={style.slides}>
            {Elements}
        </div>
    );
};

export default Slides