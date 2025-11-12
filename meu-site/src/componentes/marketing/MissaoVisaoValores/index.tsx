import React from "react";
import { Box, Grid2, Paper, Typography, Avatar } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { MissaoVisaoValor } from "../../../types";

interface Props {
  dados: MissaoVisaoValor[];
}

function getIcon(titulo: string) {
  const t = (titulo || "").toLowerCase();
  if (t.includes("miss")) return <FlagIcon fontSize="medium" />;
  if (t.includes("vis")) return <VisibilityIcon fontSize="medium" />;
  // "Valor" ou "Valores"
  return <EmojiEventsIcon fontSize="medium" />;
}

export default function MissaoVisaoValoresCards({ dados }: Props) {
  if (!dados || dados.length === 0) return null;

  return (
    <Grid2 container spacing={2} mt={2}>
      {dados.map((item, idx) => (
        <Grid2 key={idx} size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  width: 40,
                  height: 40,
                }}
              >
                {getIcon(item.titulo)}
              </Avatar>
              <Typography component="h3" variant="subtitle1" fontWeight={700} textTransform="uppercase" color="primary">
                {item.titulo}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {item.descricao}
            </Typography>
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
}
