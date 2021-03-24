import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person : [
    {name: 'riz' , age: '20'},
    {name: 'manu' , age: '42'}
  ] }

  switchNameHandler = () => {
    // console.log("clicked")
    this.setState({
      person : [
        {name: 'rizvan' , age: '20'},
        {name: 'manu' , age: '20'}
      ]

    })
  }
  render() {
    return (
      <div className="App">
      <h3>my new app</h3>
      <p>my new app is working</p>
      <button onClick={this.switchNameHandler}>switch name</button>
      <Person name = {this.state.person[0].name} age = {this.state.person[0].age}>my hobbie is working </Person>
      <Person name = {this.state.person[1].name} age = {this.state.person[1].age}>my hobbie is jogging </Person>
      </div>
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'my name is riz'))
    );
  }
}

export default App;
