import React from 'react'

function MyDetail() {
  return (
    <div>
      <div className='form'>
        <label htmlFor="">Profile Picture</label>
        <input type="text" id='profile' name='profile' />
      </div>
      <div className='form'>
        <label htmlFor="">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" />
      </div>

      <div className='form'>
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" placeholder="Role" />
      </div>
      <div className='form'>
        <label htmlFor="totalExp">Total Experience</label>
        <input type="text" id="totalExp" name="totalExp" />
        <small>Years</small>
      </div>
    </div>

  )
}

export default MyDetail
