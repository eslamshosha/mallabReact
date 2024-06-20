import React from 'react'
import img1 from '../../assets/sign-bg/01.png'
import img2 from '../../assets/sign-bg/02.png'
import img3 from '../../assets/sign-bg/03.png'
import img4 from '../../assets/sign-bg/04.png'
import img5 from '../../assets/sign-bg/05.png'
import img6 from '../../assets/sign-bg/06.png'

export default function LoginSide() {
    return (
        <div className="img-bg">
            <div className="img-bg-item">
                <figure className="">
                    <img src={img1} alt="" className="img-fluid" />
                </figure>
                <span>بطولات</span>
            </div>
            <div className="img-bg-item">
                <figure className="">
                    <img src={img2} alt="" className="img-fluid" />
                </figure>
                <span>مقاطع</span>
            </div>
            <div className="img-bg-item">
                <figure className="">
                    <img src={img3} alt="" className="img-fluid" />
                </figure>
                <span>اكادميات</span>
            </div>
            <div className="img-bg-item">
                <figure className="">
                    <img src={img4} alt="" className="img-fluid" />
                </figure>
                <span>تطوير</span>
            </div>
            <div className="img-bg-item">
                <figure className="">
                    <img src={img5} alt="" className="img-fluid" />
                </figure>
                <span>متجر</span>
            </div>
            <div className="img-bg-item">
                <figure className="">
                    <img src={img6} alt="" className="img-fluid" />
                </figure>
                <span>ملاعب</span>
            </div>
        </div>
    )
}
