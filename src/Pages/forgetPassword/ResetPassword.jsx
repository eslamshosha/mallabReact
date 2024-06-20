import React, { useState } from 'react'
import LoginSide from '../loginSide/LoginSide'

export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    function showPass() {
        if (showPassword) {
            setShowPassword(false);
            document.getElementById("eye").classList.add('active')
        }
        else {
            setShowPassword(true);
            document.getElementById("eye").classList.remove('active')
        }
    }
    function showRePass() {
        if (showRePassword) {
            setShowRePassword(false);
            document.getElementById("eye2").classList.add('active')
        }
        else {
            setShowRePassword(true);
            document.getElementById("eye2").classList.remove('active')
        }
    }
    return (
        <div className="body-wrapper">
            <div className="form-section">
                <div className="form-container">
                    <div className="upper-head">
                        <a href="index.html" className="logo">
                            <h2>ملاعب</h2>
                        </a>
                    </div>
                    <form action="login" className="login-form">
                        <div className="form-cont">
                            <h2 className="form-head">كلمة سر جديدة</h2>
                            <p className="form-pargh">يمكنك الان انشاء كلمة سر جديدة وتآكيدها</p>
                            <div className="form-group">
                                <label className="form-label">كلمة السر الجديدة</label>
                                <div className="form-input-relative">
                                    <span className="icon-placeholder">
                                        <i className="las la-lock"></i>
                                    </span>
                                    <label className="password-show">
                                        <input type="checkbox" onchange="showPass(this)" />
                                        <i className="iconsax" icon-name="eye" onClick={showPass} id='eye'></i>
                                    </label>
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }   
                                        className="form-input custom-input"
                                        placeholder="كلمة المرور"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">تآكيد كلمة السر</label>
                                <div className="form-input-relative">
                                    <span className="icon-placeholder">
                                        <i className="las la-lock"></i>
                                    </span>
                                    <label className="password-show">
                                        <input type="checkbox" onchange="showPass(this)" />
                                        <i className="iconsax" icon-name="eye" onClick={showRePass} id='eye2'></i>
                                    </label>
                                    <input
                                        type={
                                            showRePassword ? "text" : "password"
                                        }
                                        className="form-input custom-input"
                                        placeholder="كلمة المرور"
                                    />
                                </div>
                            </div>
                            <div className="form-btn-cont">
                                <button className="form-btn" type="submit">التالي</button>
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
