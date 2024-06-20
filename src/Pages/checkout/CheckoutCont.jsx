import React from 'react'
import AddressData from './AddressData'
import Payment from './Payment'

export default function CheckoutCont() {
    return (
        <section className="content-section single-content">
            <div className="container">
                <div className="checkout-grid">
                    <AddressData></AddressData>
                    <Payment></Payment>
                </div>
            </div>
        </section>
    )
}
