import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [state, setstate] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const inputHendle = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
    // console.log(state);
  };

  const fileHandle = (e) => {
    if (e.target.file.length !== 0) {
      setstate({
        ...state,
        [e.target.neme]: e.target.file[0],
      });
    }
  };
  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>

              <input
                type="text"
                className="form-control"
                name="userName"
                onChange={inputHendle}
                value={state.userName}
                id="userName"
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={inputHendle}
                value={state.email}
                id="email"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={inputHendle}
                value={state.password}
                id="password"
                placeholder="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">confirm password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={inputHendle}
                value={state.confirmPassword}
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image"></div>
                <div className="file">
                  <label htmlFor="iamge">Select Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={fileHandle}
                    id="image"
                    className="form-control"
                  />
                </div>
                <div className="from-group">
                  <input type="submit" className="btn" value="register" />
                  <br></br>
                </div>
                <div className="form-group">
                  <span>
                    <Link to={"/msg/login"}>Login the account</Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
