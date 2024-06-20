import React, { useRef } from 'react'
import banner1 from '../../assets/banner/01.png'
import banner2 from '../../assets/banner/02.png'
import banner3 from '../../assets/product/02.png'
import banner4 from '../../assets/product/03.png'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'

export default function Banner() {
    const NewsSwiperRef = useRef(null);
    let banners = [
        { title: "الاكثر مبيعا الان", name: "حذاء رياضي", p: "طقم رياضي خاص بكرة القدم باحدث التقنيات", img: banner1 ,price:"45"},
        { title: "الاكثر مبيعا الان", name: "قميص رياضي", p: "طقم رياضي خاص بكرة القدم باحدث التقنيات", img: banner2 ,price:"65"},
        { title: "الاكثر مبيعا الان", name: "حذاء رياضي", p: "طقم رياضي خاص بكرة القدم باحدث التقنيات", img: banner1 ,price:"45"},
    ]

    return (
        <section className="banner-section">
            <div className="container">
                <div className="banner-cont">
                    <div className="banner-slider">
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
                            {banners.map(bannr =>
                                <SwiperSlide>
                                    <div className="banner-product">
                                        <div className="banner-content">
                                            <h5 className="banner-head">{bannr.title}</h5>
                                            <h3 className="banner-title">{bannr.name}</h3>
                                            <p className="banner-pargh"> {bannr.p}  </p>
                                            <Link to='/product' className="banner-ancor">اشتري الان</Link>
                                            <span className="hint">{bannr.price} ريال</span>
                                        </div>

                                        <div className="banner-img">
                                            <img lassName="img-fluid" src={bannr.img} alt="banner" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        
                    </div>
                    <div className="small-banner">
                        <div className="banner-item first">
                            <div className="small-banner-img">
                                <div className="hint">خصم ٩٪</div>
                                <figure>
                                    <img
                                        className="img-fluid"
                                        src={banner3}
                                        alt="product"
                                    />
                                </figure>
                            </div>
                            <div className="small-banner-content">
                                <h5>خصومات الصيف</h5>
                                <h3>اصدارات جديدة الحق بسرعة</h3>
                                <Link to='/product' className="banner-ancor">تصفح الان</Link>
                            </div>
                        </div>
                        <div className="banner-item second">
                            <div className="small-banner-content">
                                <h3>طقم رياضي حديث</h3>
                                <div className="banner-price">432 ريال</div>
                                <Link to='/product' className="banner-ancor">اشتري الان</Link>
                            </div>
                            <div className="small-banner-img">
                                <figure>
                                    <img
                                        className="img-fluid"
                                        src={banner4}
                                        alt="product"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
