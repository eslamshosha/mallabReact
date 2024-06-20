import React from 'react'
import product1 from '../../assets/product/01.png'
import product2 from '../../assets/product/02.png'
import product3 from '../../assets/product/03.png'
import { Link } from 'react-router-dom';

export default function FilterItems() {
    let products = [
        { id: 1, img: product1, discount: 40, name: "حذاء رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 2, img: product2, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 240, newPrice: 210 },
        { id: 3, img: product3, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 340, newPrice: 310 },
        { id: 4, img: product2, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 7, img: product3, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 5, img: product1, discount: 40, name: "حذاء رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 6, img: product2, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
    ]
    return (
        <div className="items-filter">
            <div className="items-header">
                <div className="items-flex">
                    <h3 className="items-title">التصفيات المطبقة</h3>
                    <div className="item-result">
                        <span>اجهزة الكترونية</span>
                        <button><i className="fa-regular fa-xmark"></i></button>
                    </div>
                </div>
                <div className="result-number">
                    <span>Results found.</span>
                    <span className="result-num">65,867</span>
                </div>
            </div>
            <div className="items-grid">
                {
                    products.map(product =>
                        <div className="item">
                            <div className="item-img-container">
                                <Link to='/product' className="item-img">
                                    <img className="img-fluid" src={product.img} alt='Product' />
                                </Link>
                            </div>
                            <h5 className="item-name-container">
                                <Link to='/product' className="item-name">
                                    {product.name}
                                </Link>
                            </h5>
                            <div className="prices">
                                <del className="old-price"> {product.oldPrice} ر.س </del>
                                <strong className="price"> {product.newPrice} ر.س </strong>
                            </div>
                            <span className="sale">{`-${product.discount}%`} </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
