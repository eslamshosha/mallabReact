import React from 'react'

export default function StoreFooter() {
    return (
        <footer>
            <div className="container">
                <div    qame="footer-cont">
                    <div className="footer-info">
                        <a href="index.html" className="logo">
                            <h2>ملاعب</h2>
                        </a>
                        <div className="copy-rights">حقوق النشر © 2017 ملاعب مصر</div>
                        <div className="social">
                            <a href="#h" className="social-link">
                                <i className="fa-category fa-linkedin"></i>
                            </a>
                            <a href="#g" className="social-link">
                                <i className="fa-category fa-instagram"></i>
                            </a>
                            <a href="#g" className="social-link">
                                <i className="fa-category fa-square-facebook"></i>
                            </a>
                            <a href="#g" className="social-link">
                                <i className="fa-category fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><a href="#g">الشروط والاحكام</a></li>
                            <li><a href="#g">عن التطبيق</a></li>
                            <li><a href="#g">شروط الخصوصية</a></li>
                            <li><a href="#g">الاسئلة الشائعة</a></li>
                        </ul>
                    </div>
                    <div className="empty-div"></div>
                </div>
            </div>
        </footer>
    )
}
