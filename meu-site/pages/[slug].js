import { useRouter } from "next/router";
import data from "../src/mock/telas.json";
import { Box, Grid, Typography } from "@mui/material";
import ShareButtons from "../src/componentes/compartilhamento";
export async function getStaticPaths() {
  // Gerar as rotas com base no slug
  const paths = data.map((tela) => ({
    params: { slug: tela.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const tela = data.find((item) => item.slug === slug);

  return {
    props: {
      tela,
    },
  };
}

const Tela = ({ tela }) => {
  console.log("tela", tela);
  const url = `https://www.seusite.com.br/${tela.slug}`;
  const title = tela.titulo;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" },
        padding: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: 500,
          backgroundImage: `url(${tela.imagem})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h3">{tela.titulo}</Typography>
          <Typography>{tela.descricao}</Typography>
        </Grid>
        <Grid xs={12} textAlign={'center'}>
          <ShareButtons url={url} title={title} />
        </Grid>
      </Grid>

    </Box>
  );
};

export default Tela;
