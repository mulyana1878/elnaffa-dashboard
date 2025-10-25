import { useState } from 'react';
import Head from 'next/head';
const USERNAME = "ADMIN";
const PASSWORD = "0001";
export default function Login() {
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [msg, setMsg] = useState('');
  function doLogin(e){ e.preventDefault(); if(u.toUpperCase()===USERNAME && p===PASSWORD){ if(typeof window!=='undefined') window.localStorage.setItem('eln_auth','1'); window.location.href='/dashboard'; } else setMsg('Username atau password salah'); }
  return (
    <div>
      <Head><title>Login - Elnaffa</title></Head>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',background:'#232B61'}}>
        <div style={{background:'#fff',padding:28,borderRadius:12,width:420}}>
          <img src="/logo.png" alt="logo" style={{width:72,display:'block',margin:'0 auto 12px'}}/>
          <h2 style={{textAlign:'center',color:'#232B61'}}>Login Elnaffa</h2>
          <form onSubmit={doLogin}>
            <input placeholder='Username' value={u} onChange={e=>setU(e.target.value)} style={{width:'100%',padding:10,marginTop:12}} />
            <input placeholder='Password' type='password' value={p} onChange={e=>setP(e.target.value)} style={{width:'100%',padding:10,marginTop:12}} />
            <div style={{marginTop:12,display:'flex',gap:8}}>
              <button type='submit' style={{flex:1,background:'#232B61',color:'#fff',padding:10,border:0,borderRadius:6}}>Login</button>
            </div>
          </form>
          {msg && <div style={{color:'red',marginTop:10}}>{msg}</div>}
        </div>
      </div>
    </div>
  );
}
