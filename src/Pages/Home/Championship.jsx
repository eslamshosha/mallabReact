import React, { useRef } from 'react'

import champBg from '../../assets/championship/bg.png'
import champHero from '../../assets/championship/hero.png'
import champLogo1 from '../../assets/championship/01.png'
import champLogo2 from '../../assets/championship/02.png'
import champLogo3 from '../../assets/championship/03.png'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Championship() {
    const NewsSwiperRef = useRef(null);

    return (
        <section className="championship-section" id='championship'>
            <div className="container custom-container">
                <div className="championship-cont">
                    <div className="mallab-img">
                        <figure>
                            <img
                                className="mallab-bg"
                                src={champBg}
                                alt="bg"
                            />
                            <img
                                className="mallab-hero"
                                src={champHero}
                                alt="bg"
                            />
                        </figure>
                    </div>
                    <div className="mallab-content">
                        <h3 className="about-title">احجز بطولاتك الان بكل سهولة وسرعة</h3>
                        <div className="mallab-pargh">
                            الملاعب يقدم لملاك الملاعب والأكاديميات العديد من الخدمات المميزة،
                            مثل تسويقهم لمئات الآلاف من اللاعبين، وتسهيل كافة الأعمال
                            التشغيلية والإدارية لهم الملاعب يقدم لملاك الملاعب والأكاديميات
                        </div>
                    </div>
                </div>


                <div className="championship-slider">

                    <div className="hh">
                    <Swiper
                            onBeforeInit={(swiper) => {
                                NewsSwiperRef.current = swiper;
                            }}
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            autoplay={true}
                            pagination={true}
                            navigation={false}
                            breakpoints={{
                                991: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                
                                100: {
                                    slidesPerView: 1,
                                },
                            }}

                        >
                            <SwiperSlide>
                                <div className="championship-item">
                                    <figure>
                                        <img src={champLogo1} alt="academy-logo" />
                                    </figure>
                                    <h4 className="championship-name">بطولة زاد</h4>
                                    <span className="championship-desc"
                                    >بطولة مجمعة بجوائز تصل الي الف ريال</span
                                    >
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="championship-item">
                                    <figure>
                                        <img src={champLogo2} alt="academy-logo" />
                                    </figure>
                                    <h4 className="championship-name">بطولة زاد</h4>
                                    <span className="championship-desc"
                                    >بطولة مجمعة بجوائز تصل الي الف ريال</span
                                    >
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="championship-item">
                                    <figure>
                                        <img src={champLogo3} alt="academy-logo" />
                                    </figure>
                                    <h4 className="championship-name">بطولة زاد</h4>
                                    <span className="championship-desc"
                                    >بطولة مجمعة بجوائز تصل الي الف ريال</span
                                    >
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="championship-item">
                                    <figure>
                                        <img src={champLogo3} alt="academy-logo" />
                                    </figure>
                                    <h4 className="championship-name">بطولة زاد</h4>
                                    <span className="championship-desc"
                                    >بطولة مجمعة بجوائز تصل الي الف ريال</span
                                    >
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>
                        <div onClick={() => NewsSwiperRef.current.slidePrev()} className="swiper-button-prev" >
                            <i className="iconsax" icon-name="arrow-left"></i> 
                        </div>
                        <div onClick={() => NewsSwiperRef.current.slideNext()}  className="swiper-button-next" >
                            <i className="iconsax" icon-name="arrow-right"></i> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
