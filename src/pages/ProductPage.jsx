import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Navbar from '../components/container/Navbar';
import Footer from '../components/container/Footer';
import FilterSidebar from '../components/container/FilterSidebar';
import Card from '../components/container/Card';
import { card } from '../Data';
import useFilteredAndPaginate from '../hooks/useFilteredAndPaginate';

function ProductPage() {
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 6;

  const { currentPage, totalPages, currentData, changePage, resetPage } = useFilteredAndPaginate(card, filters, itemsPerPage, sortOrder, searchQuery);

  useEffect(() => {
    resetPage();
  }, [filters, sortOrder, searchQuery]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResetPage = () => {
    setSortOrder('default');
    setSearchQuery('');
    resetPage();
  };

  return (
    <div className="bg-bgc ">
      <Navbar />
      <main className="py-32">
        <div className="container max-w-screen-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Koleksi Video Pembelajaran Unggulan</h1>
          <h2 className="text-base sm:text-lg font-normal opacity-80">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h2>
          <div className="flex flex-col md:flex-row mt-10 p-4 gap-4">
            <FilterSidebar filters={filters} setFilters={handleFiltersChange} resetPage={handleResetPage} />
            <div className="w-full md:pl-4">
              <div className="flex flex-col md:flex-row justify-end items-center mb-4">
                <div className="flex w-full md:w-auto">
                  <select className="form-select mr-2 p-2 bg-white border border-gray-200 rounded-md w-full md:w-auto" value={sortOrder} onChange={handleSortChange}>
                    <option value="default">Urutkan</option>
                    <option value="priceHigh">Harga Tinggi</option>
                    <option value="priceLow">Harga Rendah</option>
                    <option value="aToZ">A to Z</option>
                    <option value="zToA">Z to A</option>
                    <option value="ratingHigh">Rating Tertinggi</option>
                    <option value="ratingLow">Rating Terendah</option>
                  </select>
                  <input type="text" placeholder="Cari Kelas" className="form-input p-2 bg-white border border-gray-200 rounded-md w-full md:w-auto" value={searchQuery} onChange={handleSearchChange} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentData.map((card, index) => (
                  <Card key={index} card={card} />
                ))}
              </div>
              <div className="flex justify-end md:justify-end mt-4">
                <div className="flex justify-center mt-8">
                  <button className="px-4 py-2 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                    <FaChevronLeft />
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page, index) => (
                    <button key={index} className={`px-4 py-2 mx-1 ${page === currentPage ? 'bg-secondary rounded text-white' : 'bg-transparent hover:bg-secondary hover:text-white rounded'}`} onClick={() => changePage(page)}>
                      {page}
                    </button>
                  ))}
                  <button className="px-4 py-2 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
