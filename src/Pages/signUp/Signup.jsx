import React from 'react'
import LoginSide from '../loginSide/LoginSide'
import facebook from '../../assets/button-facebook.png'
import google from '../../assets/button-google.png'

export default function Signup() {
  return (
    <div className="body-wrapper">
      <div className="form-section">
        <div className="form-container">
          <div className="upper-head">
            <a href="index.html" className="logo">
              <h2>ملاعب</h2>
            </a>
          </div>
          <form action="" className="login-form">
            <div className="form-cont">
              <h2 className="form-head">اهلا بيك انشآ حساب</h2>
              <div className="register-ancor">
                <span className="register-span">لديك حساب بالفعل؟ </span>
                <a href="login.html" className="register-btn"> تسجيل دخول</a>
              </div>
              <div className="form-group">
                <label className="form-label">اسمك</label>
                <input type="text" className="form-input custom-input" />
              </div>
              <div className="form-group">
                <label className="form-label">البريد الالكتروني</label>
                <input type="email" className="form-input custom-input" />
              </div>
              <div className="form-group">
                <label className="form-label">كلمة السر</label>
                <div className="form-input-relative">
                  <span className="icon-placeholder">
                    <i className="las la-lock"></i>
                  </span>
                  <label className="password-show">
                    <input type="checkbox" onchange="showPass(this)" />
                    <i className="iconsax" icon-name="eye"></i>
                  </label>
                  <input
                    type="password"
                    className="form-input custom-input"
                    placeholder="كلمة المرور"
                  />
                </div>
              </div>
              <div className="form-btn-cont">
                <button className="form-btn" type="submit">انشاء حساب</button>
              </div>
              <div className="social-login">
                <a href="#d">
                  <img src={facebook} alt="social-login" />
                </a>
                <a href="#d">
                  <img src={google} alt="social-login" />
                </a>
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
