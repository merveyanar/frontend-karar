import React from 'react';
import { silKarar } from '../services/kararService';
import './KararListesi.css';

const KararListesi = ({ kararlar, kararGetir ,kararSec}) => {
  const sil = async (id) => {
    if (window.confirm('Bu kararı silmek istediğinize emin misiniz?')) {
      try {
        await silKarar(id);
        kararGetir(); // dışarıdan gelen fonksiyonla liste güncelleniyor
      } catch (error) {
        alert('Silme işlemi başarısız oldu!');
        console.error(error);
      }
    }
  };

  if (!kararlar || kararlar.length === 0) {
    return <p className="bos-mesaj">Henüz eklenmiş karar yok.</p>;
  }

  return (
    <div className="karar-listesi">
      <h2>Emsal Karar Listesi</h2>
      {kararlar.map((karar) => (
        <div className="karar-item" key={karar.id}
        onClick={()=>kararSec(karar)}style={{cursor:'pointer'}}>
          <div className="karar-detay">
            <span className="karar-no">{karar.kararNo}</span> - {karar.daireAdi}
          </div>
          <button className="sil-btn" onClick={(e) =>{e.stopPropagation(); sil(karar.id)}}>
            Sil
          </button>
        </div>
      ))}
    </div>
  );
};

export default KararListesi;
