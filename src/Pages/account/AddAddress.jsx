import React from 'react'

export default function AddAddress() {
    return (
        <div className="acc-form">
            <form action="">
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
                    <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">رقم الدور والمبني</label>
                    <input type="text" className="form-input" />
                </div>
                <button type="submit" className="acc-btn">حفظ</button>
            </form>
        </div>
    )
}
