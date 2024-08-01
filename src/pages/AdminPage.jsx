import React, { useState, useEffect } from 'react';
import Navbar from '../components/container/Navbar';
import { card } from '../Data';
import usePaginate from '../hooks/usePaginate';
import { FaChevronRight, FaChevronLeft, FaEdit, FaTrash } from 'react-icons/fa';
import { ImPlus, ImMinus } from 'react-icons/im';
import Notification from '../components/container/Notification';
import useStore from '../store';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/api/productService';

function AdminPage() {
  const [data, setData] = useState(card);
  const [editId, setEditId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const itemsPerPage = 5;
  const { currentPage, totalPages, currentData, changePage, resetPage } = usePaginate(data, itemsPerPage);

  const addNotification = useStore((state) => state.addNotification);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setData(products);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchData();
  }, []);

  const [form, setForm] = useState({
    id: null,
    judul: '',
    desc: '',
    author: '',
    pekerjaan: '',
    harga: '',
    discount: '',
    category: '',
    durasi: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId !== null) {
        // Update existing data
        await updateProduct(editId, form);
        const updatedData = data.map((item) => (item.id === editId ? { ...form, id: editId } : item));
        setData(updatedData);
        addNotification('Data successfully updated!');
        setEditId(null);
      } else {
        // Add new data
        const newProduct = await addProduct(form);
        const newData = [newProduct, ...data];
        setData(newData);
        addNotification('Data successfully added!');
      }
    } catch (error) {
      addNotification('Error updating data!', 'error');
    }
    setForm({
      id: null,
      judul: '',
      desc: '',
      author: '',
      pekerjaan: '',
      harga: '',
      discount: '',
      category: '',
      durasi: '',
    });
    resetPage(); // Reset halaman setelah submit
    setIsFormVisible(false); // Hide the form after submission
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm(item);
    setIsFormVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when editing
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      addNotification('Data successfully deleted!');
    } catch (error) {
      addNotification('Error deleting data!', 'error');
    }
  };

  const handleAddNew = () => {
    setIsFormVisible((prev) => !prev); // Toggle form visibility
    setEditId(null);
    if (!isFormVisible) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when adding new
    }
  };

  // Fungsi untuk mengubah harga menjadi nilai numerik
  const parseHarga = (harga) => parseFloat(harga.replace('Rp ', '').replace('k', '')) * 1000;

  // Mengurutkan data berdasarkan harga
  const sortedHarga = [...data].sort((a, b) => parseHarga(a.harga) - parseHarga(b.harga));

  return (
    <div className="bg-bgc min-h-screen">
      <Navbar />
      <Notification />
      <main className="container mx-auto py-8 pt-32">
        <div className="mt-1 flex justify-between items-center">
          <h2 className="text-3xl font-bold mb-4">Data List</h2>
          <button onClick={handleAddNew} className="text-gray-800 hover:text-gray-900 px-4 py-2 r">
            {isFormVisible ? <ImMinus size={20} /> : <ImPlus size={20} />}
          </button>
        </div>
        {isFormVisible && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl mb-4">{editId !== null ? 'Edit Data' : 'Tambah Data'}</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Judul</label>
              <input type="text" name="judul" value={form.judul} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Deskripsi</label>
              <input type="text" name="desc" value={form.desc} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Author</label>
              <select name="author" value={form.author} onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="">Select Author</option>
                {data.map((item) => (
                  <option key={item.author} value={item.author}>
                    {item.author}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Harga</label>
              <input type="text" name="harga" value={form.harga} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Durasi</label>
              <input type="text" name="durasi" value={form.durasi} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              {editId !== null ? 'Update' : 'Submit'}
            </button>
          </form>
        )}
        <ul className="space-y-4">
          {currentData.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 relative group">
              <h3 className="text-lg font-bold">{item.judul}</h3>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-700">Author: {item.author}</p>
                  <p className="text-gray-700">Harga: {item.harga}</p>
                  <p className="text-gray-700">Durasi: {item.durasi}</p>
                </div>
                <div className="flex flex-col justify-start gap-3 items-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700">
                    <FaEdit size={20} />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center items-center">
          <button className="px-4 py-3 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} className={`px-4 py-2 mx-1 ${page === currentPage ? 'bg-secondary rounded text-white' : 'bg-transparent hover:bg-secondary hover:text-white rounded'}`} onClick={() => changePage(page)}>
              {page}
            </button>
          ))}
          <button className="px-4 py-3 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
            <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
