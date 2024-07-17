import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ card }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-200 cursor-pointer">
      <div className="p-4">
        <img src={card.bannerImg} alt="Course Thumbnail" className="w-full h-50 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold my-2 whitespace-nowrap overflow-hidden text-ellipsis">{card.judul}</h3>
        <p className="text-gray-600 mb-5 whitespace-nowrap overflow-hidden text-ellipsis">{card.desc}</p>
        <div className="flex items-center mb-3">
          <img src={card.profileImg} alt={card.author} className="w-8 h-8 rounded-lg mr-2" />
          <div>
            <p className="text-gray-700 text-md font-bold">{card.author}</p>
            <p className="text-gray-500 text-sm">{card.pekerjaan}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center sm:flex-row sm:items-center sm:justify-between mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.round(card.rate[0].rateAvg) ? 'text-yellow-500 mt-1' : 'text-gray-300 mt-1'} />
            ))}
            <span className="text-gray-600 ml-2">{card.rate[0].rateAvg}</span>
            <span className="text-gray-600 ml-2">({card.rate[0].rateCount})</span>
          </div>
          {card.discount ? (
            <div className="flex items-center">
              <span className="text-red-500 text-sm line-through mr-2">{card.harga}</span>
              <span className="text-green-500 text-lg font-bold">{card.discount}</span>
            </div>
          ) : (
            <span className="text-green-500 text-lg font-bold">{card.harga}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
