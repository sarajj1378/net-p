import React, { Component } from "react";
import { withRouter, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../../Auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setLoggedInUser, wrongCred } from "../../Redux/Actions";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import store from "../../Redux/Store";
// import "./Login.css";

class ConnectedSignup extends Component {
  state = {
    userName: "",
    pass: "",
    passReenter: "",
    phoneNumber: "",
    redirectToReferrer: false,
  };
  render() {
    const  from  = this.props?.location?.state?.from || { pathname: "/" };

    // If user was authenticated, redirect her to where she came from.
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <div
          className="login-container"
          style={{
            height: 300,
            width: 200,
            padding: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Avatar style={{ marginBottom: 10 }}>
            <LockOutlinedIcon />
          </Avatar>{" "}
          <div
            style={{
              marginBottom: 20,
              fontSize: 24,
              textAlign: "center",
            }}
          >
            {" "}
            ثبتنام{" "}
          </div>{" "}
          <TextField
            value={this.state.userName}
            placeholder="نام کاربری"
            onChange={e => {
              this.setState({ userName: e.target.value })
            }}
          />{" "}
          <TextField
            value={this.state.phoneNumber}
            type="phoneNumber"
            placeholder="شماره تلفن"
            onChange={e => {
              this.setState({ phoneNumber: e.target.value })
            }}
          />{" "}
          <TextField
            value={this.state.pass}
            type="password"
            placeholder="کلمه عبور"
            onChange={e => {
              this.setState({ pass: e.target.value })
            }}
          />{" "}
          <TextField
            value={this.state.passReenter}
            type="password"
            placeholder="تکرار کلمه عبور"
            onChange={e => {
              this.setState({ passReenter: e.target.value })
            }}
          />{" "}
          <Button
            style={{ marginTop: 20, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              let err = false
              if (this.state.pass !== this.state.passReenter) {
                err = true
                setTimeout(() => store.dispatch(wrongCred(true, "رمز عبور با تکرارش هم خوانی ندارد")), 200)
                setTimeout(() => store.dispatch(wrongCred(false)), 20000)
              }
              if (!err)
                Auth.signUp(this.state.userName, this.state.pass, user => {
                  if (!user) {
                    this.setState({ wrongCred: true })
                    return
                  }

                  this.props.dispatch(setLoggedInUser({ name: user.name }))
                  this.setState(() => ({
                    redirectToReferrer: true,
                  }))
                })
            }}
          >
            ثبتنام{" "}
          </Button>{" "}
          {this.props.wrongCred && <div style={{ color: "red" }}> {this.props.wrongCredMsg} </div>}{" "}
          <NavLink to="/login">وارد شوید</NavLink>
        </div>{" "}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { wrongCred: state.wrongCredStatus, wrongCredMsg: state.wrongCredMsg }
};

const Signup = withRouter(connect(mapStateToProps)(ConnectedSignup))

export default Signup;
