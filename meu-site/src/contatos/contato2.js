import { useState } from "react";
import { Button, TextField, Box, Typography, FormControl, InputLabel, Select, MenuItem, Container } from "@mui/material";
import tratamentos  from '../mock/tratamentosContato.json'
import Head from "next/head";
const maskPhone = (value) => {
  return value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{2})(\d)/, "($1) $2") // Adiciona parênteses ao DDD
    .replace(/(\d{5})(\d)/, "$1-$2") // Adiciona o hífen no número
    .slice(0, 15); // Limita o número ao formato correto
};

export default function Contato2() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    tratamento: "",
    mensagem: "",
  });

  const [erros, setErros] = useState({
    nome: false,
    whatsapp: false,
    tratamento: false,
    mensagem: false,
  });

  const handleChange = (campo, valor) => {
    if (campo === "whatsapp") {
      valor = maskPhone(valor);
      // Se o usuário começar a digitar novamente, remove o erro
      setErros((prev) => ({ ...prev, whatsapp: false }));
    }

    setForm((prev) => ({ ...prev, [campo]: valor }));

    // Valida enquanto o usuário digita (exceto WhatsApp)
    if (campo !== "whatsapp") {
      setErros((prev) => ({ ...prev, [campo]: valor.trim() === "" }));
    }
  };

  const validarFormulario = () => {
    const novosErros = {
      nome: form.nome.trim() === "",
      whatsapp: form.whatsapp.replace(/\D/g, "").length < 11, // Validação do WhatsApp só ao tentar enviar
      tratamento: form.tratamento.trim() === "",
      mensagem: form.mensagem.trim() === "",
    };

    setErros(novosErros);
    return !Object.values(novosErros).includes(true);
  };

  const enviarParaWhatsApp = () => {
    if (!validarFormulario()) return;

    const numeroWhatsApp = "5581999999999"; // Substitua pelo seu número com DDD
    const textoMensagem = encodeURIComponent(
      `Olá, tenho interesse! \n\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nTratamento: ${form.tratamento}\nMensagem: ${form.mensagem}`
    );

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;
    window.open(linkWhatsApp, "_blank");
  };

  return (
    <>
  <Head>
    <title>Contato - Cotidente</title>
  </Head>
    <Container maxWidth="sm" sx={{height:'80vh', padding:4 }}>
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
        contato mandar mensagem pronta direto para o whatsApp da clinica
      </Typography>

      <TextField
        label="Nome"
        value={form.nome}
        onChange={(e) => handleChange("nome", e.target.value)}
        fullWidth
        error={erros.nome}
        helperText={erros.nome ? "Nome é obrigatório" : ""}
      />
      <TextField
        label="WhatsApp"
        value={form.whatsapp}
        onChange={(e) => handleChange("whatsapp", e.target.value)}
        fullWidth
        error={erros.whatsapp}
        helperText={erros.whatsapp ? "Informe um número válido com DDD" : ""}
      />
      <FormControl fullWidth error={erros.tratamento}>
        <InputLabel id="demo-simple-select-label">Tratamento desejado</InputLabel>
        <Select
         labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label="Tratamento desejado"
          value={form.tratamento}
          onChange={(e) => handleChange("tratamento", e.target.value)}
        >
          {tratamentos.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {erros.tratamento && (
          <Typography variant="caption" color="error">
            Escolha um tratamento
          </Typography>
        )}
      </FormControl>
      <TextField
        label="Mensagem"
        value={form.mensagem}
        onChange={(e) => handleChange("mensagem", e.target.value)}
        multiline
        rows={3}
        fullWidth
        error={erros.mensagem}
        helperText={erros.mensagem ? "Mensagem é obrigatória" : ""}
      />

      <Button variant="contained" color="primary" onClick={enviarParaWhatsApp}>
        Enviar para WhatsApp
      </Button>
    </Box>
    </Container>
   
    </>
  );
}
