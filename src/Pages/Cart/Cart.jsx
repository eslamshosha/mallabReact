import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import CartContent from './CartContent'
import Breadcrumb from '../Product/Breadcrumb'

export default function Cart() {
  return (
    <div>
        <Header></Header>
        <Breadcrumb></Breadcrumb>
        <CartContent></CartContent>
        <Footer></Footer>
    </div>
  )
}
