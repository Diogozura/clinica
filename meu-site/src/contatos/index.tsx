import { useState, ChangeEvent } from "react";
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
  SelectChangeEvent,
} from "@mui/material";
import tratamentos from "../mock/tratamentosContato.json";

interface FormData {
  nome: string;
  whatsapp: string;
  tratamento: string;
  mensagem: string;
}

interface FormErrors {
  nome: boolean;
  whatsapp: boolean;
  tratamento: boolean;
  mensagem: boolean;
}

const maskPhone = (value: string): string => {
  return value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{2})(\d)/, "($1) $2") // Adiciona parênteses ao DDD
    .replace(/(\d{5})(\d)/, "$1-$2") // Adiciona o hífen no número
    .slice(0, 15); // Limita o número ao formato correto
};

export default function Contato2() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    whatsapp: "",
    tratamento: "",
    mensagem: "",
  });

  const [erros, setErros] = useState<FormErrors>({
    nome: false,
    whatsapp: false,
    tratamento: false,
    mensagem: false,
  });

  const handleChange = (campo: keyof FormData, valor: string) => {
    let valorProcessado = valor;
    
    if (campo === "whatsapp") {
      valorProcessado = maskPhone(valor);
      // Se o usuário começar a digitar novamente, remove o erro
      setErros((prev) => ({ ...prev, whatsapp: false }));
    }

    setForm((prev) => ({ ...prev, [campo]: valorProcessado }));

    // Valida enquanto o usuário digita (exceto WhatsApp)
    if (campo !== "whatsapp") {
      setErros((prev) => ({ ...prev, [campo]: valor.trim() === "" }));
    }
  };

  const validarFormulario = (): boolean => {
    const novosErros: FormErrors = {
      nome: form.nome.trim() === "",
      whatsapp: form.whatsapp.replace(/\D/g, "").length < 11,
      tratamento: form.tratamento.trim() === "",
      mensagem: form.mensagem.trim() === "",
    };

    setErros(novosErros);
    return !Object.values(novosErros).includes(true);
  };

  const enviarParaWhatsApp = () => {
    if (!validarFormulario()) return;

    const numeroWhatsApp = "5511975645902";
    const textoMensagem = encodeURIComponent(
      `Olá, tenho interesse! \n\nTratamento: ${form.tratamento},\n ${form.mensagem}`
    );

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;
    window.open(linkWhatsApp, "_blank");
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ height: { xs: 'none', md: '80vh' }, textAlign: 'center', padding: 1 }}>
        <Typography color="white" variant="h4" component={'h3'}> Contato</Typography>
        <Typography color="white" variant="h6" component={'p'}>Agende sua consulta agora mesmo</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            margin: "auto",
            padding: 3,
          }}
        >
          <TextField
            label="Nome"
            value={form.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("nome", e.target.value)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("whatsapp", e.target.value)}
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
            <InputLabel id="demo-simple-select-label">
              Tratamento desejado
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              label="Tratamento desejado"
              value={form.tratamento}
              onChange={(e: SelectChangeEvent) => handleChange("tratamento", e.target.value)}
              sx={{
                color: "white",
                "& .MuiSelect-icon": { color: "white" },
              }}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("mensagem", e.target.value)}
            multiline
            rows={3}
            fullWidth
            error={erros.mensagem}
            helperText={erros.mensagem ? "Mensagem é obrigatória" : ""}
            sx={{
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInputBase-inputMultiline": { color: "white" },
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
