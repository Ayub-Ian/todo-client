import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from './Layout'

function Register() {
  return (
    <Layout>
      <div className="tw-mt-3">
        <h3 className=" tw-text-center tw-mb-4">Sign up and join the team.</h3>
        <div className="tw-flex tw-flex-col tw-gap-3">
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <input type="submit" value="Register" className=" tw-bg-sunflower tw-text-black tw-rounded-md tw-py-1 tw-mt-3" />
        </div>
        <span className="tw-flex tw-gap-2 tw-mt-4 tw-text-sm tw-text-grey">
          <p>Already have an account ?</p><Link to="/login" className=" tw-text-sunflower tw-underline">Login</Link>
        </span>
      </div>
    </Layout>
  )
}

export default Register