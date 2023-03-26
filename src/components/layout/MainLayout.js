import React from 'react'
import logo from '../../assets/todo.svg'

export const MainLayout = ({ children }) => {
  return (
    <div className=' tw-h-screen tw-bg-primary-dark'>
        <div className='tw-container tw-pt-8'>
        <img src={logo} alt="logo" />
        <main>
            {children}
        </main>
        </div>
    </div>
  )
}
