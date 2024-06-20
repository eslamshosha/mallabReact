import React from 'react'
import Header from './../Home/Header';
import Breadcrumb from './../Product/Breadcrumb';
import Footer from './../Home/Footer';
import CheckoutCont from './CheckoutCont';

export default function Checkout() {
    return (
        <div>
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <CheckoutCont></CheckoutCont>
            <Footer></Footer>
        </div>
    )
}
