import React from 'react';

function OuterSection() {
  return (
    <section className="mx-16 sm:mx-[115px] my-16 rounded-xl bg-center bg-no-repeat bg-[url('/src/assets/img/banner/outer.jpeg')] bg-cover bg-gray-700 bg-blend-multiply">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h3 className="mx-2 sm:mx-10 md:mx-20 lg:mx-40 mb-1 text-2xl font-light tracking-tight leading-none text-white opacity-80">NEWSLETTER</h3>
        <h4 className="mx-2 sm:mx-10 md:mx-20 lg:mx-40 mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-4xl lg:text-6xl">Mau Belajar Lebih Banyak?</h4>
        <p className="mx-4 sm:mx-4 md:mx-10 lg:mx-24 xl:mx-48 mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 opacity-100">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
        </p>

        <form>
          <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only"></label>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-transparent focus:outline-none" placeholder="Masukkan Emailmu" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-secondary hover:bg-secondary500 font-medium rounded-lg text-sm px-8 py-2">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default OuterSection;
