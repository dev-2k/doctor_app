import './App.css';
import items from './data';
import React, { useState } from 'react';
import Doctor from './Doctor';

function App() {

  const [doctorList, setDoctorList ]= useState(items)
  return (
    <div >
      <Doctor items={doctorList} />
    </div>
  );
}

export default App;
