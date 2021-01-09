
import './App.css';
import React from 'react'
import yoda from './yoda.jpeg'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {person : {fullName : "Rym Haouachi", bio :"This is Rym Haouachi", imgSrc: yoda,  profession : "Developer" }, show: true, counter : 0};
  }

  

  showPerson = () =>(
    
      this.setState({show : !this.state.show})
      
    
   
);


componentDidMount(){
  setInterval(() => { this.setState({counter : this.state.counter +1})
    
  }, 1000);
}

  
  render(){
  return (
    <div className="App">
    {this.state.show?  <>
    <img src = {this.state.person.imgSrc} alt =""></img>
    <h1 >{this.state.person.fullName}</h1>
     <h1 >{this.state.person.bio}</h1>
     <h1 >{this.state.person.profession}</h1>
     <h1>{this.state.counter}</h1></>: <></>}
     <button onClick = {this.showPerson}>Click me</button>
    </div>
  );
}
}

export default App;
