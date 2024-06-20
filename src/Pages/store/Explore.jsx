import React from 'react'
import img1 from '../../assets//banner/02.png'
import img2 from '../../assets/product/02.png'

export default function Explore() {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="banner-container">
                    <div className="banner-item first">
                        <div className="small-banner-img">
                            <div className="price-round">63 ريال</div>
                            <figure>
                                <img className="img-fluid" src={img2} alt="product" />
                            </figure>
                        </div>
                        <div className="small-banner-content dark">
                            <div className="hint">اصدار حديث</div>
                            <h4 className="small-banner-head">حذاء رياضي</h4>
                            <p className="small-banner-pargh">طقم رياضي خاص بكرة القدم</p>
                            <a href="#d" className="banner-ancor">تصفح الان</a>
                        </div>
                    </div>
                    <div className="banner-item second">
                        <div className="small-banner-img">
                            <figure>
                                <img className="img-fluid" src={img1} alt="product" />
                            </figure>
                        </div>
                        <div className="small-banner-content">
                            <h3>اصدارات جديدة الحق بسرعة</h3>
                            <p className="small-banner-pargh">طقم رياضي خاص بكرة القدم</p>
                            <a href="#d" className="banner-ancor">اشتري الان</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
