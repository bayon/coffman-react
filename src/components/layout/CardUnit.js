import React, { Component } from 'react';

import './CardUnit.css';

class CardUnit extends Component {
  render() {
    return (
      <div className="CardUnit w-full lg:w-1/4 p-3">
            <div className="card drop-shadow p-3 md:mb-2">
                feature
            </div>
      </div>
    );
  }
}

export default CardUnit;
