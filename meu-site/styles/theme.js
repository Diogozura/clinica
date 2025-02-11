import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00afec", // Azul personalizado
      contrastText: "#fff", // Cor do texto dentro do botão primário
    },
    secondary: {
      main: "#ff4081", // Rosa padrão do MUI (substitua pela sua cor)
    },
    error: {
      main: "#f44336", // Vermelho padrão do MUI
    },
    warning: {
      main: "#ff9800", // Laranja
    },
    info: {
      main: "#2196f3", // Azul claro
    },
    success: {
      main: "#4caf50", // Verde
    },
  },
});

export default theme;
