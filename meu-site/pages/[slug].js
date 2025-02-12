import { useRouter } from "next/router";
import data from "../src/mock/telas.json";
import { Box, Grid2, Typography } from "@mui/material";
import ShareButtons from "../src/componentes/compartilhamento";
import Image from "next/image";
import React from "react";
import Contato2 from "../src/contatos/contato2";
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
      <Grid2
        container
        spacing={0} // Espaçamento entre os elementos
        alignItems="stretch"
        
      >
        {/* IMAGEM */}
        <Grid2
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: { xs: "300px", md: "100vh" }, // Ajusta altura para efeito visual adequado
            overflow: "hidden",
          }}
        >
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={tela.imagem} // Caminho da imagem
              alt={tela.titulo} // Texto alternativo
              fill
              // width={400}
              // height={300}
              objectFit="cover" // Mantém a proporção da imagem
              quality={100} // Qualidade máxima
            />
          </Box>
        </Grid2>

        {/* TEXTO */}
        <Grid2
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "start",
            px: 3,
            backgroundColor: "#000",
            minHeight: "100vh",
            color:'#FFF'
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, mt: { xs: 0, md: 15 } }}
          >
            {tela.titulo}
          </Typography>
          <Typography variant="body1">
            {tela?.descricao.map((parte, index) =>
              typeof parte === "string" ? (
                parte
              ) : (
                <strong key={index}>{parte.bold}</strong>
              )
            )}
          </Typography>
       
          <ShareButtons url={url} title={title} />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Tela;
