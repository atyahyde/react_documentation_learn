import { useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect } from "react";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = () => {
  const [failedLogin, setFailedLogin] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // console.log(e.target.email.value);
    // console.log("login");
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setFailedLogin(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <span className="text-sm text-gray-400">username: johnd</span>
      <InputForm
        label="Username"
        type="text"
        placeholder="Username"
        name="username"
        ref={usernameRef}
      />
      <span className="text-sm text-gray-400">password: m38rmF$</span>
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />

      <Button classname="bg-blue-500 text-white w-full" type="submit">
        Login
      </Button>
      {failedLogin && (
        <p className="text-red-500 text-center pt-4">{failedLogin}</p>
      )}
    </form>
  );
};

export default FormLogin;
