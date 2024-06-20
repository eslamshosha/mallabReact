import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-cont">
                    <div className="footer-info">
                        <a href="index.html" className="logo">
                            <h2>ملاعب</h2>
                        </a>
                        <div className="copy-rights">حقوق النشر © 2017 ملاعب مصر</div>
                        <div className="social">
                            <a href="#1" className="social-link">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="#1" className="social-link">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#1" className="social-link">
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                            <a href="#1" className="social-link">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><a href="#1">الشروط والاحكام</a></li>
                            <li><a href="#1">عن التطبيق</a></li>
                            <li><a href="#1">شروط الخصوصية</a></li>
                            <li><a href="#1">الاسئلة الشائعة</a></li>
                        </ul>
                    </div>
                    <div className="empty-div"></div>
                </div>
            </div>
        </footer>
    )
}
