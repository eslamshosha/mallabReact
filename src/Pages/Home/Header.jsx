import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile-1.png'
export default function Header() {

    function openNav() {
        document.getElementById('navgition').classList.add('reset-left')
    }
    function closeNav() {

        document.getElementById('navgition').classList.remove('reset-left')
    }
    return (
        <header>
            <div className="container">
                <div className="top-header">
                    <div className="nav-header">
                        <Link to="/" className="logo">
                            <h2>ملاعب</h2>
                        </Link>
                        <div className="search-cont">
                            <div className="search-section">
                                <form className="search-form">
                                    <input className="search-input" type="text" name="" value="" placeholder="ابحث..." />
                                    <button className="search-button">
                                        <i className="iconsax" icon-name="search-normal-2"></i>
                                    </button>
                                </form>
                            </div>
                            <Link className="filter-btn" to='/filter'>
                                <i className="iconsax" icon-name="filter-search"></i>
                                تصفية
                            </Link>
                        </div>

                        <div className="navgition" id='navgition'>
                            <div className="nav-head">
                                <button className="close-menu" id='close-menu' onClick={closeNav}>
                                    <i className="iconsax" icon-name="x"></i>
                                </button>
                            </div>
                            <ul className="big-menu list-unstyled">
                                <li className="active">
                                    <Link to="/"> الرئيسية </Link>
                                </li>
                                <li>
                                    <a href="/#stadium"> ملاعب</a>
                                </li>
                                <li>
                                    <a href="/#academy"> اكادميات</a>
                                </li>
                                <li>
                                    <a href="/#championship"> بطولات</a>
                                </li>
                                <li>
                                    <Link to="/store"> المتجر</Link>
                                </li>
                                <li>
                                    <a href="/#videos"> مقاطع</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-btn">
                            <a href="/cart" className="cart-ancor">
                                <i className="iconsax" icon-name="shopping-cart"></i>
                                <span className="counter">0</span>
                            </a>
                            <div className="user-profile dropdown">
                                <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                    <div className="user-info">
                                        <img src={profile} className="profile-img" alt='Profile' />
                                        <span>عمر اشرف</span>
                                        <i className="iconsax" icon-name="chevron-down"></i>
                                    </div>
                                </div>
                                <ul className="profile-menu dropdown-menu">
                                    <li>
                                        <a href="/account/general">
                                            <i className="iconsax" icon-name="user-1"></i>
                                            <span>حسابي</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/orders">
                                            <i className="iconsax" icon-name="basket-tick-1"></i>
                                            <span>طلباتي السابقة</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#contact">
                                            <i className="iconsax" icon-name="message-dash-2"></i>
                                            <span>تواصل معنا</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/login" className="logout">
                                            <i className="iconsax" icon-name="logout-2"></i>
                                            <span>الخروج</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#11" className="about-link d-none">تسجيل</a>
                            <button className="menu-bars" id="menu-id" onClick={openNav}>
                                <i className="iconsax" icon-name="hamburger-menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
