// Updated DetailMuseum.tsx
import React, { useState } from 'react';

import '@/app/globals.css'; 
import '@/css/DetailTiketMuseum.css';

import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Image from 'next/image';

function DetailMuseum() {
  const [regularTickets, setRegularTickets] = useState(1);
  const [familyTickets, setFamilyTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(4);

  return (
    <div className="detailmuseum-body">
      <Navbar />
      <div className="detailmuseum-section1">
        {/* Museum Information Section */}
        <div className="museum-info">
          <div className="img">
            <Image
              src="/images/museum-geologi.jpg" // Ensure the image path matches your project structure
              width={500}
              height={500}
              alt="Museum Geologi"
              className="museum-image"
            />
          </div>
          <div className="museum-details">
            <h1 className="museum-title">Museum Geologi</h1>
            <p className="museum-description">
              Museum Geologi didirikan pada tanggal 16 Mei 1929. Museum ini direnovasi dengan
              mendapat dana bantuan dari JICA, setelah renovasi selesai, Museum Geologi dibuka
              kembali dan diresmikan oleh Wakil Presiden RI, Megawati Soekarnoputri pada 23
              Agustus 2000.
            </p>
            <ul className="museum-info-list">
              <li>📍 Jl. Diponegoro No.57, Kota Bandung Jawa Barat</li>
              <li>⏰ 9:00 am - 3:00 pm</li>
              <li>⭐ 4.5</li>
              <li>❤️ 1543 likes</li>
            </ul>
            <div className="button-group">
              <button className="btn">Directions</button>
              <button className="btn">Call</button>
              <button className="btn primary">Buy Tickets</button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews">
          <h3 className="reviews-title">Reviews for Museum Geologi</h3>
          {[
            {
              name: 'Hakam Jawa',
              rating: 4,
              comment:
                'This museum is amazing! The collection is rich and informative, with modern and interactive exhibits. The staff are friendly, the atmosphere is welcoming, and it\'s perfect for learning while enjoying art and history.',
            },
            {
              name: 'Azmi Pecel',
              rating: 4,
              comment:
                'This museum is very fascinating! Each exhibit is well-organized and tells a story, making the visit even more memorable. A must-visit place for art and history enthusiasts!',
            },
            {
              name: 'Rado Depok',
              rating: 4,
              comment:
                'This museum is very fascinating! Each exhibit is well-organized and tells a story, making the visit even more memorable. A must-visit place for art and history enthusiasts!',
            },
          ].map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-card-title">
                <strong>{review.name}</strong> {Array(review.rating).fill('⭐').join('')}
              </p>
              <p className="review-comment">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailMuseum;
