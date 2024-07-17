import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import { Link } from 'react-router-dom';
import Navbar from '../components/container/Navbar';
import DividerWithText from '../components/container/DividerWithText';
import PasswordInput from '../components/container/PasswordInput';
import axios from 'axios';
import 'flowbite';

const customOption = ({ label, flag, value }) => (
  <div className="flex " style={{ display: 'flex', alignItems: 'center', width: '20px' }}>
    <img src={flag} alt="flag" style={{ width: '20px', marginRight: '10px' }} />
    {value}
  </div>
);

const SingleValue = ({ data }) => (
  <div className="mb-5 flex items-center " style={{ width: '220px', height: '1px' }}>
    <img src={data.flag} alt="flag" className="w-6 mr-2" />
    <span className="">{data.value}</span>
  </div>
);

const transformCountryData = (countries) => {
  return countries.map((country) => ({
    label: `${country.name.common} (${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''})`,
    value: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`,
    flag: country.flags.svg,
  }));
};

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const [isSearchable, setIsSearchable] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(transformCountryData(response.data));
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.value });
    setIsSearchable(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mt-9 bg-bgc">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white  p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl text-center font-semibold">Pendaftaran Akun</h1>
          <h3 className="text-base text-center font-normal mb-6">Yuk, daftarkan akunmu sekarang juga!</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                Nama Lengkap
              </label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                E-mail
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
                No. Hp
              </label>
              <div className="flex gap-4  ">
                <Select options={countries} onChange={handleCountryChange} formatOptionLabel={customOption} components={{ SingleValue }} isSearchable={isSearchable} className="w-1/3" />
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-2/3 px-3 py-1 border border-gray-300 rounded-r-lg" required />
              </div>
            </div>
            <PasswordInput label="Kata Sandi" id="password" name="password" value={formData.password} onChange={handleChange} />
            <PasswordInput label="Konfirmasi Kata Sandi" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            <a href="" className="flex text-sm font-medium justify-end mt-[-15px]">
              lupa password ?
            </a>
            <div className="my-2 flex flex-col gap-2">
              <button type="submit" className="w-full py-2 px-4 bg-primary text-white rounded-lg transition duration-300 ease-in-out transform hover:bg-primary600 hover:scale-95">
                Daftar
              </button>
              <Link to="/login" className="w-full py-2 px-4 bg-primary100 text-primary rounded-lg transition duration-300 ease-in-out transform hover:bg-primary hover:text-white hover:scale-95 text-center">
                Masuk
              </Link>
            </div>
          </form>
          <DividerWithText text="atau" />
          <div className=" flex flex-col">
            <button className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
              <img src="/src/assets/img/logo/google-icon.png" alt="Google" className="w-4 h-4 mr-2" />
              Daftar dengan Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
