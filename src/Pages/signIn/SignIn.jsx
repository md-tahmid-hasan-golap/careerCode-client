import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import SignInLotte from "../../assets/lotties/signIn.json.json";
import Lottie from "lottie-react";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Email:", email);
    console.log("Password:", password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 px-4 py-10">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 w-full max-w-6xl">
        {/* Lottie Animation */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Lottie
            animationData={SignInLotte}
            loop={true}
            className="w-full h-auto"
          />
        </div>

        {/* Register Form */}
        <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-6">Login Now!</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="text-right mb-4">
                <a href="#" className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </form>
            <p className="py-2 text-center">
              Dont’t Have An Account ?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
