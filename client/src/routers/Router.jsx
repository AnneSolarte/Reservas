import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { SelectBuilding } from '../components/SelectBuilding'
import { Rooms } from '../components/Rooms'
import { Login } from '../components/login'
import { Reserves } from '../components/Reserves'
import { Error } from '../components/Error'


export const Router = ({building, setBuilding, userLog, setUserlog}) => {
  return (
    <BrowserRouter>

        <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to="/login"></Navigate>} />
                <Route path='/login' element={<Login userLog = {userLog} setUserlog = {setUserlog}  />} />
                <Route path='/select-building' element={<SelectBuilding building = {building} setBuilding = {setBuilding} />} />
                <Route path='/rooms' element={<Rooms building = {building} userLog ={userLog} />} />
                <Route path='/reserves' element={<Reserves/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </section>

    </BrowserRouter>
  )
}