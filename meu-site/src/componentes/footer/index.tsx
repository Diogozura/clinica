import { Box, Container, Typography } from "@mui/material";
import Contato from "../../../src/contatos";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      id="contato"
      sx={{
        backgroundImage: "linear-gradient(to bottom, #0b284f, #000000)",
      }}
      p={1}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }} textAlign={"center"}>
            <Image
              src={"/logoheaderBranca.webp"}
              width={"250"}
              height={"65"}
              alt={"Logo codidente"}
            />
            <Typography color="primary.contrastText">
              HORÁRIO DE FUNCIONAMENTO:
            </Typography>
            <Typography color="primary.contrastText">
              Segunda a Sexta: 9h às 18h
            </Typography>
            <Typography color="primary.contrastText">
              Sábado: 9h às 13h
            </Typography>
            <br />
            <Typography color="primary.contrastText">
              Resp. Téc.: Dra.Glesiely
            </Typography>
            <Typography color="primary.contrastText">
              CRO/SP: 103865 | CRO/SP CL: ****
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%", // Proporção 16:9
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0002773614856!2d-46.9162738!3d-23.604322999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0764411435bd%3A0x2c3598cda7f7a293!2sCotidente%20Odontologia%20Cotia!5e0!3m2!1spt-BR!2sbr!4v1739308818823!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Contato />
          </Grid>
          <Grid size={12} textAlign={"center"} display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'} marginBottom={{ xs: 5, md: 5 }} order={{ xs: 3, md: 3 }} color="primary.contrastText">
            <Typography variant="body2" component={'p'}>© 2021-2025 Cotidente</Typography>
            <Typography variant="body2" component={'p'}> <Link href="/politica-privacidade">Política de privacidade</Link></Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
