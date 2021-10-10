import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user , logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                <div style={{display:'flex' ,alignItems:'center' ,justifyContent:'center' ,padding:'10px 0'}}>
                {user.email && <img style={{width:'50px', paddingTop:'-10px', marginTop:'10px' , borderRadius:'50%' ,marginRight:'10px'}} src={user.photoURL} alt="" />}
                {user.email && <span style={{color:'#fff'}}>{user.displayName}</span>}
                {user.email ? <button style={{padding:'8px 20px ' , borderRadius:'5px' , marginLeft:'10px'}}  onClick={logOut}>log out</button> : <NavLink to="/login">Sign in</NavLink>  }
                </div>

                {/* <NavLink to="/register">Registration</NavLink> */}
               
            </nav>
        </div>
    );
};



export default Header;