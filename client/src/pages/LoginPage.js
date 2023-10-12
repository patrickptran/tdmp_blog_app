export default function LoginPage() {
  return (
    <form className="login" /*onSubmit={login}*/>
      <h1>Login</h1>
      <input type="text" placeholder="user name" />
      <input type="password" placeholder="user password" />
      <button>Login</button>
    </form>
  );
}
