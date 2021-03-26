import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person : [
    {name: 'riz' , age: '20'},
    {name: 'manu' , age: '42'}
  ] }

  switchNameHandler = (newName) => {
    // console.log("clicked")
    this.setState({
      person : [
        {name: newName , age: '20'},
        {name: 'manu' , age: '20'}
      ]

    })
  }

  nameChangeHandler = (updatedname) => {

    this.setState({
      person : [
        {name: updatedname.target.value, age: '20'},
        {name: 'manu' , age: '20'}
      ]

    })

  }
  render() {
    const styles = {
      backgroundColor: 'white',
      font : 'inherit',
      border: '1px solid blue', 
      padding : '10px',
      cusor : 'pointer',
    };
    
    return (
      <div className="App">
      <h3>my new app</h3>
      <p>my new app is working</p>
      <button style={styles} onClick={() => this.switchNameHandler("rizvan")}>switch name</button>
      <Person change={this.nameChangeHandler} name = {this.state.person[0].name} age = {this.state.person[0].age}>my hobbie is working </Person>
      <Person click={this.switchNameHandler.bind(this,"rishwan")} name = {this.state.person[1].name} age = {this.state.person[1].age} >my hobbie is jogging </Person>
      </div>
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'my name is riz'))
    );
  }
}

export default App;
