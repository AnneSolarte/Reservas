import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = ({userLog, setUserlog}) => {
  const navigate = useNavigate();

  const saveUser = (e) => {
      e.preventDefault();
      let datos = e.target;
      const userData = datos.username.value;
      console.log(userData);
      setUserlog(userData);
      navigate("/select-building");

  }

  return (
    <div className='loginBox'>
      <h1>Login</h1>
      <form onSubmit={saveUser}>
          <input type='text' placeholder="UserName" name='username'/>
          <input type= "password" placeholder="Password"/>
          <input type="submit" value= "Enter"/>
      </form>
      
    </div>
  )
}
