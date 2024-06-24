import React from "react";

function LoginComponent() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input type="text" placeholder="username" />
        <br />
        <label>Password</label>
        <input type="text" placeholder="password" />
        <br />
      </form>
    </div>
  );
}

export default LoginComponent;
