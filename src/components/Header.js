import React from 'react';

const Header = (props) => {
     return (
        
        <div className="header">
            <h1 className="header__text">This is KryptoTracker!</h1>
                <p className="lead">Track your favorite cryptocurrencies in real-time</p>
                <h3 className="subtext">You are currently tracking: {props.length} coin(s).  {props.length === 0 ? `Add one to get started!`: ""} </h3>
        </div>
        
    )
 }


export default Header