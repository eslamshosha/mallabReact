import React, { useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LazyLoadImage1 from '../../assets/videos/02.png'
import LazyLoadImage2 from '../../assets/videos/03.jpg'
import LazyLoadImage3 from '../../assets/videos/04.jpg'
import LazyLoadImage4 from '../../assets/videos/05.jpg'
import LazyLoadImage5 from '../../assets/videos/06.jpg'
import LazyLoadImage6 from '../../assets/videos/07.jpg'
import LazyLoadImage7 from '../../assets/videos/08.jpg'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Video() {
    
    let viids = [
        { id: 1, LazyLoadImage: LazyLoadImage1 },
        { id: 2, LazyLoadImage: LazyLoadImage2 },
        { id: 3, LazyLoadImage: LazyLoadImage3 },
        { id: 4, LazyLoadImage: LazyLoadImage4 },
        { id: 5, LazyLoadImage: LazyLoadImage5 },
        { id: 6, LazyLoadImage: LazyLoadImage6 },
        { id: 7, LazyLoadImage: LazyLoadImage7 },
    ]
    const NewsSwiperRef = useRef(null);

    let arr = [1, 2, 3]
    var min = 1;
    var max = arr.length + 1;
    var rand = 0;
    let [ord, setOrd] = useState(1);
    let [ord2, setOrd1] = useState(1);
    let [ord3, setOrd2] = useState(1);
    setInterval(function () {
        if (ord === 1) {
            setOrd(2)
            setOrd2(3)
            setOrd1(1)
        }
        else if (ord === 2) {
            setOrd(3)
            setOrd2(1)
            setOrd1(2)
        }
        else if (ord === 3) {
            setOrd(1)
            setOrd2(2)
            setOrd1(3)
        }
        console.log(ord);
    }, 3000);


    return (
        <section class="video-section" id='videos'>
            <div class="container">
                <div class="video-cont">
                    <div class="about-content">
                        <div class="video-content">
                                <h3 class="store-title">شاهد المقاطع</h3>
                                <p class="about-pargh">
                                    الملاعب يقدم لملاك الملاعب والأكاديميات العديد من الخدمات
                                    المميزة، مثل تسويقهم لمئات الآلاف من اللاعبين، وتسهيل
                                </p>
                        </div>
                    </div>
                    <div class="parent-cont parent-cont1">
                        <div class="parent_slide">
                            <div class="block1">
                                <div class="slide">
                                    <a
                                        href="images/videos/SampleVideo_1280x720_20mb.mp4"
                                        type="video/mp4"
                                        data-fancybox="vision"
                                    >
                                        <figure>
                                            <video width="320" height="240">
                                                <source
                                                    src="images/videos/SampleVideo_1280x720_20mb.mp4"
                                                    type="video/mp4"
                                                />
                                                <source src={require('../../assets/videos/vid1.mp4')} type="video/ogg" />

                                                Your browser does not support the video tag.
                                            </video>
                                        </figure>
                                    </a>
                                </div>
                                <div class="slide">
                                    <a href={LazyLoadImage1} data-fancybox="post">
                                        <figure>
                                            <LazyLoadImage src={LazyLoadImage1} alt="videos" />
                                        </figure>
                                    </a>
                                </div>
                                <div class="slide">
                                    <a href={LazyLoadImage2} data-fancybox="post"> <figure> <LazyLoadImage src={LazyLoadImage2} alt="videos" /></figure ></a>
                                </div>
                                <div class="slide">
                                    <a href={LazyLoadImage3} data-fancybox="post">
                                        <figure>
                                            <LazyLoadImage src={LazyLoadImage3} alt="videos" /></figure
                                        ></a>
                                </div>
                                <div class="slide">
                                    <a href={LazyLoadImage4} data-fancybox="post"
                                    ><figure>
                                            <LazyLoadImage src={LazyLoadImage4} alt="videos" /></figure
                                        ></a>
                                </div>
                            </div>
                            <div class="block2">
                                <div class="slide">
                                    <a href={LazyLoadImage5} data-fancybox="post">
                                        <figure>
                                            <LazyLoadImage src={LazyLoadImage5} alt="videos" />
                                        </figure>
                                    </a>
                                </div>
                                <div class="slide">
                                    <a href={LazyLoadImage6} data-fancybox="post">
                                        <figure>
                                            <LazyLoadImage src={LazyLoadImage6} alt="videos" />
                                        </figure>
                                    </a>
                                </div>
                                <div class="slide">
                                    <a href={LazyLoadImage7} data-fancybox="post">
                                        <figure>
                                            <LazyLoadImage src={LazyLoadImage7} alt="videos" /></figure
                                        ></a>
                                </div>
                                <div class="slide">
                                    <a href={LazyLoadImage7} data-fancybox="post">
                                        <figure>
                                            <LazyLoadImage src={LazyLoadImage7} alt="videos" /></figure
                                        ></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="parent-cont parent-cont2">
                        <div className="parent_slide">
                            <Swiper
                                onBeforeInit={(swiper) => {
                                    NewsSwiperRef.current = swiper;
                                }}
                                modules={[Pagination]}
                                spaceBetween={30}
                                slidesPerView={5.5}
                                loop={true}
                                autoplay={true}
                                pagination={true}
                                navigation={true}
                                breakpoints={{
                                    991: {
                                        slidesPerView: 5,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    540: {
                                        slidesPerView: 3,
                                    },
                                    100: {
                                        slidesPerView: 2,
                                    },
                                }}

                            >
                                <SwiperSlide>
                                    <div class="slide">
                                        <a href="../../assets/videos/vid1.mp4" data-fancybox="vision" >
                                            <figure>
                                                <video width="320" height="240">
                                                    <source src={require('../../assets/videos/vid1.mp4')} type="video/ogg" />
                                                </video>
                                            </figure>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                {viids.map(viid =>
                                    <SwiperSlide>
                                        <div class="slide slide swiper-slide swiper-slide-active">
                                            <a href={viid.LazyLoadImage} data-fancybox="post">
                                                <figure>
                                                    <LazyLoadImage src={viid.LazyLoadImage} alt="videos" />
                                                </figure>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                )}

                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
