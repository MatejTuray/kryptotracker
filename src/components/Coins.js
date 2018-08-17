import React from 'react';
import Coin from "./Coin"
const Coins = (props) => {

    return (
      <div>
       
        
        
          <div className="row">
            {props.data.map((currency,index) => (
            <Coin
            key={currency}
            count={index+1}
           
            coinName={currency}
     
            handleRemoveCoin={props.handleRemoveCoin}
            />
            ))
             }
             </div>
             
      </div>
    
    );
  };
  
  export default Coins;
  