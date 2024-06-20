import React from 'react'
import about from '../../assets/about-img.png'


export default function About() {
    return (
        <section className="about-section">
            <div className="container custom-container">
                <div className="about-cont">
                    <div className="about-content">
                        <h3 className="about-title">اعرف اكتر عن ملاعب</h3>
                        <p className="about-pargh">
                            الملاعب يقدم لملاك الملاعب والأكاديميات العديد من الخدمات المميزة،
                            مثل تسويقهم لمئات الآلاف من اللاعبين، وتسهيل كافة الأعمال
                            التشغيلية والإدارية لهم
                        </p>
                        <a href="#11" className="about-link">اعرف اكثر</a>
                    </div>
                    <div className="about-img">
                        <figure>
                            <img src={about} alt="about-img" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
