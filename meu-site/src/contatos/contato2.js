import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import tratamentos from "../mock/tratamentosContato.json";
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
  
    const numeroWhatsApp = "5511975645902"; // Substitua pelo seu número com DDD
    const textoMensagem = encodeURIComponent(
      `Olá, tenho interesse! \n\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nTratamento: ${form.tratamento}\nMensagem: ${form.mensagem}`
    );

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;
    window.open(linkWhatsApp, "_blank");
  };

  return (
    <>
     
      <Container maxWidth="sm" sx={{ height: "80vh", padding: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            margin: "auto",
            padding: 3,
            // backgroundColor: "#f9f9f9",
        
          }}
        >
          <TextField
            label="Nome"
            value={form.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            fullWidth
            error={erros.nome}
            helperText={erros.nome ? "Nome é obrigatório" : ""}
            sx={{
              input: { color: "white" },
              "& label": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <TextField
            label="WhatsApp"
            value={form.whatsapp}
            onChange={(e) => handleChange("whatsapp", e.target.value)}
            fullWidth
            error={erros.whatsapp}
            helperText={
              erros.whatsapp ? "Informe um número válido com DDD" : ""
            }
            sx={{
              input: { color: "white" },
              "& label": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <FormControl
            fullWidth
            error={erros.tratamento}
            disableScrollLock
            sx={{
              input: { color: "white" },
              "& label": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          >
            <InputLabel id="demo-simple-select-label" disableScrollLock>
              Tratamento desejado
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              label="Tratamento desejado"
              value={form.tratamento}
              onChange={(e) => handleChange("tratamento", e.target.value)}
              sx={{
                color: "white", // Texto branco quando um item for selecionado
                "& .MuiSelect-icon": { color: "white" }, // Ícone da setinha branco
              }}
              disableScrollLock
            >
              {tratamentos.map((item) => (
                <MenuItem key={item.id} value={item.name} disableScrollLock>
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
            sx={{
              "& .MuiInputBase-input": { color: "white" }, // Para texto normal
              "& .MuiInputBase-inputMultiline": { color: "white" }, // Para multiline
              "& label": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />

          <Button
            variant="contained"
            color="success"
            onClick={enviarParaWhatsApp}
          >
            Enviar para WhatsApp
          </Button>
        </Box>
      </Container>
    </>
  );
}
