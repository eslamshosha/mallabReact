import React, { useEffect } from 'react'
import malaebBg from '../../assets/mallab/bg.png'
import hero from '../../assets/mallab/hero.png'
import stadium from '../../assets/mallab/stadium.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Aos from 'aos'

export default function Stadium() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section className="mallab-section stadium" id='stadium'>
            <div className="container custom-container">
                <div className="mallab-cont">
                    <div className="mallab-img">
                        <figure>
                            <LazyLoadImage className="mallab-bg" src={malaebBg} alt="bg" />
                            <LazyLoadImage className="mallab-hero" src={hero} alt="bg" />
                        </figure>
                    </div>
                    <div className="mallab-content">
                        <h3 className="about-title">ابحث عن ملاعب بالقرب منك واحجز</h3>
                        <div className="mallab-pargh">
                            الملاعب يقدم لملاك الملاعب والأكاديميات العديد من الخدمات المميزة،
                            مثل تسويقهم لمئات الآلاف من اللاعبين، وتسهيل كافة الأعمال
                            التشغيلية والإدارية لهم الملاعب يقدم لملاك الملاعب والأكاديميات
                            العديد من الخدمات المميزة، مثل تسويقهم لمئات الآلاف من اللاعبين،
                            وتسهيل كافة
                        </div>
                    </div>
                </div>
                <div className="stadium-cont">
                    <div data-aos="fade-down">
                        <a href="#113" className="stadium-card" data-sal="slide-down" style={{ "--sal-delay": " 0.3s" }} >
                            <figure>
                                <img src={stadium} alt="stadium" />
                            </figure>
                            <div className="stadium-content">
                                <h5 className="stadium-title">تحدي فريق الاسطورة</h5>
                                <span className="stadium-name">
                                    <i className="iconsax" icon-name="flag-1"></i>
                                    <span>استاد النيل</span>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div data-aos="fade-down"data-aos-delay="100">
                        <a href="#13" className="stadium-card" data-sal="slide-down" style={{ "--sal-delay": "0.45s" }} >
                            <figure>
                                <img src={stadium} alt="stadium" />
                            </figure>
                            <div className="stadium-content">
                                <h5 className="stadium-title">تحدي فريق الاسطورة</h5>
                                <span className="stadium-name">
                                    <i className="iconsax" icon-name="flag-1"></i>
                                    <span>استاد النيل</span>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="300">
                        <a href="#113" className="stadium-card" data-sal="slide-down" style={{ "--sal-delay": " 0.3s" }} >
                            <figure>
                                <img src={stadium} alt="stadium" />
                            </figure>
                            <div className="stadium-content">
                                <h5 className="stadium-title">تحدي فريق الاسطورة</h5>
                                <span className="stadium-name">
                                    <i className="iconsax" icon-name="flag-1"></i>
                                    <span>استاد النيل</span>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
