import React, { Component } from 'react';

//import './BodyUnit.css';
import AsideUnit from './AsideUnit';
import MainUnit from './MainUnit';


class BodyUnit extends Component {
  render() {
    return (
      <div className="BodyUnit">
       <div className="md:flex md:flex-1">

            
            <MainUnit></MainUnit>


        </div>
      </div>
    );
  }
}

export default BodyUnit;
/* <AsideUnit></AsideUnit>*/