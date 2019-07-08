//This is a functional component because we're not going to be manipulating state in here

import React, { Component } from 'react';
import Person from './Person/Person.js'

class People extends Component {

  // static getDeriveredStateFromProps(props, state) {
  //   console.log(`PEOPLE.JS: getDeriveredSTate called`);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("PEOPLE.JS: shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`PEOPLE.JS: getSnapshotBeforeUpdate called`);
  }

  componentDidUpdate() {
    console.log(`PEOPLE.JS: componentDidUpdate called`);
  }

  render() {

    console.log(`PEOPLE.JS: render called`)
    console.log(`PEOPLE.JS: people is ${this.props.people}`)
    console.log(`PEOPLE.JS: person 1.1 is ${this.props.people[0][1]}`)
    console.log(`PEOPLE.JS: person 1.2 is ${this.props.people[0][2]}`)

    return this.props.people.map((person, index) => {
        return (
        <Person
          click = {() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
        )
      });
  }
}


export default People;