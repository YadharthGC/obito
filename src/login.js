import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Userlogin() {
  const [mail, setmail] = useState([]);
  const [password, setpassword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      let post = await axios.post(
        "https://yadharthcapstone.herokuapp.com/login",
        {
          mail,
          password,
        }
      );
      window.localStorage.setItem("app_token", post.data.token);
      navigate("/userhome", { replace: true });
    } catch (error) {}
  };

  return (
    <form
      onSubmit={(e) => {
        handlesubmit(e);
      }}
    >
      <div className="container-fluid" id="login">
        <div className="qqqqq">Obito Services</div>
        <div className="details">
          <div className="row" id="vehicle">
            <div
              className="col-lg-12"
              id="name"
              style={{ textAlign: "center" }}
            >
              <div>
                <u>Login</u>
              </div>
            </div>
            <div
              className="col-lg-12"
              id="name"
              style={{ textAlign: "center" }}
            >
              <div>Gmail</div>
              <input
                type="text"
                id="owner"
                value={mail}
                onChange={(e) => setmail(e.target.value)}
                required
              ></input>
            </div>
            <div
              className="col-lg-12"
              id="type"
              style={{ textAlign: "center" }}
            >
              <div>Password</div>
              <input
                type="password"
                id="model"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              ></input>
            </div>
            <div
              className="col-lg-12"
              id="type"
              style={{ textAlign: "center" }}
            >
              <div className="submitpass" style={{ marginTop: "1%" }}>
                <input
                  type="submit"
                  value="Submit"
                  class="btn btn-light"
                  id="submit"
                />
              </div>
            </div>
            <div
              className="col-lg-12"
              id="type"
              style={{ textAlign: "center" }}
            >
              <div style={{ marginTop: "1%" }}>
                <Link to="/register" className="nu">
                  New User?
                </Link>
              </div>
              <div>
                <Link to="/adminlogin" className="nu">
                  Admin?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="logincopyright">
          Copyright 2021&copy; Obito Motorcycle Services
        </div>
      </div>
    </form>
  );
}

export default Userlogin;
