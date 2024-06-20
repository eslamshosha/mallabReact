import React from 'react'
import product1 from '../../assets/product/01.png'
import product2 from '../../assets/product/02.png'
import product3 from '../../assets/product/03.png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Exclusive() {
    let products = [
        { id: 1, img: product1, discount: '-40%', name: "حذاء رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 2, img: product2, discount: '-40%', name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 3, img: product3, discount: '-40%', name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 4, img: product1, discount: '-40%', name: "حذاء رياضى اصلى ", oldPrice: 140, newPrice: 110 },
    ]
    return (
        <section className="product-section">
            <div className="container">
                <div className="section-head">
                    <h3 className="section-title">عروض حصرية</h3>
                    <a href="/product" className="section-more">
                        شاهد الكل <i className="fa-regular fa-arrow-left"></i
                        ></a>
                </div>
                <div className="product-cont">
                    {products.map(product =>
                        <div className="item">
                            <div className="item-img-container">
                                <Link to='/product' className="item-img"> <LazyLoadImage className="img-fluid" src={product.img} /> </Link>
                            </div>
                            <h5 className="item-name-container">
                            <Link to ="/product" className="item-name">  {product.name} </Link>
                            </h5>
                            <div className="prices">
                                <del className="old-price"> {product.oldPrice} ر.س </del>
                                <strong className="price"> {product.newPrice} ر.س </strong>
                            </div>
                            <span className="sale">{product.discount} </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
