import React, { useState } from 'react';
import items from './data';
import { Button } from '@material-ui/core';


const Doctor = ({ items }) => {
    

    return (
        <div className='section-center'>
        {items.map((doctorList) => {
          const { id, title, img, desc, price } = doctorList;
          return (
            <article key={id} className='doctor-list'>
              <img src={img} alt={title} className='photo' />
              <div className='doctor-info'>
                <header>
                  <h4>{title}</h4>
                  <div>
                  <h4 className='price'>${price}
                  </h4>
                  <Button variant="outlined" color="primary"  onClick={''}>Book Slot</Button>
                  </div>
                </header>
                <p className='doctor-text'>{desc}</p>
                
              </div>
            </article>
          );
        })}
      </div>
    )
}

export default Doctor
