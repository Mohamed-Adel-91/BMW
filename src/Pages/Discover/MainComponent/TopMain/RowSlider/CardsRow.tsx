import React from 'react';
import ProductSlider from './ProductCard/ProductSlider';
import TopMain from "../TopMain.json";

const CardsRow: React.FC = () => {
    return (
        <div>
            <ProductSlider products={TopMain} />
        </div>
    );
};

export default CardsRow;