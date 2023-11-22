import React, { useState } from "react";
import "./SignUp.css";
import siginImg from "../assests/signin.jpg";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const data = { name: "", email: "", password: "", confirmpassword: "" };
  const [user, setUser] = useState(data);
  const [userData, setUserData] = useState([]);

  const HandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (user.name === "") {
      alert("Please enter your User Name");
    } else if (user.name.length <= 2 || user.name.length > 20) {
      alert("user length must be between 2 and 20");
    } else if (!isNaN(user.name)) {
      alert("only characters are allowed");
    } else if (user.email === "") {
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
    } else if (user.confirmpassword === "") {
      alert("please write confirm password");
    } else if (user.password != user.confirmpassword) {
      alert("password are not matching");
    } else {
      const newUserList = [...userData, user];
      localStorage.setItem("users", JSON.stringify(newUserList));
      setUserData(newUserList);
      setUser(data);
    }
  };
  return (
    <>
      <div className="sigin-flex">
        <div className="sigin-left">
          <form onSubmit={Handlesubmit}>
            <input
              autoComplete="off"
              type="text"
              placeholder="Write your User Name"
              onChange={HandleChange}
              name="name"
              value={user.name}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={HandleChange}
              name="confirmpassword"
              value={user.confirmpassword}
            />
            <button className="form-btn" type="submit">
              Sign Up
            </button>
            <p>
              Already have an Account?{" "}
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <span>Login in</span>
              </NavLink>
            </p>
          </form>
        </div>

        <div className="sigin-img-left">
          <img src={siginImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
