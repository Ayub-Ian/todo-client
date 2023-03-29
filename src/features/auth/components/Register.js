import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Layout } from './Layout'

function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData, [e.target.name] : e.target.value
    })
  }

  function resetForm() {
    setFormData({
      username: "",
      email: "",
      password: ""
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log(formData)

    fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(r => r.json())
    .then(data => {console.log(data)
      resetForm()
      navigate("/login")
    })
  }


  return (
    <Layout>
      <div className="tw-mt-3">
        <h3 className=" tw-text-center tw-mb-4">Sign up and join the team.</h3>
        <form onSubmit={handleSubmit}>
        <div className="tw-flex tw-flex-col tw-gap-3">
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Username</label>
            <input
              type="text"
              name='username'
              onChange={handleChange}
              value={formData.username}
              placeholder="Username"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Email</label>
            <input
              type="email"
              name='email'
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Password</label>
            <input
              type="password"
              name='password'
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>

          <input type="submit" value="Register" className=" tw-bg-sunflower tw-text-black tw-rounded-md tw-py-1 tw-mt-3" />
        </div>
        </form>
        <span className="tw-flex tw-gap-2 tw-mt-4 tw-text-sm tw-text-grey">
          <p>Already have an account ?</p><Link to="/login" className=" tw-text-sunflower tw-underline">Login</Link>
        </span>
      </div>
    </Layout>
  )
}

export default Register