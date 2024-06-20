import React from 'react'
import profile from '../../assets/profile.jpeg'
import {  NavLink, Outlet } from 'react-router-dom'
export default function AccountContent() {
    return (
        <section className="content-section single-content">
            <div className="container">
                <div className="account">
                    <div className="account-details">
                        <div
                            id="image-background"
                            style={{backgroundImage:`url(${profile})`}}
                        >
                            <input
                                type="file"
                                accept="image/*"
                                onchange="updateImage()"
                                id="js-imageUpload"
                            />
                            <i className="fa-regular fa-arrow-up-from-bracket"></i>
                        </div>
                        
                        <div className="profile-info">
                            <div className="profile-info-head">
                                <span>عمر اشرف</span> , اعدادات عامة
                            </div>
                            <div className="profile-info-text">قم بتغيير اعدادتك الشخصية</div>
                        </div>
                    </div>
                    <div className="account-cont">
                        <div className="acc-list-cont">
                            <div className="acc-list-head">اعدادت عامة</div>
                            <ul className="acc-list">
                                <li className="acc-item">
                                    <NavLink className="acc-link" to='/account/general'>
                                        تغيير معلوماتك
                                    </NavLink>
                                </li>
                                <li className="acc-item">
                                    <NavLink to='/account/password' className="acc-link">
                                        كلمة السر
                                    </NavLink>
                                </li>
                                <li className="acc-item">
                                    <NavLink to='/account/address' className="acc-link"> العناوين </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </section>
    )
}
