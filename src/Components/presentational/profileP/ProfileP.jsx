import React, { useState, useEffect } from 'react';
import "./ProfileP.css";
import LogoutC from '../../container/logoutC/LogoutC';

function ProfileP({ data = {}, message, fetchProfileDetails, updateUser }) {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
  });

  const [nameState, setNameState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [userId, setUserId] = useState('');
  const [isEdited, setIsEdited] = useState(false); // Track if any field is edited

  useEffect(() => {
    if (data) {
      setUserDetails({
        firstname: data.firstName || '',
        lastname: data.lastName || '',
        email: data.email || '',
        mobile: data.mobileNo || '',
      });
    }
  }, [data]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      fetchProfileDetails(storedUserId);
    }
  }, [fetchProfileDetails]);

  const handleEdit = (field) => {
    setIsEdited(true);
    if (field === 'name') setNameState(!nameState);
    if (field === 'email') setEmailState(!emailState);
  };

  const handleUpdate = () => {
    setNameState(false);
    setEmailState(false);
    setIsEdited(false);

    // Prepare the updated data object
    const updatedData = {
      uid: userId,
      firstName: userDetails.firstname,
      lastName: userDetails.lastname,
      email: userDetails.email,
    };

    // Call updateUser function passed from ProfileC
    updateUser(updatedData);
  };

  return (
    <div className='container'>
      <div className='userdetails'>
        {/* Full name with Edit Button */}
        <div className='name'>
          {nameState ? (
            <div className='edit'>
              <input 
                type='text' 
                value={userDetails.firstname} 
                id="firstname" 
                className='firstname' 
                onChange={(e) => setUserDetails({ ...userDetails, firstname: e.target.value })} 
              />
              <input 
                type='text' 
                value={userDetails.lastname} 
                id='lastname' 
                className='lastname' 
                onChange={(e) => setUserDetails({ ...userDetails, lastname: e.target.value })} 
              />
            </div>
          ) : (
            <div className='name'>
              <span className='firstname'>{userDetails.firstname} {userDetails.lastname}</span>
            </div>
          )}
          <button id='editname' onClick={() => handleEdit('name')}>Edit</button>
        </div>

        {/* Mobile number (non-editable) */}
        <span id='mobile'>{userDetails.mobile}</span>

        {/* Email with Edit Button */}
        <div className='email'>
          {emailState ? (
            <input 
              type='text' 
              id='email' 
              className='email' 
              value={userDetails.email} 
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} 
            />
          ) : (
            <span id='email'>{userDetails.email}</span>
          )}
          <button id='editemail' onClick={() => handleEdit('email')}>Edit</button>
        </div>

        {/* My Orders link */}
        <div className='orders'>
          <a href='/my-orders'>My Orders</a>
        </div>

        {/* Logout link */}
        {/* <div className='logout'>
          <LogoutC />
        </div> */}
      </div>

      {message && <div className='error-message'>{message}</div>}

      {/* Single Update button */}
      {isEdited && (
        <button className='update-button' onClick={handleUpdate}>
          Update
        </button>
      )}
    </div>
  );
}

export default ProfileP;
