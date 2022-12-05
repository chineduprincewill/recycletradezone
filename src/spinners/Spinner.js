import React from 'react';
import spinner from './spinner5.gif';

const Spinner = () => {
  return (
    <div className="col-md-12">
      <img 
        src={spinner}
        alt="Loading..."
        style={{ width: '350px', margin: '0px auto', display: 'block'}}
      />
    </div>
  );
}

export default Spinner
