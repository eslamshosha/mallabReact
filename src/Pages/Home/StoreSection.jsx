import React from 'react'
import store from '../../assets/store.png'


export default function StoreSection() {
    return (
        <section className="store-section">
            <div className="container custom-container">
                <div className="about-cont">
                    <div className="about-content">
                        <h3 className="store-title">اعرف اكتر عن ملاعب</h3>
                        <p className="about-pargh">
                            الملاعب يقدم لملاك الملاعب والأكاديميات العديد من الخدمات المميزة،
                            مثل تسويقهم لمئات الآلاف من اللاعبين، وتسهيل كافة الأعمال
                            التشغيلية والإدارية لهم
                        </p>
                        <a href="#1" className="about-link">اعرف اكثر</a>
                    </div>
                    <div className="store-img">
                        <figure>
                            <img src={store} alt="store-img" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
