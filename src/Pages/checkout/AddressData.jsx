import React from 'react'

export default function AddressData() {
    return (
        <div className="checkout-address">
            <form action="">
                <ul
                    className="nav nav-tabs add-address-cont"
                    id="myTab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link add-select-address active"
                            id="add-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#add"
                            href="#add"
                            type="button"
                            role="tab"
                            aria-controls="add"
                            aria-selected="true"
                        >
                            <i className="fa-regular fa-plus"></i>
                            اضافة عنوان جديد
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link add-select-address"
                            id="choose-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#choose"
                            href="#choose"
                            type="button"
                            role="tab"
                            aria-controls="choose"
                            aria-selected="false"
                        >
                            <i className="las la-address-book"></i>
                            اختر من عناوينك
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="add"
                        role="tabpanel"
                        aria-labelledby="add-tab"
                    >
                        <div className="checkout-input">
                            <div className="form-group">
                                <label className="form-label">الاسم بالكامل</label>
                                <input type="text" className="form-input custom-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">المدينة</label>
                                <div className="form-input-relative custom-input">
                                    <i className="las la-angle-down angle-select"></i>
                                    <i
                                        className="iconsax angle-select"
                                        icon-name="chevron-down"
                                    ></i>

                                    <select className="select_input select2-city" name="city">
                                        <option value="two">الرياض</option>
                                        <option value="three">المدينة</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">عنوان التسليم</label>
                                <input type="text" className="form-input custom-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">رقم الدور والمبني</label>
                                <input type="text" className="form-input custom-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">تفاصيل اضافية</label>
                                <input type="text" className="form-input custom-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">رقم الموبايل</label>
                                <input type="tel" className="form-input custom-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">البريد الالكنروني</label>
                                <input type="email" className="form-input custom-input" />
                            </div>
                            <div className="form-group">
                                <div className="check-width">
                                    <label className="check-label">
                                        <input type="checkbox" />
                                        <span className="checkmark custom-checkmark"></span>
                                        <span className="check-text"
                                        >موافقة علي جميع الشروط والاحكام</span
                                        >
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="apply-btn">حفظ</button>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="choose"
                        role="tabpanel"
                        aria-labelledby="choose-tab"
                    >
                        <div className="address-group">
                            <span className="address-head">اختر من عناوينك</span>
                            <div className="check-group">
                                <div className="check-width">
                                    <label className="check-label">
                                        <input type="radio" name="address" />
                                        <span className="checkmark"></span>
                                        <span className="span-text"
                                        >الدمام , السعوديه , مركز باشالوش الوطني</span
                                        >
                                    </label>
                                </div>
                                <div className="check-width">
                                    <label className="check-label">
                                        <input type="radio" name="address" />
                                        <span className="checkmark"></span>
                                        <span className="span-text"
                                        >الدمام , السعوديه , مركز باشالوش الوطني</span
                                        >
                                    </label>
                                </div>
                                <div className="check-width">
                                    <label className="check-label">
                                        <input type="radio" name="address" />
                                        <span className="checkmark"></span>
                                        <span className="span-text"
                                        >الدمام , السعوديه , مركز باشالوش الوطني</span
                                        >
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
