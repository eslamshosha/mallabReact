import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import khaial from '../../assets/academy/img.png'
import clubLogo1 from '../../assets/academy/01.png'
import clubLogo2 from '../../assets/academy/02.png'
import clubLogo3 from '../../assets/academy/03.png'

export default function Academy() {
    return (
        <section className="academy-section" id='academy'>
            <div className="container custom-container">
                <div className="academy-cont">
                    <div className="academy-content">
                        <h3 className="about-title">اشترك الان في الاكادمية احجز وابدء</h3>
                        <div className="mallab-pargh">
                            الملاعب يقدم لملاك الملاعب والأكاديميات العديد من الخدمات المميزة،
                            مثل تسويقهم لمئات الآلاف من اللاعبين، وتسهيل كافة الأعمال
                            التشغيلية والإدارية لهم الملاعب يقدم لملاك الملاعب والأكاديميات
                        </div>
                    </div>
                    <div className="academy-img">
                        <figure>
                            <LazyLoadImage className="mallab-bg" src={khaial} alt="img" />
                        </figure>
                    </div>
                </div>
                <div className="academy-items">
                    <div data-aos="zoom-in">
                        <div className="academy-item">
                            <figure>
                                <LazyLoadImage src={clubLogo1} alt="academy-logo" />
                            </figure>
                            <h4 className="academy-name">اكادمية سافا بالدمام</h4>
                            <span className="academy-age">من سن ١٨ الي ٢١</span>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div className="academy-item">
                            <figure>
                                <LazyLoadImage src={clubLogo2} alt="academy-logo" />
                            </figure>
                            <h4 className="academy-name">اكادمية ساس بالدمام</h4>
                            <span className="academy-age">من سن ١٨ الي ٢١</span>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div className="academy-item">
                            <figure>
                                <img src={clubLogo3} alt="academy-logo" />
                            </figure>
                            <h4 className="academy-name">اكادمية القلعة بالدمام</h4>
                            <span className="academy-age">من سن ١٨ الي ٢١</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
