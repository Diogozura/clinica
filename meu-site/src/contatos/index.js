import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Contato1() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
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

   
      setStatus("Formulário enviado!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error) {
  
      setStatus("Erro ao enviar. Tente novamente.");
    }
  };
  return (
    <>
      <h2>Entre em Contato</h2>

      <p>{status}</p>
      <Container maxWidth="sm" sx={{ height: "80vh", padding: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            margin: "auto",
            padding: 3,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6" textAlign="center">
           Contato - email e salvar no google Planilhas
          </Typography>

          
        <TextField
          type="text"
          name="nome"
          
          placeholder="Seu Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <TextField
          type="email"
          name="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="mensagem"
          placeholder="Sua Mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
        <Button onClick={handleSubmit}>Enviar</Button>
     
        </Box>
      </Container>
    </>
  );
}
