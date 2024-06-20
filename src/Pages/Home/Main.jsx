import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import shoot from '../../assets/main-img.png'
import apple from '../../assets/apple-btn.png'
import google from '../../assets/google-btn.png'

export default function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main-cont">
                    <div className="main-content">
                        <h2 className="main-title">انضم الي منصة الملاعب الان واستمتع</h2>
                        <p className="section-pargh">
                            ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في
                            الأكاديميات، الإنضمام للتمارين.
                        </p>
                        <div className="download-btn-cont">
                            <a href="#13"><LazyLoadImage src={apple} alt="download" /></a>
                            <a href="#13"><LazyLoadImage src={google} alt="download" /></a>
                        </div>
                    </div>
                    <div className="main-img-cont">
                        <figure>
                            <LazyLoadImage src={shoot} alt="main-img" className="img-fluid" />
                        </figure>
                    </div>
                </div>
            </div>
        </main>
    )
}
