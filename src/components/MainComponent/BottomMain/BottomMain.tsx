// import { Button } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import "./BottomMain.css"

// import required modules
import { Pagination } from 'swiper/modules';


const BottomMain = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="BottomMainCardOne">
                <div className="BottomMainCardImg">
                    <img src="/public/img/Group1.png" alt="" />
                    <h2>WHY CHOOSE BMW FINANCIAL SERVICES?</h2>
                </div>
                {/* <div className="BottomMainCardHover">
                    <h1>BMW OWNER'S DIRECTORY.</h1>
                    <p>As a proud owner, find everything you
                        need for your BMW in one place,
                        including BMW Accessories, 24/7
                        Roadside Assistance, Warranties,
                        Accident Support, Servicing and more.</p>
                    <Button>Find Out More</Button>
                </div> */}
            </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BottomMainCardTwo">
                        <div className="BottomMainCardImg">
                            <img src="/public/img/Path2.png" alt="" />
                            <h2>FIND A BMW CENTRE.</h2>
                        </div>
                        {/* <div className="BottomMainCardHover">
                        <h1>BMW OWNER'S DIRECTORY.</h1>
                        <p>As a proud owner, find everything you
                        need for your BMW in one place,
                        including BMW Accessories, 24/7
                        Roadside Assistance, Warranties,
                        Accident Support, Servicing and more.</p>
                        <Button>Find Out More</Button>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BottomMainCardThree">
                        <div className="BottomMainCardImg">
                            <img src="/public/img/Group3.png" alt="" />
                            <h2>DOWNLOAD THE MY BMW APP.</h2>
                        </div>
                        {/* <div className="BottomMainCardHover">
                    <h1>BMW OWNER'S DIRECTORY.</h1>
                    <p>As a proud owner, find everything you
                        need for your BMW in one place,
                        including BMW Accessories, 24/7
                        Roadside Assistance, Warranties,
                        Accident Support, Servicing and more.</p>
                    <Button>Find Out More</Button>
                    </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BottomMainCardFour">
                        <div className="BottomMainCardImg">
                            <img src="/public/img/Path2.png" alt="" />
                            <h2>BMW OWNER'S DIRECTORY.</h2>
                        </div>
                        {/* <div className="BottomMainCardHover">
                        <h1>BMW OWNER'S DIRECTORY.</h1>
                        <p>As a proud owner, find everything you
                        need for your BMW in one place,
                        including BMW Accessories, 24/7
                        Roadside Assistance, Warranties,
                        Accident Support, Servicing and more.</p>
                        <Button>Find Out More</Button>
                        </div> */}
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    );
}



export default BottomMain