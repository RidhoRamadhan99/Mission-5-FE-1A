import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Navbar from '../components/container/Navbar';
import Footer from '../components/container/Footer';

import { review } from '../Data';
import { FaStar, FaVideo, FaBook } from 'react-icons/fa';
import { GrDocumentVerified, GrLanguage } from 'react-icons/gr';
import { TbFileCertificate } from 'react-icons/tb';
import { TfiWrite } from 'react-icons/tfi';

const DetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [relatedReviews, setRelatedReviews] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://66a313e444aa6370457fbc3e.mockapi.io/products');
        const productsData = response.data;
        console.log('Products data:', productsData); // Tambahkan log untuk memeriksa data produk
        setProducts(productsData);
        const productDetail = productsData.find((item) => item.id === id); // Bandingkan sebagai string
        console.log('Product detail:', productDetail); // Tambahkan log untuk memeriksa detail produk
        setDetail(productDetail);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!detail) {
    return (
      <div className="bg-bgc h-screen">
        <Navbar />
        <div className="flex justify-center items-center py-72">
          <h1 className="text-center font-bold text-3xl">Data not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgc">
      <Navbar />
      <main className="py-32 flex justify-center w-full">
        <div className="container max-w-full mx-28">
          <section className="mb-8 relative bg-cover bg-center h-[400px] rounded-lg" style={{ backgroundImage: `url(${detail.bannerImg})` }}>
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="flex flex-col justify-start gap-4 relative z-10 p-8 ml-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-32">{detail.judul}</h1>
              <p className="text-gray-200 mr-72 mb-1">Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.</p>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(detail.rate.rateAvg) ? 'text-yellow-500 mt-1' : 'text-gray-300 mt-1'} />
                ))}
                <span className="text-gray-300 ml-2">{detail.rate.rateAvg}</span>
                <span className="text-gray-300 ml-2">({detail.rate.rateCount})</span>
              </div>
            </div>
          </section>

          <div className="flex justify-between items-start">
            <div className="w-2/3 pr-8">
              <div className="items-start">
                <div className="bg-white h-max p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                  <h2 className="text-lg font-semibold mb-2">Deskripsi</h2>
                  <p className="text-gray-700 mb-6">{detail.desc}</p>
                </div>

                <div className="bg-white h-max p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                  <h2 className="text-lg font-semibold mb-6">Belajar Bersama Tutor Profesional</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedReviews.length > 0 ? (
                      relatedReviews.map((review) => (
                        <div key={review.id} className="mb-6 px-4 py-4 rounded-lg shadow-md border border-gray-200">
                          <div className="flex items-center mb-2">
                            <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full mr-4" />
                            <div>
                              <p className="text-gray-700 text-md font-bold">{review.author}</p>
                              <p className="text-gray-500 text-sm">{review.pekerjaan}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <p>{review.text}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No reviews yet.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-white h-max p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold mb-2">Kamu akan Mempelajari</h2>
                <ul className="mb-6">
                  <li className="mb-2">Introduction to UI/UX design</li>
                  <li className="mb-2">User research and personas</li>
                  <li className="mb-2">Wireframing and prototyping</li>
                  <li className="mb-2">Usability testing</li>
                  <li className="mb-2">Designing for accessibility</li>
                </ul>
              </div>

              <div className="bg-white h-max p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold mb-6">Rating dan Review</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedReviews.length > 0 ? (
                    relatedReviews.map((review) => (
                      <div key={review.id} className="mb-6 px-4 py-4 rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center mb-2">
                          <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full mr-4" />
                          <div>
                            <p className="text-gray-700 text-md font-bold">{review.author}</p>
                            <p className="text-gray-500 text-sm">{review.pekerjaan}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p>{review.text}</p>
                        </div>
                        <div className="flex items-center my-3">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? 'text-yellow-500 mt-1' : 'text-gray-300 mt-1'} />
                          ))}
                          <span className="text-gray-600 ml-2">{review.rating}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-1/3 rounded-lg">
              <div className="bg-white h-max p-6 rounded-lg shadow-md border border-gray-200 mb-6">
                <h3 className="text-xl font-bold mb-4">Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</h3>
                <div className="my-4 flex justify-between">
                  <div>
                    {detail.hargaDisc ? (
                      <div className="flex items-center">
                        <span className="text-green-500 text-xl font-bold mr-3">{detail.hargaDisc}</span>
                        <span className="text-gray-400 text-xl line-through ">{detail.harga}</span>
                      </div>
                    ) : (
                      <span className="text-green-500 text-xl font-bold">{detail.harga}</span>
                    )}
                  </div>
                  <div>
                    {detail.hargaDisc ? (
                      <div className="bg-yellow-500 text-yellow-50 text-sm font-normal p-2 rounded-xl">
                        <p>Diskon {detail.discount}</p>
                      </div>
                    ) : (
                      <div className="hidden"></div>
                    )}
                  </div>
                </div>
                <button className="text-center py-3 bg-primary500 hover:bg-primary600 rounded-lg w-full text-white my-2">Beli Kelas</button>
                <div className="my-4">
                  <h2 className="text-lg font-semibold mb-2">Kelas Ini Sudah Termasuk</h2>
                  <ul className="pl-1 grid grid-cols-2 space-y-3">
                    <li className="flex text-gray-500 items-center">
                      <GrDocumentVerified className="mr-2" />
                      Ujian Akhir
                    </li>
                    <li className="flex text-gray-500 items-center">
                      <FaVideo className="mr-2" />
                      49 Video
                    </li>
                    <li className="flex text-gray-500 items-center">
                      <FaBook className="mr-2" />7 Dokumen
                    </li>
                    <li className="flex text-gray-500 items-center">
                      <TbFileCertificate className="mr-2" />
                      Sertifikat
                    </li>
                    <li className="flex text-gray-500 items-center">
                      <TfiWrite className="mr-2" />
                      Pretest
                    </li>
                  </ul>
                </div>
                <div className="my-4">
                  <h2 className="text-lg font-semibold mb-2">Bahasa Pengantar</h2>
                  <p className="flex items-center text-gray-500">
                    <GrLanguage className="mr-2" />
                    Bahasa Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mt-8 mb-1">Video Pembelajaran Terkait Lainnya</h2>
          <h4 className="text-xl font-light mb-8">Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</h4>
          <div className="flex flex-rows gap-4">
            {products.slice(0, 4).map((relatedCard) => (
              <Link to={`/product/${relatedCard.id}`} key={relatedCard.id} className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                <img src={relatedCard.bannerImg} alt="Course Thumbnail" className="w-full h-32 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold mb-2">{relatedCard.judul}</h3>
                <p className="text-gray-600 mb-2">{relatedCard.author}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.round(relatedCard.rate.rateAvg) ? 'text-yellow-500 mt-1' : 'text-gray-300 mt-1'} />
                  ))}
                  <span className="text-gray-600 ml-2">{relatedCard.rate.rateAvg}</span>
                </div>
                <span className="text-green-500 text-lg font-bold">{relatedCard.hargaDisc || relatedCard.harga}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPage;
