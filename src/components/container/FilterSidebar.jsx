import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { FaBook, FaShoppingBag, FaRegClock } from 'react-icons/fa';
import { card } from '../../Data';

const FilterSidebar = ({ filters, setFilters, resetPage }) => {
  const [showBidangStudi, setShowBidangStudi] = useState(true);
  const [showHarga, setShowHarga] = useState(true);
  const [showDurasi, setShowDurasi] = useState(true);

  const uniqueCategories = [...new Set(card.map((item) => item.category))];

  const initialCheckedFilters = uniqueCategories.reduce((acc, category) => {
    acc[category] = false;
    return acc;
  }, {});
  const initialPriceFilters = {
    '0-100k': false,
    '100k-200k': false,
    '200k-300k': false,
    '300k-500k': false,
    '500k+': false,
  };
  const initialDurationFilters = '';

  const [checkedFilters, setCheckedFilters] = useState(initialCheckedFilters);
  const [priceFilters, setPriceFilters] = useState(initialPriceFilters);
  const [durationFilters, setDurationFilters] = useState(initialDurationFilters);

  const toggleBidangStudi = () => setShowBidangStudi(!showBidangStudi);
  const toggleHarga = () => setShowHarga(!showHarga);
  const toggleDurasi = () => setShowDurasi(!showDurasi);

  const handleCheckboxChange = (filterType, value) => {
    setCheckedFilters((prevCheckedFilters) => {
      const newCheckedFilters = {
        ...prevCheckedFilters,
        [value]: !prevCheckedFilters[value],
      };

      const selectedFilters = Object.keys(newCheckedFilters).filter((key) => newCheckedFilters[key]);
      console.log('Selected Categories:', selectedFilters);

      if (selectedFilters.length === 0) {
        setFilters((prevFilters) => {
          const newFilters = { ...prevFilters };
          delete newFilters[filterType];
          return newFilters;
        });
      } else {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [filterType]: selectedFilters,
        }));
      }

      resetPage();
      return newCheckedFilters;
    });
  };

  const handlePriceChange = (value) => {
    setPriceFilters((prevPriceFilters) => {
      const newPriceFilters = {
        ...prevPriceFilters,
        [value]: !prevPriceFilters[value],
      };

      const selectedPrices = Object.keys(newPriceFilters).filter((key) => newPriceFilters[key]);
      console.log('Selected Price Ranges:', selectedPrices);

      if (selectedPrices.length === 0) {
        setFilters((prevFilters) => {
          const newFilters = { ...prevFilters };
          delete newFilters.price;
          return newFilters;
        });
      } else {
        setFilters((prevFilters) => ({
          ...prevFilters,
          price: selectedPrices,
        }));
      }

      resetPage();
      return newPriceFilters;
    });
  };

  const handleDurationChange = (value) => {
    setDurationFilters(value);
    console.log('Selected Duration:', value);

    setFilters((prevFilters) => ({
      ...prevFilters,
      duration: value,
    }));

    resetPage();
  };

  return (
    <div className="w-96 flex flex-col h-max p-4 bg-white rounded-lg shadow-md border border-gray-200 overflow-auto">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold mb-4">Filter</h3>
        <button
          className="text-red-500 mb-4"
          onClick={() => {
            setCheckedFilters(initialCheckedFilters);
            setPriceFilters(initialPriceFilters);
            setDurationFilters(initialDurationFilters);
            setFilters({});
            resetPage();
          }}
        >
          Reset
        </button>
      </div>

      {/* Bidang Studi */}
      <div className="mb-4 border border-gray-200 rounded-lg p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2 text-green-500">
            <FaBook />
            <h4 className="text-md font-medium">Bidang Studi</h4>
          </div>
          <button onClick={toggleBidangStudi}>{showBidangStudi ? <HiChevronUp /> : <HiChevronDown />}</button>
        </div>
        {showBidangStudi && (
          <div>
            {uniqueCategories.map((category) => (
              <label key={category} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" checked={checkedFilters[category]} onChange={() => handleCheckboxChange('category', category)} />
                {category}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Harga */}
      <div className="mb-4 border border-gray-200 rounded-lg p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2 text-green-500">
            <FaShoppingBag />
            <h4 className="text-md font-medium">Harga</h4>
          </div>
          <button onClick={toggleHarga}>{showHarga ? <HiChevronUp /> : <HiChevronDown />}</button>
        </div>
        {showHarga && (
          <div>
            {Object.keys(initialPriceFilters).map((priceRange) => (
              <label key={priceRange} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" checked={priceFilters[priceRange]} onChange={() => handlePriceChange(priceRange)} />
                {priceRange}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Durasi */}
      <div className="mb-4 border border-gray-200 rounded-lg p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2 text-green-500">
            <FaRegClock />
            <h4 className="text-md font-medium">Durasi</h4>
          </div>
          <button onClick={toggleDurasi}>{showDurasi ? <HiChevronUp /> : <HiChevronDown />}</button>
        </div>
        {showDurasi && (
          <div>
            <label className="flex items-center mb-2">
              <input type="radio" name="duration" className="mr-2" checked={durationFilters === 'kurang dari 4 jam'} onChange={() => handleDurationChange('kurang dari 4 jam')} />
              Kurang dari 4 jam
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="duration" className="mr-2" checked={durationFilters === '4 - 8 jam'} onChange={() => handleDurationChange('4 - 8 jam')} />4 - 8 jam
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="duration" className="mr-2" checked={durationFilters === 'lebih dari 8 jam'} onChange={() => handleDurationChange('lebih dari 8 jam')} />
              Lebih dari 8 jam
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
