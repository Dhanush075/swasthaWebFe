import React from 'react';
import press1 from '../../assets/images/press1.jpg';
import press2 from '../../assets/images/press2.jpg';

function Press() {
    return (
      <div>
        <h1 style={{ fontSize: '1.5rem', textAlign: 'center'}}>Swastha Stree Launch at Bangalore Metro Rail(BMRCL) - 31st July 2023 to 4th August 2023</h1> <br/>
        <div style={{ display: 'flex' }}>
          <img src={press1} alt="Press 1" style={{ width: '30%', height: '600px' }} />
          <img src={press2} alt="Press 2" style={{ width: '70%', height: '600px' }} />
        </div>
      </div>
    );
  }
  
export default Press;