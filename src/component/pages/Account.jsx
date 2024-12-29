import React, { useState } from 'react'

import { Lists } from '../constant/List'
import './Account.css'
import Signin from './Signin'

const Account = () => {
    const[viewSignin,setViewSignin]=useState(false)
    const[hideAccount,setHideAccount]=useState(true)

    const handleSignin = ()=>{
        if(viewSignin === false){
            setViewSignin(true);
        }
        if(hideAccount===true){
            setHideAccount(false);
        }
    }
    return (
        <>
          { hideAccount && <div className="grid-container">
                <div className="item1">
                    <button className='sign' onClick={handleSignin}>Sign in</button>
                    <p className='notice'>New Customer ? <span className='active-link'>start here.</span></p>
                </div> 
                
                <div className="item2">
                    <h2>Your Lists</h2>
                    {Lists.map((a)=>{
                        return(
                            <p>{a.list}</p>
                        )
                    })}
                </div>
                <div class="item3">
                    <h2>Your Accounts</h2>
                    {Lists.map((a)=>{
                        return(
                            <p>{a.account}</p>
                        )
                    })}
                </div>
            </div>}
            {viewSignin &&<Signin/>}
        </>
    )
}

export default Account
