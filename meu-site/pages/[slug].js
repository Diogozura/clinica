import { useRouter } from "next/router";
import data from "../src/mock/telas.json";
import { Box, Grid, Grid2, Typography } from "@mui/material";
import ShareButtons from "../src/componentes/compartilhamento";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Head from "next/head";

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
    <Head>
      <title>{tela.titulo} - cotidente</title>
    </Head>
      <Grid
        container
        spacing={2}
        backgroundColor={tela.background}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {/* Imagem fixa */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "sticky",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/a.jpg"} // Substitua pela sua imagem
            alt={tela.titulo} // Texto alternativo
            width={600}
            height={800}
            objectFit="contain"
            style={{ maxHeight: "100vh", width: "100%", marginTop: 54 }}
          />
        </Grid>

        {/* Texto rolável */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ minHeight: "100vh", p: 4, color: tela.color }}
        >
          <Typography variant="h4" gutterBottom mt={15} color="primary">
            {tela?.titulo}
          </Typography>
          {tela?.descricao.map((item, index) =>
            typeof item === "string" ? (
              <Typography key={index} component="span">
                {item}
              </Typography>
            ) : item?.bold ? (
              <Typography key={index} component="span" fontWeight="bold">
                {item?.bold}
              </Typography>
            ) : null
          )}
          {/* Renderiza os detalhes (múltiplos casos) */}
          {tela?.detalhes &&
            tela?.detalhes.map((detalhe, index) => (
              <Box key={index} mt={3} p={2}>
                <Typography variant="p"  color="primary">
                  {detalhe?.titulo}
                </Typography>
                <Typography variant="body1" mt={1}>
                  {detalhe?.descricao}
                </Typography>
                {detalhe?.lista && (
                  <ul>
                    {detalhe?.lista.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}

          <Typography variant="h4" color="#154381" gutterBottom mt={15}>
            Cotidente Odontologia
          </Typography>
          <Typography variant="body1" paragraph>
            Sua melhor opção para Tratamento de canal sessão única em
            Guaratinguetá. <Link href={"/contato"}> Marque uma avaliação</Link>
            ou converse com a gente por <Link href={""}>WhatsApp</Link>!
          </Typography>
          <ShareButtons url={tela.slug} title={tela.titulo} />
        </Grid>
      </Grid>
    </>
  );
};

export default Tela;
