import React from 'react'
import LoginSide from '../loginSide/LoginSide'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';
export default function OTPCode() {
    // const validationSchema = Yup.object({
    //     optField: Yup.string().required("Required")
    //     // password: Yup.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password Not Match "),
    // });
    // function submitOTP() {
    //     Navigate('/cart');
    //     console.log("hihihihhihi");
    // }
    // let formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //     },
    //     // validate: validation,
    //     validationSchema,
    //     onSubmit: submitOTP
    // })
    function handleChange() {
        if (document.getElementById('i1').value!="") {
            document.getElementById('i2').focus();
        }
        if (document.getElementById('i2').value!="") {
            document.getElementById('i3').focus();
        }
        if (document.getElementById('i3').value!="") {
            document.getElementById('i4').focus();
        }
        if (document.getElementById('i4').value!="") {
            document.getElementById('i4').blur();
            
        }
        
    }
    return (
        <div className="body-wrapper">
            <div className="form-section">
                <div className="form-container">
                    <div className="upper-head">
                        <a href="index.html" className="logo"> <h2>ملاعب</h2>  </a>
                    </div>
                    <form action="/reset" className="login-form"
                    //  onSubmit={formik.handleSubmit}
                    >
                        <div className="form-cont">
                            <h2 className="form-head">نسيت كلمة المرور</h2>
                            <p className="form-pargh">
                                لاتقلق سوف نساعدك علي استعادتة ارسلنا كود الي
                                <span>oa45****@gm***.com</span>
                            </p>
                            <div className="form-group digit-group otp-form">
                                <input type="number" name="optField-1" className="otp-field" maxlength="1" onChange={handleChange} id='i1' />
                                <input type="number" name="optField-2" className="otp-field" maxlength="1" onChange={handleChange} id='i2' />
                                <input type="number" name="optField-3" className="otp-field" maxlength="1" onChange={handleChange} id='i3' />
                                <input type='number' name="optField-4" className="otp-field" maxlength="1" onChange={handleChange} id='i4' />
                            </div>
                            <div className="register-ancor">
                                <span className="register-span">لم تستلم الكود حتي الان ؟</span>
                                <button type="button" className="register-btn">اعادة ارسال</button>
                            </div>
                            <div className="form-btn-cont">
                                <button className="form-btn" type="submit" id='15'>التالي</button>
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
