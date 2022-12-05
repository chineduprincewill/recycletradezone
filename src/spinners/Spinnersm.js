import React from 'react';
import spinner from './spinner5.gif';

const Spinnersm = () => {
  return (
    <div className="col-md-12">
      <img 
        src={spinner}
        alt="Loading..."
        style={{ width: '250px', margin: '5px', display: 'block'}}
      />
    </div>
  );
}

export default Spinnersm
