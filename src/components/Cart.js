import React, { createContext, useEffect, useReducer } from 'react'
import './cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

export const CartContext=createContext();

const initialState={
    item:products,
    totalAmount:0,
    totalItem:0,
}

const Cart = () => {
    // const [item,setItem]=useState(produ cts);
    const [state,dispatch]=useReducer(reducer,initialState);

    //to delete individual elements from cart(items.js)
    const removeItem=(id)=>{
       return dispatch({
        type:"REMOVE_ITEM" ,
        payload:id,
       })
    }

    //to clear whole cart
    const clearCart=()=>{
        return dispatch({
            type:"CLEAR_CART"
        })
    }

    const increment=(id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id
        })
    }

    const decrement=(id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })
    }

    //we will use the useEffect to update the data
    useEffect(()=>{
        dispatch({type:"GET_TOTAL"});
    }, [state.item]);

  return (
    <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
       <ContextCart/>
    </CartContext.Provider>
  )
}

export default Cart
