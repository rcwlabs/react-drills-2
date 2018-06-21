import React, {Component} from 'react';
import Thing from './Thing';

export default class App extends Component {
 constructor() {
  super();
   
  this.state = {
    things: [
      {title: 'Title 1', msg: "Hey here is a cool message"},
      {title: 'Title 2', msg: "You really need a good message"},
      {title: 'Title 3', msg: "Messages are for suckers"},
      {title: 'Title 4', msg: "Can't we call just get along"}
    ]
  };
   
 }
  
  render() {
    
    const appStyle = {
      margin: '0',
      border: '0',
      padding: '0',
      backgroundColor: '#fff'
    }
    
    const things = this.state.things.map(thing => {
      return <Thing key={thing.title} {...thing} />;
    });
  
    
     return(
       <div style={appStyle}>
       {things}
       </div>
     );
  }
}