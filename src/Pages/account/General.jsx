import React from 'react'

export default function General() {
    return (
        <div className="acc-form">
            <form action="">
                <div className="form-group">
                    <label className="form-label">الاسم</label>
                    <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">الايميل</label>
                    <input type="text" className="form-input" />
                </div>
                <button type="submit" className="acc-btn">حفظ</button>
            </form>
        </div>
    )
}
