import React from 'react';
import './LoginP.css'
import { getHeaderData } from '../../container/headerC/HeaderC';

function LoginPresentation({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
  message,
  isLoggedIn,
 
}) 

{


  





  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
          <h2></h2>
          <label>mobileNo</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

    <button type='submit'>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginPresentation;
