
import { useState } from 'react';
import './App.css'
import { Router } from './routers/Router'

function App() {
  const [building, setBuilding ] = useState();
  const [userLog, setUserlog] = useState("");

  return (
    <>
      <div className='layout'>
          <Router building ={building}
                  setBuilding = {setBuilding} 
                  userLog = {userLog}
                  setUserlog = {setUserlog}/>
      </div>
    </>
  )
}

export default App
