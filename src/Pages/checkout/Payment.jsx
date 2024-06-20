import React from 'react'
import paymentImg from '../../assets/pay-img.png'
import paymentImg2 from '../../assets/offer/img.png'

export default function Payment() {
    let products = [
        { id: 1, img: paymentImg2, discount: '-40%', name: "حذاء رياضي خاص من ماركة اديداس ", price: 140, quntity: 2 },
        { id: 2, img: paymentImg2, discount: '-40%', name: "حذاء رياضي خاص من ماركة نايكى ", price: 240, quntity: 3 },
    ]
    let total =0;
    let delevery = 25;
    let discount = 12;
    
    for (let i = 0; i < products.length; i++) {
        total = total+products[i].price;
        
    }
    let lastTotal=total+delevery-discount;
    return (
        <div className="checkout-pay">
            <form action="">
                {products.map((product) =>
                    <div className="checkout-item">
                        <div className="checkout-info">
                            <figure>
                                <img src={product.img} alt="product" />
                            </figure>
                            <div className="checkout-name">
                                {product.name}
                            </div>
                            <div className="checkout-span">ك:{product.quntity}</div>
                        </div>
                        <div className="order-price">{product.price} ريال</div>
                    </div>
                )}
                <div className="checkout-table-cont">
                    <div className="checkout-table">
                        <span className="checkout-text"> المجموع </span>
                        <div className="order-price">{total} ريال</div>
                    </div>
                    <div className="checkout-table">
                        <span className="checkout-text"> التوصيل </span>
                        <div className="order-price">{delevery} ريال</div>
                    </div>
                    <div className="checkout-table">
                        <span className="checkout-text"> الخصم </span>
                        <div className="order-price">{discount} ريال</div>
                    </div>
                    <div className="checkout-table total">
                        <span className="checkout-text"> المجموع الكلي </span>
                        <div className="order-price">{lastTotal} ريال</div>
                    </div>
                </div>
                <div className="checkout-dicount">
                    <input
                        type="text"
                        placeholder="كود خصم"
                        className="discount-input"
                    />
                    <button type="button" className="discount-btn">
                        اضافة الكوبون
                    </button>
                </div>
                <div className="pay-group">
                    <div className="check-group">
                        <div className="check-width">
                            <label className="check-label">
                                <input type="radio" name="address" />
                                <span className="checkmark"></span>
                                <span className="span-text">بنك</span>
                            </label>
                            <figure className="pay-img">
                                <img src={paymentImg} alt="pay-img" />
                            </figure>
                        </div>
                        <div className="check-width">
                            <label className="check-label">
                                <input type="radio" name="address" />
                                <span className="checkmark"></span>
                                <span className="span-text">مدي</span>
                            </label>
                            <img src={paymentImg} alt="pay-img" />
                        </div>
                        <div className="check-width">
                            <label className="check-label">
                                <input type="radio" name="address" />
                                <span className="checkmark"></span>
                                <span className="span-text">فوري</span>
                            </label>
                            <img src={paymentImg} alt="pay-img" />
                        </div>
                        <div className="check-width">
                            <label className="check-label">
                                <input type="radio" name="address" />
                                <span className="checkmark"></span>
                                <span className="span-text">الدفع عند الاستلام</span>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="custom-btn">اتمام الشراء</button>
            </form>
        </div>
    )
}
