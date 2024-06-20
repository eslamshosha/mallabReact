import React, { useState } from 'react'
import img1 from '../../assets/offer/img.png'
import img2 from '../../assets/product/01.png'
import img3 from '../../assets/product/02.png'
import { NavLink } from 'react-router-dom'



export default function CartContent() {

  let [cartItems, setItems] = useState([
    { id: 1, img: img1, name: " حذاء رياضي خاص", price: 100, count: 1 },
    { id: 2, img: img2, name: " حذاء رياضي خاص", price: 131, count: 1 },
    { id: 3, img: img3, name: " قميص رياضي خاص", price: 521, count: 1 },
  ])
  let newArr = [...cartItems]
  let prices = 0
  for (let i = 0; i < cartItems.length; i++) {
    prices = prices + cartItems[i].price;

  }
  let [total, setTotal] = useState(prices);
  let tawseel = 25
  
  return (
    <section className="content-section single-content">
      <div className="container">
        <div className="cart-grid">
          <div className="cart-table">
            <table className="table-group">
              <thead>
                <tr>
                  <th colspan="5">المنتج</th>
                  <th colspan="2">السعر</th>
                  <th colspan="2">الكمية</th>
                  <th colspan="2">المبلغ كامل</th>
                  <th colspan="1"></th>
                </tr>
              </thead>
              <tbody>

                {cartItems.map((item) =>
                  <tr>
                    <td colspan="5">
                      <div className="cart-flex">
                        <figure className="cart-figure">
                          <img className="img-fluid" src={item.img} alt='offer' />
                        </figure>
                        <div className="cart-content">{item.name}</div>
                      </div>
                    </td>
                    <td colspan="2">{item.price} ريال</td>
                    <td colspan="2">
                      <div className="item-qty">

                        <NavLink role="button" className="qty-control qty-plus" onClick={() => {
                          newArr[item.id - 1].count++
                          setItems(newArr)
                          setTotal(total + (item.price))
                        }
                        }
                        >
                          <i className="fa-regular fa-plus"></i>
                        </NavLink>
                        <NavLink role="button" className="qty-control qty-minus" onClick={() => {
                          item.count > 1 ? setTotal(total - (item.price)) : setTotal(total)
                          item.count > 1 ? (newArr[item.id - 1].count--) : newArr[item.id - 1].count = 1
                          setItems(newArr)
                        }
                        }>
                          <i className="fa-regular fa-minus"></i>
                        </NavLink>
                        <input type="number" className="qty-input" value={item.count} data-max="10" data-min="1" />
                      </div>
                    </td>
                    <td colspan="2">{item.price * item.count} ريال</td>
                    <td colspan="1" className="table-sm-btn">
                      <button className="table-btn">
                        <i className="fa-regular fa-xmark"></i>
                      </button>
                    </td>
                    {/* <div>{setTotal(total + (item.price*item.count))}</div> */}
                  </tr>
                )}
              </tbody>
            </table>
            <div className="cart-btns">
              <button type="button">تحديث السلة</button>
              <a href="/store">العودة للتسوق</a>
            </div>
          </div>
          <div className="cart-total">
            <div className="checkout-table-cont">
              <h5 className="cart-table-head">مجموع الطلب</h5>
              <div className="checkout-table">
                <span className="checkout-text"> المجموع </span>
                <div className="order-price">{total} ريال</div>
              </div>
              <div className="checkout-table">
                <span className="checkout-text"> التوصيل </span>
                <div className="order-price">{tawseel} ريال</div>
              </div>
              <div className="checkout-table total">
                <span className="checkout-text"> المجموع الكلي </span>
                <div className="order-price">{total + tawseel} ريال</div>
              </div>
            </div>
            <button type="submit" className="custom-btn">اتمام الشراء</button>
          </div>
        </div>
      </div>
    </section>
  )
}
