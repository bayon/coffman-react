import React, { Component } from 'react';

import './HeaderUnit.css';

class HeaderUnit extends Component {
  render() {
    return (
       
        <header className="bg-coffman-red w-full">
            <div class="flex sticky ">
                <div class="flex-1 text-grey-darker text-center   py-2 m-2">
                <img src="http://coffmanschimneysweeps.com/images/logo.png" className="img-front" />

                </div>
                <div class="flex-1 text-grey-darker text-center   py-2 m-2"> 
                    <h1 className="tx-white font-coffman text-shadow">Coffman's</h1>
                    <h4 className="tx-yellow text-shadow ">Chimney Sweeps</h4>
                </div>
                <div class="flex-1 text-grey-darker text-center   py-2 m-2">
                <img src="http://coffmanschimneysweeps.com/images/csia_logo.png" className="img-certification justify-end" />

                </div>
            </div>
        </header>
      
    );
  }
}

export default HeaderUnit;

/*
 <div className="flex flex-wrap inline-block">
                <div className=" flex-col ">
                    <img src="http://coffmanschimneysweeps.com/images/logo.png" className="img-front" />
                </div>
                <div classname="flex-col inline-block">
                    <h1 className="tx-white font-coffman text-shadow">Coffman's</h1>
                    <h4 className="tx-yellow text-shadow ">Chimney Sweeps</h4>
                </div>
                <div classname="flex-col inline-block">
                    <img src="http://coffmanschimneysweeps.com/images/csia_logo.png" className="img-certification justify-end" />
                </div>
            </div>
            */