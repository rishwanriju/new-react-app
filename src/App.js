import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person : [
    {id : "1",name: 'riz' , age: '20'},
    {id : "2",name: 'manu' , age: '42'}
  ],
  showPerson : false
}

  deletePersonHandler = (personIndex) => {
    
    // const person = this.state.person.slice()
    const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({
      person: person
    });


  }

  ToggleNameHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson: !doesShow})
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
  
    let person = null;

    if (this.state.showPerson){
      person = (
        <div >
          {this.state.person.map((pers,index) => {
            return <Person
            click =  {()=>this.deletePersonHandler(index)}
            name = {pers.name}
            age = {pers.age}
            key = {pers.id}
            />

     })}
       </div> 
      )
    }
    return (
      <div className="App">
      <h3>my new app</h3>
      <p>my new app is working</p>
      <button style={styles} onClick= { () =>this.ToggleNameHandler()}>toggle name</button>

      {person}     
        
      </div>
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'my id : ""name is riz'))
    );
  }
}

export default App;
 