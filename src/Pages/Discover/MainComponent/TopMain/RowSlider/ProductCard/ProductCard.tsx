
import React from 'react';
import styles from './style.module.css';
import { Card, CardBody, Col, Row } from 'reactstrap';

interface Product {
    id: number;
    src: string;
    name: string;
    price: string;
    category: string;
    model: string;
    kM: string;
    color: string;
    kind: string;
    fender: string;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card style={{
            width: '25rem',
            borderColor: "#fff",
        }} className={styles.Container} key={product.id}>
            <div className={styles.line_one}>
                <img className={styles.car_img} src={product.src} alt={product.name} />
                <div className={styles.backImg}></div>
            </div>
            <CardBody className={styles.cardBody}>
                <Row className={styles.line_two}>
                    <Col sm={6} className={styles.name} >{product.name}</Col>
                    <Col sm={6} className={styles.price}>{product.price}</Col>
                </Row>
                <Row className={styles.line_three}>
                <p className={styles.category}>{product.category}</p>
                </Row>
                <Row className={styles.line_four}>
                    <Col sm={2} className={styles.model}>{product.model}</Col>
                    <Col sm={2} className={styles.km}>{product.kM}</Col>
                    <Col sm={2} className={styles.color}>{product.color}</Col>
                    <Col sm={2} className={styles.kind}>{product.kind}</Col>
                    <Col sm={2} className={styles.fender}>{product.fender}</Col>
                </Row>
                <Row className={styles.line_five}>
                    <Col className={styles.description}>{product.description}</Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
