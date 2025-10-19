// KararDetay.js

import React from 'react';

function KararDetay({ karar }) {
  return (
    <div className="karar-detay">
      <h2>Detaylar</h2>
      <p><strong>Karar No:</strong> {karar.kararNo}</p>
      <p><strong>Daire Adı:</strong> {karar.daireAdi}</p>
      <p><strong>Tarih:</strong> {karar.tarih}</p>
      <p><strong>İçerik:</strong> {karar.icerik}</p>
      <p><strong>Anahtar Kelimeler:</strong> {karar.anahtarKelimeler}</p>
    </div>
  );
}

export default KararDetay;
