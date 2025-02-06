import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    
    console.log("Dados antes do envio:", formData);

    const SHEET_ID = "1VVLqD1wQsi0IKj0zCiBfGL0Adoupk_w8Zu3CGtw2iAg";
    const API_KEY = "AIzaSyByT152OiKQjO84Yp6QbJfi6lufkKbxHV0"; // Substitua pela sua API Key

    const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A1:append?valueInputOption=RAW&key=${API_KEY}`;

    const body = {
      values: [[new Date().toISOString(), formData.nome, formData.email, formData.mensagem]],
    };

    try {
      const response = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log("Resposta da API do Google Sheets:", response);

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados para o Google Sheets");
      }

      setStatus("Formulário enviado com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      console.error("Erro no envio:", error);
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
