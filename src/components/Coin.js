import React from 'react'
import '../App.css';

function Coin( {name, price, symbol, icon}) {
    return (


        <div style={{paddingTop: "3%", paddingBottom: "2%"}}>
            <div className="coinsCard" style={{
                border: "1px solid black", 
                margin: "0% 30% 0% 30%", 
                padding: "2% 2% 2% 2%", 
                color: "white",
                fontFamily: "Open Sans"}}>
                    <h3>Name: {name}</h3>
                    <img style={{height: "70px", width:"70px"}} src={icon}/>
                    <h4>Price: $ {price}</h4>
                    <h5>Symbol: {symbol}  </h5>
            </div>
        </div>
        
    )
}

export default Coin
