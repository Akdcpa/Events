import React, { Component } from "react";
import Tabs from "react-draggable-tabs";
import TabBar from '../components/TabBar' 

class Main extends Component {
  constructor(props) {
    super(props); 
    this.state = {
        
    };
  } 
  render() { 
    return (
      <div style={{width:"100%"}} >   
             <TabBar tabs={this.state.tabs} />  
      </div>
    );
  }
}

export default Main;