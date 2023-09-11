import React, { useEffect, useState } from 'react'
import { getRooms } from '../services/getRooms'
import { getReserves } from '../services/getReserves';
import { Reserves } from './Reserves';
import { useNavigate } from 'react-router-dom';



export const Rooms = ({building, userLog}) => {
  const [rooms, setRooms] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [room, setRoom] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getData = async() => {
      const roomsApi = await getRooms(building)
      setRooms(roomsApi)
      console.log(roomsApi)
    }
    getData();
  }, [])

  
  const showReserves = async(building, id) => {
    console.log(building, id)
    const roomData = await getReserves(building, id)
    setReserves(roomData.reserves)
    setRoom(roomData)
  }

  const comeBack = () => {
    navigate("/select-building")
  }

  return (
    <div>
      <p onClick={comeBack}>Select building</p>

      <h1>Rooms</h1>
      <div className='rooms'> 
        {rooms.map(room => {
          
        return (
          <div key={room.id} onClick={() => showReserves(room.building, room.id)} className='room'>
            <h3>{room.room} {room.building}</h3>
            <p>To reserve</p>
          </div>
        )
      })}
      </div>

      <hr/>
      
      <Reserves Reserves = {reserves} setReserves={setReserves} userLog = {userLog} rooms = {rooms} setRooms ={setRooms} room = {room} setRoom= {setRoom} />
      
    </div>


  )
}
