import { Box, Container, Typography } from "@mui/material";
import Contato2 from "../../../src/contatos/contato2";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
export default function Footer() {
  return (
    <Box component={'footer'}  backgroundColor={"#024d79"} p={1}>
    
    <Container>
      <Grid container spacing={1}>
        <Grid  size={{ xs: 12, md: 6 }} textAlign={'center'}>
          <Image
            src={"/logoheader.webp"}
            width={"250"}
            height={"65"}
            alt={"Logo codidente"}
          />
          <Typography color="primary.contrastText">
            HORÁRIO DE FUNCIONAMENTO:
          </Typography>
          <Typography color="primary.contrastText">
            Segunda a Sexta: 8h às 19h
          </Typography>
          <Typography color="primary.contrastText">
            Sábado: 8h às 12h
          </Typography>
          <br />
          <Typography color="primary.contrastText">
            Resp. Téc.: Dra. Melina Vieira Bortolo Subitoni
          </Typography>
          <Typography color="primary.contrastText">
            CRO/SP: 82257 | CRO/SP CL: 026264
          </Typography>
        </Grid>
        <Grid  size={{ xs: 12, md: 6 }}>
          <Contato2 />
        </Grid>
        <Grid size={12}textAlign={'center'}  color="primary.contrastText">
          © 2021-2025 Cotidente
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
