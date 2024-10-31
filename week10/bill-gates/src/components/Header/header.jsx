import React from 'react';
import {useBalance} from '../../context/balanceContext';
import './header.css';
import { useState, useEffect } from 'react';


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100){
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const {balance, totalSpend} = useBalance();
    const remainingBalance = balance - totalSpend;
    return(
        <div className="header">
            <img src="images/billgates.jpg" 
            alt="Bill"
            className='profile-pic' 
            />
            <h1>Spend Bill Gates Money</h1>
            <p className={`data header ${isSticky ? "fixed-header" : ""}`}>{balance.toLocaleString("en-US")}</p>
        </div>
    );
};

export default Header;