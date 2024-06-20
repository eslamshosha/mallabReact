import React from 'react'
import feature1 from '../../assets/features-icon/CreditCard.png'
import feature2 from '../../assets/features-icon/Headphones.png'
import feature3 from '../../assets/features-icon/Package.png'
import feature4 from '../../assets/features-icon/Trophy.png'

export default function Feature() {
    
    return (
        <section className="feature-section">
            <div className="container">
                <div className="features">
                    <div className="features-box">
                        <figure>
                            <img src={feature2} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <h5 className="features-h">دعم ٢٤ ساعة</h5>
                            <span className="features-span">رسائل نصية ومكالمات</span>
                        </div>
                    </div>
                    <div className="features-box">
                        <figure>
                            <img src={feature1} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <h5 className="features-h">وسيلة دفع امنة</h5>
                            <span className="features-span">دفع امن</span>
                        </div>
                    </div>
                    <div className="features-box">
                        <figure>
                            <img src={feature4} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <h5 className="features-h">خدمة بعد البيع</h5>
                            <span className="features-span">١٠٠٪ اعادة البيع</span>
                        </div>
                    </div>
                    <div className="features-box">
                        <figure>
                            <img src={feature3} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <h5 className="features-h">توصيل سريع</h5>
                            <span className="features-span">توصيل ٢٤ ساعة</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
