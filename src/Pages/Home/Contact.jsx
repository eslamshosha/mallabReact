import React from 'react'

export default function Contact() {
    return (
        <section className="contact-section" id='contact'>
            <div className="contact-background">
                <span></span>
            </div>
            <div className="container">
                <div className="contact-cont">
                    <div className="contact-content">
                        <h3 className="contact-title">تواصل معنا الان</h3>
                        <p className="contact-pargh">
                            اكتشف ميزات ملاعب التي ستغير قواعد اللعبة وانظر كيف يمكننا مساعدتك
                            على النجاح!
                        </p>
                    </div>
                    <div className="contact-form">
                        <h4 className="contact-head">تواصل معنا بكل سهولة</h4>
                        <p className="contact-text">
                            راسلني إذا كنت تريد العمل معًا على شيء مثير. أو هل تحتاج إلى
                            مساعدتنا؟ لا تتردد في الاتصال بنا.
                        </p>
                        <form action="">
                            <div className="contact-input" >
                                <div className="input-grid">
                                    <div className="form-group">
                                        <label className="form-label"> الاسم </label>
                                        <input type="text" className="form-input" placeholder="name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label"> الايميل</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label"> العنوان </label>
                                    <input type="text" className="form-input" placeholder="name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label"> الرسالة </label>
                                    <textarea className="form-input"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="submit-btn">ارسل الان</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
