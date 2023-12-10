import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard';
import styles from './style.module.css';

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

interface ProductSliderProps {
    products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 7000,
        cssEase: "linear",
        adaptiveHeight: true,
        nextArrow: <div className={styles.nextArrow} />,
        prevArrow: <div className={styles.prevArrow} />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className={styles.productSlider}>
            {products.map((product) => (
                <div key={product.id} className={styles.productCardWrapper}>
                    <ProductCard product={product} />
                </div>
            ))}
        </Slider>
    );
};

export default ProductSlider;

