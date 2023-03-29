import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/todo.svg'

export const MainLayout = ({ user, onLogout, children }) => {

  const navigate = useNavigate()
  function handleLogout() {
    fetch("/user/logout", {
      method: "DELETE",
    }).then(() => {

      onLogout()
    navigate('/login')});
  }
  return (
    <div className=' tw-h-screen tw-bg-primary-dark'>
        <div className='tw-container tw-pt-8'>
          <div className='tw-flex tw-items-center tw-justify-between'>
        <img src={logo} alt="logo" />
        <div className='tw-flex tw-items-center tw-gap-3'>
          <span className='tw-flex tw-gap-1.5'>
            <p>Hello,</p>
            <p className=' tw-capitalize tw-font-medium'>{user.data.user.username}</p>
          </span>
          <button className=' tw-bg-red-400 tw-py-1 tw-px-2 tw-rounded-lg tw-text-sm' onClick={handleLogout}>Logout</button>
        </div>
        </div>
        <main>
            {children}
        </main>
        </div>
    </div>
  )
}
