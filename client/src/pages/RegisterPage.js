import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [regisSucc, setRegisSucc] = useState(false);
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });

    if (response.status !== 200) {
      alert("Resgistration failed.");
    } else {
      setRegisSucc(true);
      alert("Resgistration successful");
    }
  }
  if (regisSucc) {
    return <Navigate to={"/login"} />;
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="user name"
        value={username}
        onChange={(ev) => setUsename(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
