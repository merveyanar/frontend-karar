import React, { useState, useEffect } from 'react';
import KararFormu from './components/KararFormu';
import KararModal from './components/KararModal';
import KararListesi from './components/KararListesi'
import {
  getKararlar,
  syncKararlar,
  aramaYap,
} from './services/kararService'; // Yeni eklenen servisler
import KararDetay from './components/KararDetay';

function App() {
  const [kararlar, setKararlar] = useState([]);
  const [seciliKarar,setSeciliKarar]=useState(null);//secilen karar

  const [arama, setArama] = useState('');
  const [loading, setLoading] = useState(false);

  const kararGetir = async () => {
    try {
      setLoading(true);
      const res = await getKararlar();
      setKararlar(res.data);
    } catch (error) {
      console.error('Veriler alınamadı!', error);
    } finally {
      setLoading(false);
    }
  };

  const kararSec=(karar)=>{
    setSeciliKarar(karar);
  };

  const kararSyncEt = async () => {
    try {
      setLoading(true);
      await syncKararlar(); // POST: /sync/kararlar
      await kararGetir();   // Sync sonrası listeyi güncelle
      alert('Sync tamamlandı!');
    } catch (err) {
      console.error('Sync hatası', err);
      alert('Sync işlemi başarısız!');
    } finally {
      setLoading(false);
    }
  };

  const kararAra = async () => {
    try {
      setLoading(true);
      if (!arama.trim()) {
        await kararGetir();
        return;
      }
      const res = await aramaYap(arama); // GET: /api/aramalar/arama?q=arama
      setKararlar(res.data);
    } catch (error) {
      console.error('Arama başarısız!', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    kararGetir();
  }, []);

  

return (
  <div className="container">
  <div className="app-box">
    <h1 className="title">📚 Emsal Karar Uygulaması</h1>

    <div className="search-bar">
      <input
        type="text"
        placeholder="Karar no veya içerik ara..."
        value={arama}
        onChange={(e) => setArama(e.target.value)}
        className="input"
      />
      <button onClick={kararAra} className="btn btn-primary">
        Ara
      </button>
      <button onClick={kararSyncEt} className="btn btn-sync">
        Sync Et
      </button>
    </div>

    {loading && <p className="loading-text">🔄 Yükleniyor...</p>}

    <KararFormu kararGetir={kararGetir} />
    <KararListesi kararlar={kararlar} kararGetir={kararGetir} kararSec={kararSec} />
  {seciliKarar &&<KararModal karar={seciliKarar} onClose={()=>setSeciliKarar(null)}/>}
  </div>
</div>

);

}
export default App;
