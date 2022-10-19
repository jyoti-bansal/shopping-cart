import React, { useContext } from 'react'
import {Scrollbars} from 'react-custom-scrollbars-2';
import { Items } from './Items';
import { CartContext } from './Cart';

const ContextCart = () => {
    const {item,clearCart,totalItem,totalAmount}=useContext(CartContext);

    if(item.length===0){
        return(
            <>
      <header>
        <div className='continue-shopping'>
            <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
            <h3>Continue shopping</h3>
        </div> 

        <div className='cart-icon'>
            <img src="./images/cart.jpeg" alt="cart" />
            <p>0</p>
        </div>
      </header>

      <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>0</span> items in shopping cart</p>

        <div className='cart-items'>
            <Scrollbars>
              {
                item.map((currItem)=>{
                    return <Items key={currItem.id} {...currItem}/>
                })
              }
            </Scrollbars>
        </div>

        <div>
            <h3>Cart Total : <span>0</span></h3>
            <button>Checkout</button> 
            <button className='clear-cart'
            onClick={clearCart}
            >Clear-cart</button>
        </div>
      </section>
    </>
        )
    }

  return (
    <>
      <header>
        <div className='continue-shopping'>
            <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
            <h3>Continue shopping</h3>
        </div> 

        <div className='cart-icon'>
            <img src="./images/cart.jpeg" alt="cart" />
            <p>{totalItem}</p>
        </div>
      </header>

      <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>

        <div className='cart-items'>
            <Scrollbars>
              {
                item.map((currItem)=>{
                    return <Items key={currItem.id} {...currItem}/>
                })
              }
            </Scrollbars>
        </div>

        <div className='card-total'>
            <h3>Cart Total : <span>{totalAmount}rs</span></h3>
            <button>Checkout</button> 
            <button className='clear-cart'
            onClick={clearCart}
            >Clear-cart</button>
        </div>
      </section>
    </>
  )
}

export default ContextCart
