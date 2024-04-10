import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" action="">
        <input
          type="text"
          id="username"
          className="border p-3 rounded-lg"
          placeholder="Username"
        />
        <input
          type="email"
          id="email"
          className="border p-3 rounded-lg"
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p> Have an account ?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
