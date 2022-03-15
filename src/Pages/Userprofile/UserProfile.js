import React, {useState} from 'react';
import './UserProfile.css'

function UserProfile() {
  const [editmode, seteditmode] = useState(false)

  return (
    <div class="user-profile__container">
        <h2 class="text--center margin-tb--medium">User Profile</h2>
        <div class="form">
            <div class="profile-pic__container">
                <div class="avatar avatar--medium margin--medium">
                    <img src="./Images/avatar-image1.jpg" />
                </div>
                <input type="file" class="form-file" disabled={!editmode} />
            </div>

            <div class="form-element">
                <label class="form-label form-label--required">User Name</label>
                <input type="text" class="form-field" value="efe" placeholder="Username" disabled={!editmode} />
            </div>
            
            <div class="form-element">
                <label class="form-label form-label--required">First Name</label>
                <input type="text" class="form-field" value="efe" placeholder="Enter First Name" disabled={!editmode} />
            </div>
            
            <div class="form-element">
                <label class="form-label form-label--required">Last Name</label>
                <input type="text" class="form-field" placeholder="Enter Last Name" disabled={!editmode} />
            </div>

            <div class="form-element">
                <label class="form-label form-label--required">Email</label>
                <input type="email" class="form-field--text-only" value="abc@example.com" disabled={!editmode} />
            </div>

            <div class="form-element">
                <label class="form-label form-label--required">Phone No.</label>
                <input type="Number" class="form-field" value="98765656556" disabled={!editmode} />
            </div>

            <div class="form-element">
                <label class="form-label">Gender</label>

                <input type="radio" class="form-radio" name="gender" value="Male" disabled={!editmode} />
                <span> Male </span>
                <input type="radio" class="form-radio" name="gender" value="Female" disabled={!editmode} />
                <span> Female</span>
            </div>
            {editmode ? <button onClick={()=> seteditmode(false)} class="btn btn--outline-secondary margin--small">Save</button> : 
                        <button onClick={()=> seteditmode(true)}class="btn btn--outline-secondary margin--small">Edit</button> }
            
        </div>
    </div>
  )
}

export default UserProfile