// ProductCard.tsx

import React from 'react';
import styles from './style.module.css';
// import style from "../Slides.module.css"

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
        <div className={styles.product_card} key={product.id}>
            <div className={styles.line_one}>
                <img className={styles.car_img} src={product.src} alt={product.name} />
            </div>
            <div className={styles.line_two}>
                <h3 className={styles.name} >{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
            </div>
            <div className={styles.line_three}>
                <p className={styles.category}>{product.category}</p>
            </div>
            <div className={styles.line_four}>
                <p className={styles.model}>{product.model}</p>
                <p className={styles.km}>{product.kM}</p>
                <p className={styles.color}>{product.color}</p>
                <p className={styles.kind}>{product.kind}</p>
                <p className={styles.fender}>{product.fender}</p>
            </div>
            <div className={styles.line_five}>
                <p className={styles.description}>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
