//React
import { useState } from "react";

//Components
import Navbar from "../components/Navbar";

//npm install
import axios from "axios";

export default function Login() {
  const baseURL = "http://localhost:5027/login";

  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  console.log(emailInput);
  console.log(passwordInput);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    axios
      .post(baseURL, {
        email: emailInput,
        password: passwordInput,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Next step is to add Redirect when user is logged in

  return (
    <>
      <Navbar />
      <div className="flex h-dvh w-full items-center justify-center">
        <form className="flex h-96 w-96 flex-col items-center justify-center rounded-md border-2">
          <input
            className="m-4 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="m-4 w-48 border-b-2 p-2 outline-none"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-darkbrown m-4 w-48 cursor-pointer rounded-md p-6 text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
