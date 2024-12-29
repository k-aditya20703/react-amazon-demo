import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import Menu from './pages/Menu'
import options from './constant/Constant'
import { lang } from './constant/Lang'
import Account from './pages/Account'
import { cartdata } from './constant/Cartdata'


const Navbar = (props) => {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [prime, setPrime] = useState(false);
    const [searchData, setSearchData] = useState(["Laptop", "Mobile", "Grinder"]);
    const [searchInput, setSearchInput] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);
    const [count, setCount] = useState(0);
    const [viewLang, setViewLang] = useState(false);
    const [viewAccount, setViewAccount] = useState(false);
    const [viewPhone, setViewPhone] = useState(false);
    const [language, setLanguage] = useState([
        { "Name": 'English - Eng', "selected": true },
        { "Name": 'Hindi - Hi', "selected": false },
        { "Name": 'Telugu - Te', "selected": false },
        { "Name": 'France - Fr', "selected": false },
        { "Name": 'English - Eng', "selected": false },
        { "Name": 'Hindi - Hi', "selected": false },
        { "Name": 'Telugu - Te', "selected": false },
        { "Name": 'France - Fr', "selected": false }
    ])
    useEffect(() => {
            
    }, [props.cCount]);

    const showHistory = () => {
        if (show === true) {
            setShow(false);
        } else {
            setShow(true);
        }
        if (viewAccount === true) {
            setViewAccount(false);
        }
        if (viewLang === true) {
            setViewLang(false);
        }
        if (prime === true) {
            setPrime(false);
        }
        if (visible === true) {
            setVisible(false);
        }
    }

    const menuBar = () => {
        if (visible === true) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        if (viewAccount === true) {
            setViewAccount(false);
        }
        if (viewLang === true) {
            setViewLang(false);
        }
        if (prime === true) {
            setPrime(false);

        }
        if (show === true) {
            setShow(false);
        }
    }

    const handlePrime = () => {
        if (prime === false) {
            setPrime(true);
        }
        else {
            setPrime(false);
        }
        if (viewAccount === true) {
            setViewAccount(false);
        }
        if (viewLang === true) {
            setViewLang(false);
        }
        if (show === true) {
            setShow(false);
        }
        if (visible === true) {
            setVisible(false);
        }
    }
    const updateSearchInput = (event) => {
        console.log(event.target.value);
        setSearchInput(event.target.value);
    }
    const updateHistory = () => {
        searchData.push(searchInput);
        setSearchClicked(true);
        setCount(count + 1);
    }

    const showLang = () => {
        if (viewLang === true) {
            setViewLang(false);
        } else {
            setViewLang(true);
        }
        if (viewAccount === true) {
            setViewAccount(false);
        }
        if (show === true) {
            setShow(false);
        }
        if (prime === true) {
            setPrime(false);
        }
        if (visible === true) {
            setVisible(false);
        }

    }
    const showAccount = () => {
        if (viewAccount === true) {
            setViewAccount(false);

        } else {
            setViewAccount(true);
        }
        if (viewLang === true) {
            setViewLang(false);
        }
        if (show === true) {
            setShow(false);
        }
        if (prime === true) {
            setPrime(false);
        }
        if (visible === true) {
            setVisible(false);
        }
    }
    const handleLanguage = (e, key) => {
        console.log(e.target.checked);
        console.log(key);

        // language.map((lang, index) => {
        //     if (index === key) {
        //         return { ...lang, 'selected': e.target.checked }
        //         setLanguage(...lang, 'selected': e.target.checked);
        //     }
            
        // })
        // language.map((item,index) => (
            
        //     index === key ?{ ...item, 'selected': e.target.checked} : item 
        //     console.log(index === key);

        //   ))
          console.log(language);

          const newState = language.map((obj,index) => {
            if (index === key) {
                let myObj = {...obj,'selected' : e.target.checked };
                return myObj;
            }else{
                let myObj = {...obj,'selected' : false };
                return myObj;
            }
            return obj;
        });
    console.log(newState);
    setLanguage(newState);
        
        
    }
    return (
        <>
            <div>


                <div className='top-nav'>
                    <div className='address'>
                        <Link className='logo' to='/'>ama<span className='design'>zon</span></Link>
                        <i className="bi bi-geo-alt" ></i>
                        <div className='inneraddress'>
                            <div className='light-font'>Delivering to Hinjilicut 761102</div>
                            <div className='heavy-font'>Update Location</div>
                        </div>

                    </div>
                    <div>

                    </div>
                    <div className='searchbar'>
                        {/* <Select className='searchbox' placeholder='Search Amazon.in' options = {options}/> */}
                        <input type='text' placeholder='Search Amazon.in' onClick={showHistory} onChange={(e) => updateSearchInput(e)}></input>
                        <i className="bi bi-search" id='search' onClick={updateHistory}></i>


                    </div>
                    {
                        show && <div className='history'>
                            {searchData.map((data) => {
                                return (
                                    <p>{data}</p>
                                )
                            })}


                        </div>
                    }
                    <div>
                        <h4 onClick={showLang}><i className="bi bi-flag-fill"></i> EN </h4>
                    </div>
                    <div className='account' onClick={showAccount}>
                        <div className='light-font'>Hello , Sign in</div>
                        <div className='heavy-font'>Account & Lists</div>
                    </div>
                    <div className='account' >
                        <div className='light-font'>Returns</div>
                        <div className='heavy-font'>& Orders</div>
                    </div>
                    <div>
                        
                        <NavLink to='/cart'><h4><button className='cart-btn'>{

                            cartdata.length
                        }</button><i className="bi bi-cart-plus-fill add-cart"></i> Cart </h4></NavLink>
                    </div>
                </div>

                <nav>
                    <ul>
                        <li><Link><i className="bi bi-list" onClick={menuBar}></i></Link></li>
                        <li><NavLink to='/all'>All</NavLink></li>
                        <li><NavLink to='/fresh'>Fresh</NavLink></li>
                        <li><NavLink to='/mxplayer'>MX Player</NavLink></li>
                        <li><NavLink to='/sell'>Sell</NavLink></li>
                        <li><NavLink to='/bestseller'>Best Sellers</NavLink></li>
                        <li><NavLink to='/Today'>Today's Deals</NavLink></li>
                        <li><NavLink to='/mobile'>Mobiles</NavLink></li>
                        <li><NavLink to='/customer'>Customer Service</NavLink></li>
                        <li><NavLink to='/prime' onClick={handlePrime} >Prime</NavLink></li>
                        <li><NavLink to='/electronics'>Electronics</NavLink></li>
                        <li><NavLink to='/home'>Home & Kitchen</NavLink></li>
                        <li><NavLink to='/amazonpay'>Amazon Pay</NavLink></li>
                        <li><NavLink to='/new'>New Releases</NavLink></li>
                        <li><NavLink to='/fashio'>Fashion</NavLink></li>
                        <li><NavLink to='/car'>Car & Motorbikes</NavLink></li>
                    </ul>

                </nav>
                {viewLang && <div className='lang-tray'>
                    {language.map((l, key) => {
                        return (
                            <div>
                                <input type='checkbox' checked={l.selected} onChange={(e) => handleLanguage(e, key)}></input>
                                <p>{l.Name}</p>
                            </div>

                        )
                    })}
                </div>}

                {visible &&
                    <div>
                        <Menu />
                    </div>
                }
                {prime && <div>
                    <img src='./Amazon-prime.jpg' alt='Myimage' className='prime-image' />
                </div>}
                {viewAccount && <div>
                    <Account />
                </div>}
                

            </div>
        </>
    )
}

export default Navbar
