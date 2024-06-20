import React, { useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import categ1 from '../../assets/category/01.png';
import categ2 from '../../assets/category/02.png';
import categ3 from '../../assets/category/03.png';
import categ4 from '../../assets/category/04.png';
import { Link } from 'react-router-dom';

export default function CategorySection() {
    const NewsSwiperRef = useRef(null);
    let categotries = [
        { id: 1, img: categ1, name: " قسم رياضي" },
        { id: 2, img: categ4, name: " قسم رياضي" },
        { id: 3, img: categ2, name: " قسم رياضي" },
        { id: 4, img: categ4, name: " قسم رياضي" },
        { id: 4, img: categ1, name: " قسم رياضي" },
        { id: 5, img: categ2, name: " قسم رياضي" },
        { id: 6, img: categ3, name: " قسم رياضي" },
        { id: 7, img: categ4, name: " قسم رياضي" },
        { id: 8, img: categ1, name: " قسم رياضي" },
    ]
    return (
        <section className="category-section store-cat">
            <div className="container">
                <div className="category-slider">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            NewsSwiperRef.current = swiper;
                        }}
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={8}
                        loop={true}
                        autoplay={true}
                        pagination={true}
                        navigation={true}
                        breakpoints={{
                            991: {
                                slidesPerView: 8,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            540: {
                                slidesPerView: 3,
                            },
                            100: {
                                slidesPerView: 3,
                            },
                        }}

                    >
                        {categotries.map(category =>
                            <SwiperSlide>
                                <div className="brand">
                                    <Link to='/product' className="category-ancor">
                                        <figure className="category-figure">
                                            <img className="category-img img-fluid" alt="image1" src={category.img} />
                                        </figure>
                                        <span>{category.name}</span>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )}
                        
                    </Swiper>
                    

                    <div onClick={() => NewsSwiperRef.current.slidePrev()} className="swiper-button-prev swiper-btn-next  swiper-btn" >
                            <i className="iconsax" icon-name="arrow-left"></i> 
                        </div>
                        <div onClick={() => NewsSwiperRef.current.slideNext()}  className="swiper-button-next swiper-btn-prev swiper-btn" >
                            <i className="iconsax" icon-name="arrow-right"></i> 
                        </div>


                </div>
            </div>
        </section>
    )
}
