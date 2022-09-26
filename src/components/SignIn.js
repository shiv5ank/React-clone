const SignIn = () => {
    return (
      <div className="signin">
        <h3 className="company">Geekster</h3>
        <h2>Sign in to Account</h2>
        <button className="icon">f</button>
        <button className="icon">In</button>
        <button className="icon">G+</button>
        <br></br>
        <span className="instruction">or use your email account</span>
        <br></br>
        <form className="sign_in">
          <input type="text" placeholder="Email" className="email"/>
          <br />
          <br />
          <input type="Password" placeholder="Password" className="password"/>
          <br />
          <br />
          <input type="checkbox" className="checkBox" />
          <span className="checkBox">Remember me</span>
          <a href="/" className="forgot_password">
            Forgot Password?
          </a>
          <br />
          <br />
          <button className="btn-signin">Sign In</button>
        </form>
        <div className="footer_section">
          <a href="/">
            <span className="policy">Privacy Policy</span>
          </a>{" "}
          <strong> . </strong>
          <a href="/" className="footer">
            <span className="terms"> Terms &amp; Condition</span>{" "}
          </a>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  