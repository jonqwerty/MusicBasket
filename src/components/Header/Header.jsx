import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './Header.module.css'
import logo from './../../images/logo.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className="img">
                <img src={logo} alt="logo"/>
            </div >
            <div className={s.item}>
                <p >MUSIC BASKET</p>
            </div>
            <div className ={s.link}>
                <div className={s.item}>
                    <NavLink to='/main' activeClassName={s.active}>Main</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/search' activeClassName={s.active}>Search Track</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/about' activeClassName={s.active}>About Artist</NavLink>
                </div>

            </div>
            
        </header>
    )
}

export default Header;