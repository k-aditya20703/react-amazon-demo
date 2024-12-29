import React, { useState } from 'react'
import './Mobile.css'
import { Phone } from '../constant/Phone'
import { cartdata } from '../constant/Cartdata'
const Mobiles = (cartCount) => {

  const handleAddToCart = (p) => {
    console.log(p);
    // return (
      cartdata.unshift(
        {
          id: p.id,
          name: p.name,
          discription: p.discription,
          img: p.img,
          price: p.price,
          quantity : 1
        }
      )
      cartCount();

    // )
  }


  return (
    <>
      {
        Phone.map((p,key) => {
          return (
            <div className='grid'>
              <div className='card'>
                <img className='smart-phone' src={p.img} class="card-img-top" alt="..."></img>
                <div className='about'>
                  <h2 className="card-title">{p.name}</h2>
                  <p className="cardtext">{p.discription}</p>
                  <p className='price'>₹ {p.price}</p>
                  <button onClick={()=>handleAddToCart(p,key)} className='addcart'>Add to Cart</button>
                  <button className='buynow'>Buy Now</button>
                </div>
              </div>
            </div>

          )
        })
      }

    </>
  )
}

export default Mobiles
