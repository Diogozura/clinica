import Head from "next/head";
import Link from "next/link";
import React from "react";




export default function Home() {
  return (
    <>
      <Head>
        <title>Clínica Odontologia Cotidente</title>
        <meta name="description" content="Clínica Odontológica Cotidete, Dra Gesiely Espalva, Av Rotary N° 100 Jardim
       Nomura Cotia-SP 06717-090 Brasil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="container">
      <Link href='/contato'>Entre em Contato</Link>
      <Link href='/contato1'>Entre em Contato1</Link>
     
    </div>
    </>
  );
}
