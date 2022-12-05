import React from 'react';
import spinner from './spinner5.gif';

const Spinnersm2 = () => {
  return (
    <div className="col-md-12">
      <img 
        src={spinner}
        alt="Loading..."
        style={{ width: '150px', margin: '0px auto', display: 'block'}}
      />
    </div>
  );
}

export default Spinnersm2
