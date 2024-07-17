import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/container/Navbar";
import DividerWithText from "../components/container/DividerWithText";
import PasswordInput from "../components/container/PasswordInput";
import "flowbite";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="mt-9 bg-bgc">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-center">Masuk Akun</h1>
          <h3 className="mb-6 text-base font-normal text-center">
            Silakan masuk ke akunmu sekarang!
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <PasswordInput
              label="Kata Sandi"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <a
              href=""
              className="flex text-sm font-medium justify-end mt-[-15px] mb-4"
            >
              lupa password?
            </a>
            <div className="flex flex-col gap-2 my-2">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white transition duration-300 ease-in-out transform rounded-lg bg-primary hover:bg-primary600 hover:scale-95"
              >
                Masuk
              </button>
              <Link
                to="/register"
                className="w-full px-4 py-2 text-center transition duration-300 ease-in-out transform rounded-lg bg-primary100 text-primary hover:bg-primary hover:text-white hover:scale-95"
              >
                Daftar
              </Link>
            </div>
          </form>
          <DividerWithText text="atau" />
          <div className="flex flex-col">
            <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
              <img
                src="/src/assets/img/logo/google-icon.png"
                alt="Google"
                className="w-4 h-4 mr-2"
              />
              Masuk dengan Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
