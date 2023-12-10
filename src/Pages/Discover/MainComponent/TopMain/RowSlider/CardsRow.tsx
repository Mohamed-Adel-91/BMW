import React from 'react';
import ProductSlider from './ProductCard/ProductSlider';
import TopMain from "../TopMain.json";
import "./CardsRow.module.css"

const CardsRow: React.FC = () => {
    return (
        <div className='rowSlides'>
            <ProductSlider products={TopMain} />
        </div>
    );
};

export default CardsRow;