const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <br />
      <form method="POST" action="http://localhost:3000/api/users/signup">
        <label htmlFor="email">
          email
          <input type="email" name="email" id="email" />
        </label>
        <br />
        <label htmlFor="password">
          password
          <input type="text" id="password" name="password" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Login;
