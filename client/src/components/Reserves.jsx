import React from 'react';
import { putNewItem } from '../services/putReserves';

export const Reserves = ({ Reserves, setReserves, userLog, room, setRoom, rooms }) => {

  const reserve = (id, time) => {
    const newReserve = {
      time,
      reserved: true,
      id,
      user: userLog
    };

    // Actualizar el estado local
    const updatedReserves = Reserves.map((timetable) => {
      if (timetable.id === id) {
        return newReserve;
      }
      return timetable;
    });

    setReserves(updatedReserves);

    // Actualizar la información en el servidor
    room.reserves = updatedReserves;
    console.log(room.id, room)
    putNewItem(room.id, room);
  };

  return (
    <div className='reserves'>
      {Reserves.map((timetable) => (
        <div className={timetable.reserved ? 'reserved' : 'nonReserved'} key={timetable.id}>
          <h2>{timetable.time}</h2>
          <h3>{timetable.reserved ? 'Reservado por '+ timetable.user : 'No reservado'}</h3>
          <button onClick={() => reserve(timetable.id, timetable.time)} disabled={timetable.reserved == true}>
            {timetable.reserved ? 'Reservado' : 'Reservar'}
          </button>
        </div>
      ))}
    </div>
  );
};
