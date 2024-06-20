

import React from 'react'
import LoginSide from '../loginSide/LoginSide'

export default function Forget() {
    return (
        <div className="body-wrapper">
            <div className="form-section">
                <div className="form-container">
                    <div className="upper-head">
                        <a href="index.html" className="logo">
                            <h2>ملاعب</h2>
                        </a>
                    </div>
                    <form action="/OTPCode" className="login-form">
                        <div className="form-cont">
                            <h2 className="form-head">نسيت كلمة المرور</h2>
                            <p className="form-pargh">لاتقلق سوف نساعدك علي استعادتة</p>
                            <div className="form-group">
                                <label className="form-label">البريد الالكتروني</label>
                                <input type="email" className="form-input custom-input" />
                            </div>
                            <div className="form-btn-cont">
                                <button className="form-btn" type="submit" to={'/OTPCode'}>التالي</button>
                            </div>
                        </div>
                    </form>
                    <p className="copy-right">حقوق النشر © 2017 ملاعب مصر</p>
                </div>
            </div>
            <LoginSide></LoginSide>
        </div>
    )
}
