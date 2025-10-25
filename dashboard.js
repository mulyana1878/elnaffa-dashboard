import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
const API_URL = "https://script.google.com/macros/s/AKfycbyWJeoYaetQDyqADtPcLE4So6UBZfnVrPJOce1G2K17o1hODaIKobRA1oTb5sKlFAuw/exec";
export default function Dashboard(){
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    if(typeof window!=='undefined'){
      const ok = window.localStorage.getItem('eln_auth');
      if(!ok){ window.location.href='/login'; return; }
    }
    axios.get(API_URL).then(res=>setData(res.data||[])).catch(e=>{console.error(e); setData([])}).finally(()=>setLoading(false));
  },[]);
  return (
    <div>
      <Head><title>Dashboard - Elnaffa</title></Head>
      <div className="container">
        <aside className="sidebar">
          <img src="/logo.png" alt="logo" style={{width:64,borderRadius:8,background:'#fff',padding:6}}/>
          <h3 style={{marginTop:12}}>Elnaffa</h3>
          <div style={{marginTop:18}}>
            <div style={{marginBottom:8}}>Dashboard</div>
            <div style={{marginBottom:8}}>Inventory</div>
            <div style={{marginBottom:8}}>Keuangan</div>
            <div style={{marginBottom:8}}>Absensi</div>
            <div style={{marginBottom:8}}>User Access</div>
          </div>
        </aside>
        <main className="main">
          <h1>Database Produk</h1>
          <div style={{margin:'12px 0'}} className="card">{loading ? <div>Loading...</div> : <div>Found {data.length} rows</div>}</div>
          <div className="card" style={{overflowX:'auto'}}>
            <table>
              <thead>
                <tr>{data.length>0 && Object.keys(data[0]).map((k)=> <th key={k}>{k}</th>)}</tr>
              </thead>
              <tbody>{data.map((row,i)=>(<tr key={i}>{Object.values(row).map((v,j)=>(<td key={j}>{String(v)}</td>))}</tr>))}</tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
