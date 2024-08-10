import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"; // Import axios
import Navbar from "../components/container/Navbar";
import Footer from "../components/container/Footer";

import { review } from "../Data";
import { FaStar, FaVideo, FaBook } from "react-icons/fa";
import { GrDocumentVerified, GrLanguage } from "react-icons/gr";
import { TbFileCertificate } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";

const DetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [relatedReviews, setRelatedReviews] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66a313e444aa6370457fbc3e.mockapi.io/products"
        );
        const productsData = response.data;
        console.log("Products data:", productsData); // Tambahkan log untuk memeriksa data produk
        setProducts(productsData);
        const productDetail = productsData.find((item) => item.id === id); // Bandingkan sebagai string
        console.log("Product detail:", productDetail); // Tambahkan log untuk memeriksa detail produk
        setDetail(productDetail);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!detail) {
    return (
      <div className="h-screen bg-bgc">
        <Navbar />
        <div className="flex items-center justify-center py-72">
          <h1 className="text-3xl font-bold text-center">Data not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgc">
      <Navbar />
      <main className="flex justify-center w-full py-32">
        <div className="container max-w-full mx-28">
          <section
            className="mb-8 relative bg-cover bg-center h-[400px] rounded-lg"
            style={{ backgroundImage: `url(${detail.bannerImg})` }}
          >
            <div className="absolute inset-0 bg-black rounded-lg opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-start gap-4 p-8 ml-20">
              <h1 className="mt-32 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                {detail.judul}
              </h1>
              <p className="mb-1 text-gray-200 mr-72">
                Belajar bersama tutor profesional di Video Course. Kapanpun, di
                manapun.
              </p>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(detail.rate.rateAvg)
                        ? "text-yellow-500 mt-1"
                        : "text-gray-300 mt-1"
                    }
                  />
                ))}
                <span className="ml-2 text-gray-300">
                  {detail.rate.rateAvg}
                </span>
                <span className="ml-2 text-gray-300">
                  ({detail.rate.rateCount})
                </span>
              </div>
            </div>
          </section>

          <div className="flex items-start justify-between">
            <div className="w-2/3 pr-8">
              <div className="items-start">
                <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md h-max">
                  <h2 className="mb-2 text-lg font-semibold">Deskripsi</h2>
                  <p className="mb-6 text-gray-700">{detail.desc}</p>
                </div>

                <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md h-max">
                  <h2 className="mb-6 text-lg font-semibold">
                    Belajar Bersama Tutor Profesional
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {relatedReviews.length > 0 ? (
                      relatedReviews.map((review) => (
                        <div
                          key={review.id}
                          className="px-4 py-4 mb-6 border border-gray-200 rounded-lg shadow-md"
                        >
                          <div className="flex items-center mb-2">
                            <img
                              src={review.avatar}
                              alt={review.author}
                              className="w-10 h-10 mr-4 rounded-full"
                            />
                            <div>
                              <p className="font-bold text-gray-700 text-md">
                                {review.author}
                              </p>
                              <p className="text-sm text-gray-500">
                                {review.pekerjaan}
                              </p>
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
              <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md h-max">
                <h2 className="mb-2 text-lg font-semibold">
                  Kamu akan Mempelajari
                </h2>
                <ul className="mb-6">
                  <li className="mb-2">Introduction to UI/UX design</li>
                  <li className="mb-2">User research and personas</li>
                  <li className="mb-2">Wireframing and prototyping</li>
                  <li className="mb-2">Usability testing</li>
                  <li className="mb-2">Designing for accessibility</li>
                </ul>
              </div>

              <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md h-max">
                <h2 className="mb-6 text-lg font-semibold">
                  Rating dan Review
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {relatedReviews.length > 0 ? (
                    relatedReviews.map((review) => (
                      <div
                        key={review.id}
                        className="px-4 py-4 mb-6 border border-gray-200 rounded-lg shadow-md"
                      >
                        <div className="flex items-center mb-2">
                          <img
                            src={review.avatar}
                            alt={review.author}
                            className="w-10 h-10 mr-4 rounded-full"
                          />
                          <div>
                            <p className="font-bold text-gray-700 text-md">
                              {review.author}
                            </p>
                            <p className="text-sm text-gray-500">
                              {review.pekerjaan}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p>{review.text}</p>
                        </div>
                        <div className="flex items-center my-3">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-yellow-500 mt-1"
                                  : "text-gray-300 mt-1"
                              }
                            />
                          ))}
                          <span className="ml-2 text-gray-600">
                            {review.rating}
                          </span>
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
              <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md h-max">
                <h3 className="mb-4 text-xl font-bold">
                  Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
                  Manager.
                </h3>
                <div className="flex justify-between my-4">
                  <div>
                    {detail.hargaDisc ? (
                      <div className="flex items-center">
                        <span className="mr-3 text-xl font-bold text-green-500">
                          {detail.hargaDisc}
                        </span>
                        <span className="text-xl text-gray-400 line-through ">
                          {detail.harga}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-green-500">
                        {detail.harga}
                      </span>
                    )}
                  </div>
                  <div>
                    {detail.hargaDisc ? (
                      <div className="p-2 text-sm font-normal bg-yellow-500 text-yellow-50 rounded-xl">
                        <p>Diskon {detail.discount}</p>
                      </div>
                    ) : (
                      <div className="hidden"></div>
                    )}
                  </div>
                </div>
                <button className="w-full py-3 my-2 text-center text-white rounded-lg bg-primary500 hover:bg-primary600">
                  Beli Kelas
                </button>
                <div className="my-4">
                  <h2 className="mb-2 text-lg font-semibold">
                    Kelas Ini Sudah Termasuk
                  </h2>
                  <ul className="grid grid-cols-2 pl-1 space-y-3">
                    <li className="flex items-center text-gray-500">
                      <GrDocumentVerified className="mr-2" />
                      Ujian Akhir
                    </li>
                    <li className="flex items-center text-gray-500">
                      <FaVideo className="mr-2" />
                      49 Video
                    </li>
                    <li className="flex items-center text-gray-500">
                      <FaBook className="mr-2" />7 Dokumen
                    </li>
                    <li className="flex items-center text-gray-500">
                      <TbFileCertificate className="mr-2" />
                      Sertifikat
                    </li>
                    <li className="flex items-center text-gray-500">
                      <TfiWrite className="mr-2" />
                      Pretest
                    </li>
                  </ul>
                </div>
                <div className="my-4">
                  <h2 className="mb-2 text-lg font-semibold">
                    Bahasa Pengantar
                  </h2>
                  <p className="flex items-center text-gray-500">
                    <GrLanguage className="mr-2" />
                    Bahasa Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-8 mb-1 text-3xl font-semibold">
            Video Pembelajaran Terkait Lainnya
          </h2>
          <h4 className="mb-8 text-xl font-light">
            Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
          </h4>
          <div className="flex gap-4 flex-rows">
            {products.slice(0, 4).map((relatedCard) => (
              <Link
                to={`/product/${relatedCard.id}`}
                key={relatedCard.id}
                className="p-3 bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <img
                  src={relatedCard.bannerImg}
                  alt="Course Thumbnail"
                  className="object-cover w-full h-32 mb-4 rounded-lg"
                />
                <h3 className="mb-2 text-lg font-bold">{relatedCard.judul}</h3>
                <p className="mb-2 text-gray-600">{relatedCard.author}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(relatedCard.rate.rateAvg)
                          ? "text-yellow-500 mt-1"
                          : "text-gray-300 mt-1"
                      }
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {relatedCard.rate.rateAvg}
                  </span>
                </div>
                <span className="text-lg font-bold text-green-500">
                  {relatedCard.hargaDisc || relatedCard.harga}
                </span>
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
