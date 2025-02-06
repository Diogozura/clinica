export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método não permitido" });
    }
  
    try {
      const { nome, email, mensagem } = req.body;
    
      const SHEET_ID = "1VVLqD1wQsi0IKj0zCiBfGL0Adoupk_w8Zu3CGtw2iAg";
      const API_KEY = "AIzaSyAsB5c6fdwDoq33ZEJ4LempteeeyQGFGEw"; // Substitua pela sua API Key
  
    //   const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A1:append?valueInputOption=RAW&key=${API_KEY}`;
  
    //   const body = {
    //     values: [[new Date().toISOString(), nome, email, mensagem]],
    //   };
  
    //   const response = await fetch(sheetUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   });
  
    //   if (!response.ok) {
    //     throw new Error("Erro ao enviar os dados para o Google Sheets");
    //   }
  
      res.status(200).json({ message: "Formulário enviado com sucesso! " , nome, email, mensagem});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  