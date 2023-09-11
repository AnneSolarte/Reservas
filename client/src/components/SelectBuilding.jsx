import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SelectBuilding = ({building, setBuilding} ) => {
  const navigate = useNavigate()
  const build1 = "E";
  const build2 = "B";

  const navigateRooms = (build) => {
    setBuilding(build);
    console.log(build);
    navigate("/rooms")
  };

  return (
    <div>
        <h1>SELECT BUILDING</h1>
        <div className='sectionB'>
            <div className='building' onClick={() => navigateRooms(build1)}>Building E</div>
            <div className='building' onClick={() => navigateRooms(build2)}>Building B</div>
        </div>
    </div>
  )
}
