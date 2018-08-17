import React from "react"

const increase = {
    color: "green",
}

const decrease ={
    color: "red",
}

let preval
let d = new Date()
class Coin extends React.Component{
    constructor(props){
        super(props)
        
            this.state = {
                symbol : "",
                price: 0,
                time: "",
                percentChange1hr : 0,
                percentChange24hr : 0,
               
            }
        
      
    
    
    }

    componentDidMount() {
        this.getNewData()
        this.timerID = setInterval( () => this.getNewData(),5*60000)
        this.getNewData()
        this.setState({
            time: d.toLocaleTimeString()
        })
   
       
   }

   componentWillUnmount(){
     clearInterval(this.timerID)
    
}
 componentWillUpdate(){
     preval = this.state.price
     
 }





getNewData()  {
        let result, u
        u = new Date()
        
        fetch("https://api.coinmarketcap.com/v2/ticker/")
        .then(response => response.json())
        .then(json => result = Object.values(json.data).find((currency) => (currency.name === this.props.coinName) )).then(result => this.setState({
          symbol : result.symbol,  
          price: result.quotes.USD.price.toFixed(2),
          percentChange1hr : result.quotes.USD.percent_change_1h,
          percentChange24hr : result.quotes.USD.percent_change_24h
        })).catch( () => {
          alert("Error! Please check your input")
        })
        this.setState({
            time: u.toLocaleTimeString()
        })
       
    }





render(){
    
    const difference = (Math.abs(preval - this.state.price)).toFixed(2)
    const img = this.props.coinName.replace(/\s/g,"-")
    
    const imageSource = "/img/" + img.toLowerCase() + ".png"
    

    return (
        <div className="col-md-4">
            <div className="card">
            <div className="card-body ">
            
            <img className="card-img-top" src={window.location.origin + imageSource} alt="Card image cap"/><h5 className="card-title">{this.props.coinName} <button className="card-remove" onClick={(e) => {this.props.handleRemoveCoin(this.props.coinName)}}><i className="far fa-trash-alt"></i></button></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.symbol}</h6>
                        <p className="card-text mb-2">Current price:<span style={preval > this.state.price ? decrease : increase}>{this.state.price} $</span> </p>
                        <p className="mb-2">Previous price difference: <span style= { difference > 0 ? decrease: increase }> {difference} $ </span></p>
                        <p><small className="sm-mb">Percentual change 1h: {this.state.percentChange1hr}% </small></p>
                        <p><small className="sm-mb">Percentual change last 24hrs: {this.state.percentChange24hr}% </small></p>
                        </div>
                        <div className="card-footer bg-transparent border-secondary"> <small>Last update: {this.state.time}</small> </div>
                        
                   
                    
                </div>
            </div>
        
        
    )


}
}

export default Coin