import React from 'react'
import logo from '../../../assets/todo.svg'

export const Layout = ({ children }) => {
  return (
    <div className='tw-bg-primary-dark tw-h-screen'>
        <div className=' tw-h-full tw-w-full tw-relative'>
        <div className='center tw-bg-secondary-dark tw-py-6 tw-px-16 tw-rounded-lg'>
            <div className=' tw-flex tw-items-center tw-flex-col'>
                <img src={logo} alt="logo" />
                {children}
            </div>
        </div>  
        </div> 
    </div>
  )
}
