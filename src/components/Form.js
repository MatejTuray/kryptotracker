import React from 'react';
import {Typeahead }from "react-bootstrap-typeahead"

class Form extends React.Component{
    constructor(props){
        super(props)
    this.state = {
            options :  ["Bitcoin", "Litecoin", "XRP", "Nxt", "Dogecoin", "DigiByte", "ReddCoin", "Dash", "MonaCoin", "MaidSafeCoin", "Monero", "Bytecoin", "BitShares", "Stellar", "Emercoin", "Verge", "Tether", "NEM", "Ethereum", "Siacoin", "Augur", "Decred", "PIVX", "Lisk", "DigixDAO", "Steem", "Waves", "Ardor", "Ethereum Classic", "Stratis", "NEO", "Zcash", "Golem", "Maker", "Komodo", "Nano", "Ark", "Qtum", "Basic Attention Token", "ZenCash", "Aeternity", "Metaverse ETP", "IOTA", "Bancor", "GXChain", "FunFair", "TenX", "Status", "EOS", "MCO", "Gas", "Populous", "OmiseGO", "Bitcoin Cash", "Binance Coin", "Bytom", "Dentacoin", "0x", "Hshare", "Nebulas", "Waltonchain", "Loopring", "TRON", "Decentraland", "ChainLink", "Kyber Network", "Kin", "Cardano", "Tezos", "RChain", "Cryptonex", "Aion", "Bitcoin Gold", "KuCoin Shares", "Nuls", "ICON", "Power Ledger", "Paypex", "Bitcoin Diamond", "aelf", "WAX", "Bibox Token", "Mixin", "MOAC", "IOST", "Zilliqa", "Elastos", "Huobi Token", "Ontology", "Bitcoin Private", "Loom Network", "Dropil", "Pundi X", "Wanchain", "Mithril", "ODEM", "Holo", "Aurora", "empowr coin", "VeChain"]
        }
    }

    render(){
        return(
            <div>
        
            
            <form className="" onSubmit={this.props.handleAddCoin}>
            <div className="">
             <Typeahead ref={(typeahead) => this.typeahead = typeahead} clearButton={true} placeholder="Bitcoin, Ethereum..." options={this.state.options}> </Typeahead><button className="btn btn-primary "><i className="fas fa-plus-square"></i></button>
             </div>
            </form>
            
                  
            
            
            </div>
            
        )

    }
}

export default Form