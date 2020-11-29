import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./Login.css";

function Login() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.pinimg.com/600x315/ae/81/28/ae8128fa7155b17e76754908be22eb35.jpg"
          alt=""
        />

        <div className="login__text">
          <h1>Join HashTag</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Enter Using Google Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
