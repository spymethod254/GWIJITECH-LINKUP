import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await registerUser(form);

      toast.success(
        "Account created! Please check your email to verify your account."
      );

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-cyan-400">
            🔗 LINKUP.HUB
          </h1>

          <p className="text-slate-400 mt-2">
            Create your account 🚀
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-cyan-500"
          />

          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-cyan-500"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-cyan-500"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-cyan-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;