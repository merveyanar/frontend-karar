import React, { useState, useEffect } from 'react';
import KararFormu from './components/KararFormu';
import KararListesi from './components/KararListesi';
import { getKararlar } from './services/kararService';

function App() {
  const [kararlar, setKararlar] = useState([]);

  const kararGetir = async () => {
   try{

    const res = await getKararlar();
    setKararlar(res.data);
    }
    catch(error){
      console.error("Veriler alınamadı!")
    }
  };

  useEffect(() => {
    kararGetir();
  }, []);

  return (
    <div>
      <h1>Emsal Karar Uygulaması</h1>
      <KararFormu kararGetir={kararGetir} />
      <KararListesi kararlar={kararlar} kararGetir={kararGetir} />
    </div>
  );
}

export default App;
