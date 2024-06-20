import React, { useRef } from 'react'
import boot from '../../assets/offer/img.png'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

export default function OfferSlider() {
    let offers = [
        { title: "1استمتع بعروض العيد", p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.", img: boot },
        { title: "2استمتع بعروض العيد", p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.", img: boot },
        { title: "3استمتع بعروض العيد", p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.", img: boot },
    ]
    const NewsSwiperRef = useRef(null);

    return (
        <section className="offer-slider">
            <div className="container">
                <div className="hhd">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            NewsSwiperRef.current = swiper;
                        }}
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={true}
                        pagination={true}
                        navigation={false}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            991: {
                                slidesPerView: 1,
                            },
                        }}

                    >
                        {offers.map(offer =>
                            <SwiperSlide>
                                <div className="offer">
                                    <Link to="/product" className="pro-img">
                                        <div className="offer-content">
                                            <h3 className="offer-head">{offer.title}</h3>
                                            <p className="offer-pargh">{offer.p}</p>
                                        </div>
                                        <div className="offer-img">
                                            <span className="big-circle"></span>
                                            <img src={offer.img} className="img-fluid" alt='footbal' />
                                            <span className="small-circle"></span>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
