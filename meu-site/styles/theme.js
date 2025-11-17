import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e4d7b", // Azul marinho sofisticado
      contrastText: "#fff", // Cor do texto dentro do botão primário
    },
    secondary: {
      main: "#2c5f8d", // Azul petróleo complementar
    },
    error: {
      main: "#d32f2f", // Vermelho premium
    },
    warning: {
      main: "#f57c00", // Laranja elegante
    },
    info: {
      main: "#0288d1", // Azul informativo
    },
    success: {
      main: "#388e3c", // Verde sofisticado
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#546e7a",
    },
  },
});

export default theme;
