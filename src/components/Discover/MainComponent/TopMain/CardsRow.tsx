
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import style from './CardsRow.module.css';

// import required modules
import { Pagination } from 'swiper/modules';
import TopMain from "./TopMain.json"


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

const CardsRow = () => {
    const Elements = TopMain.map((item: Item) => {
        return (
            <div className={style.Container} key={item.id}>
                <div className={style.line_one}>
                    <img className={style.car_img} src={item.src} alt="img" />
                </div>
                <div className={style.line_two}>
                    <h3 className={style.name}>{item.name}</h3>
                    <h6 className={style.price}>{item.price}</h6>
                </div>
                <div className={style.line_three}>
                    <p className={style.category}>{item.category}</p>
                </div>
                <div className={style.line_four}>
                    <p className={style.model}>{item.model}</p>
                    <p className={style.km}>{item.kM}</p>
                    <p className={style.color}>{item.color}</p>
                    <p className={style.kind}>{item.kind}</p>
                    <p className={style.fender}>{item.fender}</p>
                </div>
                <div className={style.line_five}>
                    <p className={style.description}>{item.description}</p>
                </div>
            </div>
        )
    });

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>{Elements}</SwiperSlide>
            </Swiper>
        </>
    );
}

export default CardsRow
