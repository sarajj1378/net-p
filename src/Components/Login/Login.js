import React, { Component } from "react";
import { withRouter, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../../Auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setLoggedInUser } from "../../Redux/Actions";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "./Login.css";

class ConnectedLogin extends Component {
  state = {
    userName: "",
    pass: "",
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
            ورود{" "}
          </div>{" "}
          <TextField
            value={this.state.userName}
            placeholder="رمز کاربری"
            onChange={(e) => {
              this.setState({ userName: e.target.value });
            }}
          />{" "}
          <TextField
            value={this.state.pass}
            type="password"
            placeholder="کلمه عبور"
            onChange={(e) => {
              this.setState({ pass: e.target.value });
            }}
          />{" "}
          <Button
            style={{ marginTop: 20, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              // Simulate authentication call
              Auth.authenticate(
                this.state.userName,
                this.state.pass,
                (user) => {
                  if (!user) {
                    this.setState({ wrongCred: true });
                    return;
                  }

                  this.props.dispatch(setLoggedInUser({ name: user.name }));
                  this.setState(() => ({
                    redirectToReferrer: true,
                  }));
                }
              );
            }}
          >
            ورود{" "}
          </Button>{" "}
          {this.props.wrongCred && (
            <div style={{ color: "red" }}> {this.props.wrongCredMsg} </div>
          )}{" "}
          <NavLink to="/signup">ثبت نام کنید</NavLink>
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { wrongCred : state.wrongCredStatus, wrongCredMsg: state.wrongCredMsg };
};

const Login = withRouter(connect(mapStateToProps)(ConnectedLogin));

export default Login;
