import React, { useState } from "react";
import "./Login.css";
import siginImg from "../assests/signin.jpg";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const data = { name: "", email: "", password: "" };
  const [user, setUser] = useState(data);
  const history = useNavigate();

  const HandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Handlesubmit = (e) => {
    let getuserArr = JSON.parse(localStorage.getItem("users"));

    e.preventDefault();
    if (user.email === "") {
      alert("Please enter a Email");
    } else if (user.email.indexOf("@") <= 0) {
      alert(" @ Invalid position");
    } else if (
      user.email.charAt(user.email.length - 4) != "." &&
      user.email.charAt(user.email.length - 3 != ".")
    ) {
      alert(" . invalid position");
    } else if (user.password === "") {
      alert("please enter password");
    } else if (user.password.length <= 5 || user.password.length > 20) {
      alert("password length must be between 5 and 20");
    } else {
      if (getuserArr && getuserArr.length) {
        const userLogin = getuserArr.filter((el, i) => {
          return el.email === user.email && el.password === user.password;
        });
        if (userLogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfully");
          history("/");
        }
      }
    }
  };
  return (
    <div className="sigin-flex">
      <div className="sigin-left">
        <form onSubmit={Handlesubmit}>
          <input
            autoComplete="off"
            type="text"
            placeholder="Write your Email"
            onChange={HandleChange}
            name="email"
            value={user.email}
          />
          <input
            autoComplete="off"
            type="password"
            placeholder="Write your Password"
            onChange={HandleChange}
            name="password"
            value={user.password}
          />
          <button className="form-btn" type="submit">
            Login in
          </button>
          <p>
            Do you have an Account?{" "}
            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              <span>Sign up</span>
            </NavLink>
          </p>
        </form>
      </div>

      <div className="sigin-img-left">
        <img src={siginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
