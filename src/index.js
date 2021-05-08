import React from 'react';
import ReactDom from 'react-dom';
import Person from './person'

import './index.css';


function BirthdayList(){
  return(
    <section className='section'>
      <h2 className='header'>Birthday List</h2>
      <Person/>
    </section>
    
  );
}






ReactDom.render(<BirthdayList/>,document.getElementById('root'));