/* eslint-disable no-unused-vars */
import React from 'react';

export default function Banner() {
  return (
    <div className="bg-green-600 text-white py-40">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Selamat Datang di Perpustakaan Kami!</h2>
        <p className="text-lg mb-4">Temukan buku favorit Anda dan banyak lagi.</p>
        <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
      </div>
    </div>
  );
}
