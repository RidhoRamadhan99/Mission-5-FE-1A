import React from 'react';
import './Home.css';

function HeroSection() {
  return (
    <section className="mx-16 sm:mx-[115px] mt-16 mb-5 rounded-xl bg-center bg-no-repeat bg-[url('/src/assets/img/banner/hero.jpeg')] bg-cover bg-gray-700 bg-blend-multiply">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
        <h1 className="mx-2 sm:mx-10 md:mx-20 lg:mx-40 mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
        <p className="mx-4 sm:mx-4 md:mx-10 lg:mx-24 xl:mx-48 mb-8 text-sm sm:text-lg font-normal text-gray-300 lg:text-xl">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
        </p>
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-primary500 hover:bg-primary600 transition duration-300">
            Temukan Video Course untuk Dipelajari!
            <svg className="w-3.5 h-3.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
