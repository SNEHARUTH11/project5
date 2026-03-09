import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function LoginUI() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };
  navigate("/editor");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        {/* LOGO */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">MyApp</h1>
        </div>

        {/* TOGGLE */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setIsSignUp(false)}
            className={`w-1/2 py-2 rounded-lg text-sm font-medium transition ${
              !isSignUp
                ? "bg-white shadow text-blue-600"
                : "text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`w-1/2 py-2 rounded-lg text-sm font-medium transition ${
              isSignUp
                ? "bg-white shadow text-blue-600"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* FORM */}
        <form className="space-y-4">

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Remember + Forgot */}
          {!isSignUp && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            {isSignUp ? "Create Account" : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm"
          >
            <FcGoogle size={20} className="mr-3" />
            Continue with Google
          </button>

        </form>

      </div>
    </div>
  );
}

export default LoginUI;