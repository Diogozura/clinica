import { useRouter } from "next/router";
import data from "../src/mock/telas.json";
import { Box, Grid2, Typography } from "@mui/material";
import ShareButtons from "../src/componentes/compartilhamento";
import Image from "next/image";
import React from "react";
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
  const url = `https://www.seusite.com.br/${tela?.slug}`;
  const title = tela.titulo;


  return (
    <>
      <Box sx={{ py: 5 }}>
      <Grid2
        container
        spacing={2} // Espaçamento entre os elementos
        alignItems="center"
      >
        {/* IMAGEM */}
        <Grid2
          item
          size={{ xs: 12, md:6 }}
         
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // Importante para a imagem se ajustar corretamente
            height: "400px", // Altura definida para o contêiner da imagem
          }}
        >
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={tela.imagem} // Caminho da imagem
              alt={tela.titulo} // Texto alternativo
              layout="fill" // Faz a imagem preencher toda a área
              objectFit="contain" // Mantém a proporção da imagem
              quality={100} // Qualidade máxima
            />
          </Box>
        </Grid2>

        {/* TEXTO */}
        <Grid2 item  size={{ xs: 12, md:6 }} sx={{ textAlign: "start", px: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            {tela.titulo}
          </Typography>
          <Typography variant="body1">{tela?.descricao.map((parte, index) =>
                typeof parte === "string" ? (
                  parte
                ) : (
                  <strong key={index}>{parte.bold}</strong>
                )
              )}</Typography>
        <ShareButtons url={url} title={title} />
        </Grid2>
      </Grid2>
    </Box>
    </>
  );
};

export default Tela;
