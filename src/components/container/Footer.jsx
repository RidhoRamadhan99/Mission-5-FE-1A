import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6">
      <div className="mx-24 my-10 max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://hariesok.id" className="flex items-center">
              <img src="/src/assets/img/logo/logo.png" className="w-44 h-8" />
            </a>
            <p className="text-gray-700 mt-2">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <p className="text-gray-700 mt-1">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p className="text-gray-700 mt-1">+62-877-7123-1234</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Kategori</h2>
              <ul className="text-gray-600">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Digital &amp; Teknologi
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Pemasaran
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Manajemen Bisnis
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Pengembangan Diri
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Desain
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Perusahaan</h2>
              <ul className="text-gray-600">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Tentang Kami
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Kebijakan Privasi
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Ketentuan Layanan
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Bantuan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase">Komunitas</h2>
              <ul className="text-gray-600">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Tips Sukses
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            @ 2023{' '}
            <a href="https://hariesok.id" className="hover:underline">
              Gerobak Sayur
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.09 3.09 0 00-.748-1.15 3.09 3.09 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058h-.468zM12 6.462a5.538 5.538 0 100 11.076 5.538 5.538 0 000-11.076zm0 1.8a3.738 3.738 0 110 7.476 3.738 3.738 0 010-7.476zm5.818-1.26a1.294 1.294 0 11-2.588 0 1.294 1.294 0 012.588 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2.162C6.513 2.162 2.163 6.512 2.163 12c0 4.177 2.577 7.732 6.21 9.256-.084-.784-.159-1.99.033-2.85.172-.753 1.108-4.795 1.108-4.795s-.281-.562-.281-1.389c0-1.299.754-2.27 1.694-2.27.8 0 1.186.6 1.186 1.318 0 .803-.511 2.002-.776 3.12-.222.943.469 1.712 1.39 1.712 1.667 0 2.947-1.758 2.947-4.288 0-2.242-1.615-3.808-3.922-3.808-2.673 0-4.244 2.006-4.244 4.082 0 .804.31 1.667.698 2.138a.283.283 0 01.065.271c-.072.3-.233.944-.267 1.073-.038.145-.121.177-.28.106-1.046-.424-1.7-1.754-1.7-3.16 0-2.384 1.972-5.24 5.878-5.24 3.14 0 5.202 2.275 5.202 4.715 0 3.223-1.798 5.648-4.435 5.648-.888 0-1.722-.474-2.008-1.027 0 0-.48 1.835-.592 2.289-.179.693-.533 1.385-.853 1.923A9.838 9.838 0 0022.163 12c0-5.488-4.35-9.838-9.838-9.838z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 0C5.371 0 0 5.371 0 12c0 5.065 3.163 9.365 7.631 10.877-.006-.796-.006-1.74.203-2.594.214-.892 1.368-5.98 1.368-5.98s-.349-.698-.349-1.73c0-1.625.947-2.84 2.128-2.84.99 0 1.468.742 1.468 1.63 0 .992-.632 2.48-.959 3.855-.272 1.148.576 2.084 1.707 2.084 2.048 0 3.63-2.162 3.63-5.28 0-2.755-1.982-4.682-4.808-4.682-3.277 0-5.215 2.455-5.215 4.973 0 .988.372 2.047.839 2.623.092.116.106.218.079.336-.086.363-.271 1.145-.311 1.31-.049.203-.158.245-.364.147-1.367-.637-2.224-2.636-2.224-4.24 0-3.457 2.524-6.63 7.285-6.63 3.821 0 6.787 2.727 6.787 6.36 0 3.784-2.38 6.832-5.69 6.832-1.11 0-2.154-.572-2.508-1.235l-.681 2.6c-.248.955-.923 2.148-1.381 2.876 1.038.317 2.137.494 3.286.494 6.629 0 12-5.371 12-12S18.629 0 12 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
