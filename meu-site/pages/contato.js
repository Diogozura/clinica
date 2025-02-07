import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Enviando...");
  
  //   const SHEETDB_URL = "https://sheetdb.io/api/v1/x5i91zg4yl4ix";
  
  //   try {
  //     const response = await fetch(SHEETDB_URL, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (response.ok) {
  //       setStatus("Dados enviados para o Google Sheets!");
  //       setFormData({ nome: "", email: "", mensagem: "" });
  //     } else {
  //       throw new Error("Erro ao enviar.");
  //     }
  //   } catch (error) {
  //     console.error("Erro no envio:", error);
  //     setStatus("Erro ao enviar. Tente novamente.");
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
  
    const FORM_SUBMIT_URL = "https://formsubmit.co/lucindo1736@uorak.com";
  
    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error("Erro ao enviar e-mail.");
  
      console.log("E-mail enviado com sucesso!");
      setStatus("Formulário enviado!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      console.error("Erro:", error);
      setStatus("Erro ao enviar. Tente novamente.");
    }
  };
  return (
    <div className="container">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Seu Nome" value={formData.nome} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
        <textarea name="mensagem" placeholder="Sua Mensagem" value={formData.mensagem} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
      
      <p>{status}</p>
   
    </div>
    
  );
}
