const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <br />
      <form method="POST" action="http://localhost:3000/api/users/signup">
        <label htmlFor="name">
          name
          <input type="name" name="name" id="name" />
        </label>
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
export default Signup;
