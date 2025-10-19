import React from 'react';
import './KararModal.css'; // Modal için basit stiller (aşağıda vereceğim)

const KararModal = ({ karar, onClose }) => {
  if (!karar) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Karar Detayı</h2>
        <p><strong>Karar No:</strong> {karar.kararNo}</p>
        <p><strong>Daire Adı:</strong> {karar.daireAdi}</p>
        <p><strong>Tarih:</strong> {karar.tarih}</p>
        <p><strong>İçerik:</strong> {karar.icerik}</p>
        <p><strong>Anahtar Kelimeler:</strong> {karar.anahtarKelimeler}</p>
      </div>
    </div>
  );
};

export default KararModal;
