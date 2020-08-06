import React, { Component } from 'react';
import './SideBar.css'
 
const data = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,]
 
class Data extends Component {
    render() { 
        return (
            <div style={{display:"flex" , flexDirection:"column" , height:window.innerHeight,overflowX:"scroll" , alignItems:"center"}} >
                {
                    data.map(()=>{
                        return(
                        <div style={{border:"solid",borderColor:"grey" , margin:10,width:"90%" ,height:"20%" }} >
                            <text>Timestamp</text>
                            <text>Raw</text>
                        </div>  
                        )
                    })
                }

{/* <text>Raw</text> */}
                
            </div>
        );
    }
}
 
export default Data;

  