import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <section className="auth-page">

        <div className="auth-card">

          <h1>Welcome  Back 👋</h1>

          <p>Login to manage your tickets.</p>

          <form className="auth-form">

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>
              Login
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Login;