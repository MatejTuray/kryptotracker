import React from 'react';

import Header from "./components/Header"
import Form from "./components/Form";
import Coins from "./components/Coins";
import "./styles/styles.css";





// TODO
// even better error handling!
// push notifications!



class App extends React.Component {
  constructor(props,state){
    super(props,state)
  this.handleAddCoin = this.handleAddCoin.bind(this)
  this.handleRemoveCoin = this.handleRemoveCoin.bind(this)
   this.state = { 
     data : [],
     error : "" ,
     
  }
}
  componentDidMount(){
   
    try {
      const json = localStorage.getItem('data');
      const data = JSON.parse(json);

      if (data) {
        this.setState(() => ({ data }));
      }
    } catch (e) {
                   
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length !== this.state.data.length) {
      const json = JSON.stringify(this.state.data);
      localStorage.setItem('data', json);
    }
  }
   
                   
  


  handleAddCoin = (e) => {
    e.preventDefault()
    const option = e.target.elements[0].value
    
    e.target.elements[0].value = ""
    let searchData = option
    let result
    if (!searchData){
      return alert("Not a valid value")
    }
    else if (this.state.data.indexOf(searchData) > 1){
      return alert("Already tracking!")
    }
    else{
    fetch("https://api.coinmarketcap.com/v2/ticker/")
    .then(response => response.json())
    .then(json => result = Object.values(json.data).find((currency) => (currency.name === searchData) )).then(result => this.setState({
      data: this.state.data.concat(result.name)
      
    })).catch( () => {
      alert("Error! Check your input.")
    })
  }
  console.log(this.state.data)
    
    
  e.target.elements[0].value = ""
  
  }


  
  handleRemoveCoin = (coinToRemove) => {
    this.setState((prevState) => ({
    
        data: prevState.data.filter((coin) => coin !== coinToRemove)
      
    }))

  }
  
  
  render() {
    console.log(this.state.data)
    return (
      <div>
      <div className="top">
        <div className="container">
        <Header   length={this.state.data.length}/>
        <Form handleAddCoin={this.handleAddCoin}  />
        </div>
      </div>
        <div>
        <Coins data={this.state.data} handleRemoveCoin={this.handleRemoveCoin}/>
        </div>
        
      </div>
    );
  }
}

export default App;
