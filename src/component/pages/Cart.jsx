import React, { useEffect, useState } from 'react'
import './Cart.css'
import { cartdata } from '../constant/Cartdata'
import { Phone } from '../constant/Phone'



const Cart = () => {
    const [cartData, setCartData] = useState([])
    const [viewDecrement, setViewDecrement] = useState(true)
    const [viewDelete,setViewDelete] = useState(false)

    useEffect(() => {

        setCartData(cartdata)
    }, [])




    const handleDecrement = (cartId,cdata) => {
        console.log(cdata);
        // cdata.quantity === 1 ? setViewDelete(true):setViewDelete(false);
        setCartData(
            cartData.map((cart) => {
                return (
                    cart.id === cartId ? {
                        ...cart,
                        quantity: cart.quantity - 1
                    } : cart

                )

            })

        )
        if (cdata.quantity === 1 ) {
                 setViewDecrement(false); 
                 setViewDelete(true);
                }else{setViewDecrement(true)}

    }
    const handleIncrement = (cartId) => {
        console.log(cartId);
        setCartData(
            cartData.map((cart) => {
                return (
                    cart.id === cartId ? {
                        ...cart,
                        quantity: cart.quantity + 1
                    } : cart

                )
            })
        )
        if (cartdata.map((cartQuantity) => {
            return (
                cartQuantity.quantity > 0
            )
        })) { setViewDecrement(true); setViewDelete(false) } 

    }
        
        // console.log(cartdata);

    

    return (
        <>
            <div className='cart-shopping'>
                <h2 className='cart-header'>Shopping Cart</h2>
                <p className='deselect-link'>Deselect all items</p><hr></hr>
            </div>

            {cartData.map((cart) => {
                return (
                    <div className='cartpage'>

                        <div className='cart-content'>
                            <input className='select' type='checkbox'></input>
                            <img className='itom-img' src={cart.img}></img>
                            <div>
                                <h2>{cart.name}</h2>
                                <p>{cart.discription}</p>
                                <h3>₹ {cart.price}</h3>
                                <div className='counter-btn'>
                                {viewDelete &&<button className='delete'><i className="bi bi-trash3-fill"></i></button>}
                                    {viewDecrement && <button onClick={() => handleDecrement(cart.id,cart)} className='decrement'>-</button>}
                                    <p className='quantity'>{cart.quantity}</p>
                                    <button onClick={() => handleIncrement(cart.id)} className='increment'>+</button>
                                </div>
                            </div>
                            <div className='price-per-product'>
                                <h3>₹ {cart.price}</h3>
                            </div>
                        </div><hr></hr>
                        <div className='total-amount'>
                            <p>Sub Total {cart.quantity} itoms : <span><b> ₹ {cart.price * cart.quantity}</b></span></p>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default Cart
