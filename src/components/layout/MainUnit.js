import React, { Component } from 'react';

//import './MainUnit.css';
import CardUnit from './CardUnit';

class MainUnit extends Component {
  render() {
    return (
      
       
            <main className=" MainUnit bg-coffman-yellow md:flex-1 p-3 ">

            <div className="flex flex-wrap">
                
                 <CardUnit></CardUnit>
                 <CardUnit></CardUnit>
                 <CardUnit></CardUnit>
                 <CardUnit></CardUnit>
                 <CardUnit></CardUnit>
                 <CardUnit></CardUnit>
                 <CardUnit></CardUnit>
                 <CardUnit></CardUnit>
                
                
                 
                
            </div>
            
            </main>
      
    );
  }
}

export default MainUnit;
