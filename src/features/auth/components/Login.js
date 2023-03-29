import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "./Layout";

function Login({ onLogin }) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
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
      password: "",
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          resetForm()
          onLogin(user)
          navigate("/")
        });
      }
    });
  }
  return (
    <Layout>
      <div className="tw-mt-3">
        <h3 className=" tw-text-center tw-mb-4">Welcome , please sign in.</h3>
        <form onSubmit={handleSubmit}>
        <div className="tw-flex tw-flex-col tw-gap-3">
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Login id</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
              placeholder="Username or email"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <div className="tw-w-full">
            <label className=" tw-font-semibold">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
              className="tw-w-full tw-py-1 tw-pl-4 tw-rounded-md tw-mt-1.5 tw-bg-shelly tw-text-black tw-outline-none"
            />
          </div>
          <input type="submit" value="Sign in" className=" tw-bg-sunflower tw-text-black tw-rounded-md tw-py-1 tw-mt-3" />
        </div>
        </form>
        <span className="tw-flex tw-gap-2 tw-mt-4 tw-text-sm tw-text-grey">
          <p>Don’t have an account ?</p><Link to="/register" className=" tw-text-sunflower tw-underline">Register</Link>
        </span>
      </div>
    </Layout>
  );
}

export default Login;
