import { useState, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { Box, Button, Typography, Link } from "@mui/material";

const CookieAlert = () => {
  const cookies = parseCookies();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!cookies.userAcceptedCookies) {
      setOpen(true);
    }
  }, [cookies]);

  const handleAccept = () => {
    setCookie(null, "userAcceptedCookies", "true", {
      maxAge: 7 * 24 * 60 * 60, // 1 semana
      path: "/",
    });
    setOpen(false);
  };

  const handleDecline = () => {
    setCookie(null, "userAcceptedCookies", "false", {
      maxAge: 7 * 24 * 60 * 60, // 1 semana
      path: "/",
    });
    setOpen(false);
  };

  const handleLearnMore = () => {
    // Aqui você pode redirecionar para a página de política de privacidade
    window.location.href = "/politica-de-privacidade";
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        left: 0,
        width: "100%",
        bgcolor: "white",
        p: 2,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        display: { xs: "block", lg: "flex" }, // Aqui usamos xs: "block" e lg: "flex"
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Typography variant="body2" sx={{ flex: 1 }}>
        Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies. 
        <Link
          href="#"
          onClick={handleLearnMore}
          sx={{ ml: 1, textDecoration: "underline", color: "primary.main" }}
        >
          Saiba mais
        </Link>
      </Typography>
      <Box>
        <Button onClick={handleAccept} variant="contained" color="primary" sx={{ mr: 1 }}>
          Aceitar
        </Button>
        <Button onClick={handleDecline} variant="outlined" color="secondary">
          Recusar
        </Button>
      </Box>
    </Box>
  );
};

export default CookieAlert;
