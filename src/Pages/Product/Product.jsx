import React from 'react'
import Header from '../Home/Header'
import ProductContent from './ProductContent';
import Breadcrumb from './Breadcrumb';
import Footer from './../Home/Footer';
import Related from './Related';

export default function Product() {
    return (
        <div>
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <ProductContent></ProductContent>
            <Related></Related>
            <Footer></Footer>
        </div>
    )
}
