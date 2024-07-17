import { useState, useMemo } from 'react';

const useFilteredAndPaginate = (data, filters, itemsPerPage, sortOrder, searchQuery) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    let filtered = data;

    // Filter kategori
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter((item) => filters.category.includes(item.category));
    }

    // Filter harga
    if (filters.price && filters.price.length > 0) {
      filtered = filtered.filter((item) => {
        const itemPrice = item.discount ? parseInt(item.discount.replace('Rp ', '').replace('k', '000'), 10) : parseInt(item.harga.replace('Rp ', '').replace('k', '000'), 10);
        return filters.price.some((priceRange) => {
          const [min, max] = priceRange.split('-').map((p) => (p === '500k+' ? Infinity : parseInt(p.replace('k', '000'), 10)));
          return itemPrice >= min && itemPrice < max;
        });
      });
    }

    // Filter durasi
    if (filters.duration) {
      filtered = filtered.filter((item) => {
        const itemDuration = parseInt(item.durasi.split(' ')[0], 10);
        if (filters.duration === 'kurang dari 4 jam') {
          return itemDuration < 4;
        } else if (filters.duration === '4 - 8 jam') {
          return itemDuration >= 4 && itemDuration <= 8;
        } else if (filters.duration === 'lebih dari 8 jam') {
          return itemDuration > 8;
        }
        return true;
      });
    }

    // Search query
    if (searchQuery) {
      filtered = filtered.filter((item) => item.judul.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return filtered;
  }, [data, filters, searchQuery]);

  const sortedData = useMemo(() => {
    let sorted = [...filteredData];

    // Sort order
    if (sortOrder !== 'default') {
      switch (sortOrder) {
        case 'priceHigh':
          sorted.sort((a, b) => {
            const priceA = a.discount ? parseInt(a.discount.replace('Rp ', '').replace('k', '000'), 10) : parseInt(a.harga.replace('Rp ', '').replace('k', '000'), 10);
            const priceB = b.discount ? parseInt(b.discount.replace('Rp ', '').replace('k', '000'), 10) : parseInt(b.harga.replace('Rp ', '').replace('k', '000'), 10);
            return priceB - priceA;
          });
          break;
        case 'priceLow':
          sorted.sort((a, b) => {
            const priceA = a.discount ? parseInt(a.discount.replace('Rp ', '').replace('k', '000'), 10) : parseInt(a.harga.replace('Rp ', '').replace('k', '000'), 10);
            const priceB = b.discount ? parseInt(b.discount.replace('Rp ', '').replace('k', '000'), 10) : parseInt(b.harga.replace('Rp ', '').replace('k', '000'), 10);
            return priceA - priceB;
          });
          break;
        case 'aToZ':
          sorted.sort((a, b) => a.judul.localeCompare(b.judul));
          break;
        case 'zToA':
          sorted.sort((a, b) => b.judul.localeCompare(a.judul));
          break;
        case 'ratingHigh':
          sorted.sort((a, b) => b.rate[0].rateAvg - a.rate[0].rateAvg);
          break;
        case 'ratingLow':
          sorted.sort((a, b) => a.rate[0].rateAvg - b.rate[0].rateAvg);
          break;
        default:
          break;
      }
    }

    return sorted;
  }, [filteredData, sortOrder]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, itemsPerPage]);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const resetPage = () => setCurrentPage(1);

  return { currentPage, totalPages, currentData, changePage, resetPage };
};

export default useFilteredAndPaginate;
