import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const BarcodeScanner = () => {
  const scannerRef = useRef(null);
  const [codigo, setCodigo] = useState('');

  useEffect(() => {
    const scanner = new Html5Qrcode("reader");

    scanner.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      },
      (decodedText) => {
        setCodigo(decodedText);
        scanner.stop();
      },
      (error) => {
        // você pode ignorar erros contínuos
      }
    );

    return () => {
      scanner.stop().catch((err) => console.error("Erro ao parar scanner", err));
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Leitor de Código de Barras</h2>
      <div id="reader" ref={scannerRef} style={{ width: '300px', margin: '0 auto' }}></div>

      <div style={{ marginTop: 20 }}>
        <label>Código Lido:</label>
        <input type="text" value={codigo} readOnly />
      </div>
    </div>
  );
};

export default BarcodeScanner;
