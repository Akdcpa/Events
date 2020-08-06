import React, { Component } from "react";
import Tabs from "react-draggable-tabs";
import ReactDOM from "react-dom";

import Data from './Data'

import './SideBar.css'

const events = [
              {
                id: 1,
                content: "Event 1",
                active: true,
                display: (
                  <Data/>
                )
              },  
              {
                id: 2,
                content: "Event 2",
                display: (
                  <Data/>
                )
              }, 
              {
                  id:3,
                  content: "Event 3",
                  display: (
                    <Data/>
                  )
                }, 
                {
                  id: 4,
                  content: "Event 4",
                  display: (
                    <Data/>
                  )
                }, 
                {
                    id: 5,
                    content: "Event 5",
                    display: (
                      <Data/>
                    )
                  }, 
                  {
                    id:6,
                    content: "Event 6", 
                    display: (
                      <Data/>
                    )
                  }, 
                  {
                      id: 7,
                      content: "Event 7",
                      display: (
                        <Data/>
                      )
                    }, 

                    {
                      id: 8,
                      content: "Event 8",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 9,
                      content: "Event 9",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 10,
                      content: "Event 10",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 11,
                      content: "Event 11",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 12,
                      content: "Event 12",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 13,
                      content: "Event 13",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 14,
                      content: "Event 12",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 15,
                      content: "Event 13",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 16,
                      content: "Event 12",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 17,
                      content: "Event 13",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 12,
                      content: "Event 12",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 18,
                      content: "Event 13",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 19,
                      content: "Event 12",
                      display: (
                        <Data/>
                      )
                    }, 
                    {
                      id: 20,
                      content: "Event 13",
                      display: (
                        <Data/>
                      )
                    }, 
                  
               ]

class TabBar extends Component {

  constructor(props) {
    super(props);
    this.moveTab = this.moveTab.bind(this);
    this.selectTab = this.selectTab.bind(this);
    this.closedTab = this.closedTab.bind(this);
    this.addTab = this.addTab.bind(this);
    this.state = {
      tabs: [
        {
          id: 1,
          content: "Event 1",
          active: true,
          display: (
            <Data/>
          )
        },  
      ], 
      id:1,
      pushedIndexes:[1]
    };
  }

  moveTab(dragIndex, hoverIndex) {
    this.setState((state, props) => {
      let newTabs = [...state.tabs]
      newTabs.splice(hoverIndex, 0, newTabs.splice(dragIndex, 1)[0]);

      return { tabs: newTabs };
    });
  }

  selectTab(selectedIndex, selectedID) {
    this.setState((state, props) => {
      const newTabs = state.tabs.map(tab => ({
        ...tab,
        active: tab.id === selectedID
      }));

    this.setState({id:selectedID})
      return { tabs: newTabs };
    });
  }

  closedTab(removedIndex, removedID) {
    if(this.state.tabs.length>1){
      this.setState((state, props) => {
        let newTabs = [...state.tabs];
        newTabs.splice(removedIndex, 1);
  
        if (state.tabs[removedIndex].active && newTabs.length !== 0) {
          // automatically select another tab if needed
          const newActive = removedIndex === 0 ? 0 : removedIndex - 1;
          newTabs[newActive].active = true;
        }


        this.setState((state, props) => {
          let newIndex = [...state.pushedIndexes];
          let index = this.state.pushedIndexes.indexOf(removedIndex)
          newIndex.splice(index);
          return { pushedIndexes: newIndex };
        });

        this.setState({id:this.state.pushedIndexes[0]})

        return { tabs: newTabs };
      });
    }
    
  }

  addTab(data) {
    this.setState((state, props) => {
      let newTabs = [...state.tabs];
      newTabs.push(data);

      return { tabs: newTabs };
    });
  }

  onClick = (data) =>{
     
    let find  = this.state.pushedIndexes.includes(data.id);

    if(!find){
      this.setState((state, props) => {
        let newIndex = [...state.pushedIndexes];
        newIndex.push(data.id); 
        return { pushedIndexes: newIndex };
      });

      this.setState({ 
        id:data.id, 
      })
      this.addTab(data);

    } 
    console.log("Indexes : " , find)
}
  
  render() {
    const activeTab = this.state.tabs.filter(tab => tab.active === true);
    return (
      <div style={{display:'flex',width:window.innerWidth}} >
          <div style={{height:window.innerHeight , overflowX:"scroll"  ,width:"30%" }} >
            {/* <div style={{position:"fixed"}} > */}
            

            {/* </div>  */}
            
            {/* <div>
            
                  {
                      events.map((val , index) =>{
                          return(
                              <div onClick={()=>this.onClick(val)}  >
                                  <Box id={val.id}  keyId={this.state.id} name={val.content}   /> 
                              </div>
                          )
                      })
                  } 
              </div> */}
            </div>
            {/* <div style={{display:"flex" ,position:"fixed", backgroundColor:"#012728" , height:40  ,marginBottom:40}} /> */}
          <div style={{width:"70%",position:"fixed" , right:0 , top:0 }} >
            
            <Tabs
              moveTab={this.moveTab}
              selectTab={this.selectTab}
              closeTab={this.closedTab}
              tabs={this.state.tabs}
            > 
            </Tabs>
            {activeTab.length !== 0 ? activeTab[0].display : ""}
          </div> 
      </div>
    );
  }
}

class Box extends React.Component{

  render(){
      return(
          <div style={{ borderColor:this.props.id===this.props.keyId?"blue":"grey",
                        margin:3 , 
                        height:40,
                        borderRadius:8,
                        display:'flex',
                        alignItems:"center",
                        justifyContent:"center"
                        }} className="box" >
              <text>{this.props.name}</text> 
          </div>
      )
  }
}

export default TabBar;