import { useState, useMemo, useEffect } from 'react';

const usePaginate = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data.length, itemsPerPage]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentData(data.slice(start, end));
  }, [data, currentPage, itemsPerPage]);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const resetPage = () => setCurrentPage(1);

  return { currentPage, totalPages, currentData, changePage, resetPage };
};

export default usePaginate;
