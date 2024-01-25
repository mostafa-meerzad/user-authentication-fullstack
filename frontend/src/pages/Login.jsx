const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <br />
      <form action="">
        <label htmlFor="name">
          name
          <input type="text" id="name" name="name" />
        </label>
        <br />
        <label htmlFor="email">
          email
          <input type="email" name="email" id="email" />
        </label>
      </form>
    </div>
  );
};
export default Login;
