import React, { useState } from 'react'

export default function Password() {
    const [showPassword, setShowPassword] = useState(false);
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
    const [showPassword2, setShowPassword2] = useState(false);
    function showPass2() {
        if (showPassword2) {
            setShowPassword2(false);
            document.getElementById("eye2").classList.add('active')
        }
        else {
            setShowPassword2(true);
            document.getElementById("eye2").classList.remove('active')
        }
    }
    const [showPassword3, setShowPassword3] = useState(false);
    function showPass3() {
        if (showPassword3) {
            setShowPassword3(false);
            document.getElementById("eye3").classList.add('active')
        }
        else {
            setShowPassword3(true);
            document.getElementById("eye3").classList.remove('active')
        }
    }

    return (
        <div className="acc-form">
            <form action="">
                <div className="form-group">
                    <label className="form-label">كلمة السر الحالية</label>
                    <div className="form-input-relative">
                        <span className="icon-placeholder">
                            <i className="las la-lock"></i>
                        </span>
                        <label className="password-show" id='password-show'>
                            <input type="checkbox"
                                onClick={showPass2}
                            />
                            <i className="iconsax active" icon-name="eye" id='eye2'></i>
                        </label>
                        <input type={showPassword2 ? "text" : "password"} className="form-input custom-input" placeholder="كلمة المرور" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label"> كلمة السر الجديدة</label>
                    <div className="form-input-relative">
                        <span className="icon-placeholder">
                            <i className="las la-lock"></i>
                        </span>
                        <label className="password-show" id='password-show'>
                            <input type="checkbox"
                                onClick={showPass}
                            />
                            <i className="iconsax active" icon-name="eye" id='eye'></i>
                        </label>
                        <input type={showPassword ? "text" : "password"} className="form-input custom-input" placeholder="كلمة المرور" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">تأكيد كلمة السر</label>
                    <div className="form-input-relative">
                        <span className="icon-placeholder">
                            <i className="las la-lock"></i>
                        </span>
                        <label className="password-show" id='password-show'>
                            <input type="checkbox"
                                onClick={showPass3}
                            />
                            <i className="iconsax active" icon-name="eye" id='eye3'></i>
                        </label>
                        <input type={showPassword3 ? "text" : "password"} className="form-input custom-input" placeholder="كلمة المرور" />
                    </div>
                </div>
                <button type="submit" className="acc-btn">حفظ</button>
            </form>
        </div>
    )
}
