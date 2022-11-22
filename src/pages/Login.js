import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password };
    console.log(data);
    axios.post("http://localhost:3001/auth/login", data).then((res) => {
      localStorage.setItem("accessToken", res.data.token);
      navigate("/");
    });
  };
  return (
    <div className="px-10">
      <div className="h-auto bg-white w-full rounded-md px-5 py-5">
        <div className="flex flex-row overflow-x-hidden">
          <h1 className="font-bold w-full pb-3 text-left">MENU NAME</h1>
        </div>
        <div className="flex flex-col sm:flex-row overflow-x-hidden sm:w-auto justify-end"></div>
        <div>
          <div class="overflow-x-auto h-full min-h-max py-5 shadow-md sm:rounded-lg">
            <input
              type="text"
              placeholder="login"
              className="bg-black text-white"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="bg-black text-white"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-blue-600" onClick={login}>
              save
            </button>
          </div>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  );
}

export default Login;
