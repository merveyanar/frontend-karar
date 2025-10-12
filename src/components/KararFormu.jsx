import React, { useState } from 'react';
import { ekleKarar } from '../services/kararService';
import './KararFormu.css';


const KararFormu = ({kararGetir}) => {
  const [form, setForm] = useState({
    kararNo: '',
    daireAdi: '',
    tarih: '',
    icerik: '',
    anahtarKelimeler: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await ekleKarar(form);
    //alert("Karar başarıyla eklendi!");
    setForm({
      kararNo:'',
      daireAdi:'',
      tarih:'',
      icerik:'',
      anahtarKelimeler:''
    });//formu temizle
if(kararGetir) kararGetir();
    }
    catch(error){
alert("Ekleme başarısız!");
console.error("Hata:",error);
    }
    
  };

  return (
 <form className="karar-form" onSubmit={handleSubmit}>
  <input name="kararNo" value={form.kararNo} onChange={handleChange} placeholder="Karar No" />
  <input name="daireAdi" value={form.daireAdi} onChange={handleChange} placeholder="Daire" />
  <input type="date" name="tarih" value={form.tarih} onChange={handleChange} />
  <textarea name="icerik" value={form.icerik} onChange={handleChange} placeholder="İçerik"></textarea>
  <input name="anahtarKelimeler" value={form.anahtarKelimeler} onChange={handleChange} placeholder="Anahtar Kelimeler" />
  <button type="submit">Ekle</button>
</form>

  );
};

export default KararFormu;
