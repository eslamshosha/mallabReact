import React from 'react'
import { Link } from 'react-router-dom';

export default function Address() {
    return (
        <div className="acc-form">
            <Link to="/Account/addAddress" className="acc-btn add-ancor">اضافة جديد</Link>
            <div className="address-cont">
                <div className="address-item">
                    <div className="address-info">
                        <i className="iconsax" icon-name="location"></i>
                        <span>الدمام , السعوديه , مركز باشالوش الوطني</span>
                    </div>
                    <div className="address-btn">
                        <button className="delete">
                            <i className="iconsax" icon-name="trash"></i>
                        </button>
                        <button className="edit">
                            <i className="iconsax" icon-name="edit-2"></i>
                        </button>
                    </div>
                </div>
                <div className="address-item">
                    <div className="address-info">
                        <i className="iconsax" icon-name="location"></i>
                        <span>الدمام , السعوديه , مركز باشالوش الوطني</span>
                    </div>
                    <div className="address-btn">
                        <button className="delete">
                            <i className="iconsax" icon-name="trash"></i>
                        </button>
                        <button className="edit">
                            <i className="iconsax" icon-name="edit-2"></i>
                        </button>
                    </div>
                </div>
                <div className="address-item">
                    <div className="address-info">
                        <i className="iconsax" icon-name="location"></i>
                        <span>الدمام , السعوديه , مركز باشالوش الوطني</span>
                    </div>
                    <div className="address-btn">
                        <button className="delete">
                            <i className="iconsax" icon-name="trash"></i>
                        </button>
                        <button className="edit">
                            <i className="iconsax" icon-name="edit-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
