"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Grid2,
  Skeleton,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Simulação de importação do arquivo JSON
import conteudoData from "../src/mock/conteudo.json";
import ShareButtons from "../src/componentes/compartilhamento";
import CustomizedAccordions from "../src/componentes/Accordion";
import Destaque from "../src/componentes/destaque";
import Vantagens from "../src/mock/vantagens.json";
import MissaoVisaoValores from "../src/mock/missaoVisaoValores.json";

const images = [
  "/clinica/consultorio1.webp",
  "/clinica/consultorio2.webp",
  "/clinica/consultorio3.webp",
];

export default function Home() {
  const [offset, setOffset] = React.useState(0);
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Garante que o código roda apenas no cliente
      const imageLoaders = images.map((src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
        });
      });

      Promise.all(imageLoaders).then(() => setLoading(false));
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Clínica Odontologia Cotidente - Dra Gesiely Espalva</title>
        <meta
          name="description"
          content="Clínica Odontológica Cotidete, Dra Gesiely Espalva, Av Rotary N° 100 Jardim
       Nomura Cotia-SP 06717-090 Brasil"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/clinica/recepcao.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offset * 0.5}px)`, // Efeito Parallax
            transition: "transform 0.1s ease-out",
            display: { xs: "none", md: "block", lg: "block" }, // Oculta em telas menores
          }}
        />

        {/* CONTEÚDO SOBRE A IMAGEM */}
        <Grid
          container
          sx={{
            position: "relative",
            height: "100%",
            zIndex: 2,
            color: "white",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          {/* Texto e Botão (Ocultos em md e xs) */}
          <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
            <Typography variant="h6" sx={{ letterSpacing: 2 }}>
              CLÍNICA ODONTOLÓGICA EM Cotia
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", mt: 2, textTransform: "uppercase" }}
            >
              Cotidiente odontologia
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, fontSize: "1rem", fontWeight: "bold" }}
              onClick={() => router.push("/#conteudo")}
            >
              ➤ VAMOS LÁ
            </Button>
          </Grid>

          {/* CARROSSEL (Sempre visível) */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
              <Carousel
                additionalTransfrom={0}
                autoPlay
                autoPlaySpeed={3000}
                infinite
                keyBoardControl
                showDots
                arrows={false} // Remove os botões laterais
                slidesToSlide={1}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style" // Aplica os estilos personalizados
                responsive={{
                  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                  mobile: { breakpoint: { max: 1024, min: 0 }, items: 1 },
                }}
              >
                {images.map((src, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={src}
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: { xs: "block", md: "none", lg: "none" } }}
        xs={12}
        sm={12}
        md={6}
        lg={6}
      >
        {loading ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={250} // Ajuste a altura conforme necessário
            animation="wave"
          />
        ) : (
          <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            keyBoardControl
            showDots
            arrows={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
              mobile: { breakpoint: { max: 1024, min: 0 }, items: 1 },
            }}
          >
            {images.map((src, index) => (
              <Box
                key={index}
                component="img"
                src={src}
                sx={{ width: "100%" }}
              />
            ))}
          </Carousel>
        )}
      </Box>
      <Container id="conteudo" sx={{ p: { xs: 2, sm: 10 } }}>
        <Grid2 container spacing={8}>
          <Grid2 item size={{ xs: 12, md: 6 }} p={3}>
            <Image
              src={
                "https://nepoodonto.com.br/wp-content/uploads/2021/12/nepo-odontologia-post2.jpeg"
              }
              width={350}
              height={200}
              layout="responsive"
              alt="Foto padrão"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              component={"h2"}
              sx={{ fontWeight: "bold", mt: 2, color: "#3ea1f1" }}
            >
              {conteudoData.titulo}
            </Typography>
            <Typography
              variant="h6"
              component={"h4"}
              sx={{ letterSpacing: 2, mt: 2 }}
            >
              {conteudoData.subtitulo}
            </Typography>
            <Typography variant="body1" component={"p"} sx={{ mt: 3 }}>
              {conteudoData.descricao}
            </Typography>
            <Typography sx={{ mt: 3 }}>
              {" "}
              <Link href={"/sobre"} style={{ color: "#3ea1f1" }}>
                CLIQUE AQUI
              </Link>{" "}
              e veja mais vantagens exclusivas da nossa clínica!
            </Typography>
            <ShareButtons
              url={"https://www.cotidente.com.br/"}
              title={"visite o site Cotidente"}
            />
          </Grid2>
          <Grid xs={12} lg={6}>
            <CustomizedAccordions dados={Vantagens} />
          </Grid>
          <Grid xs={6}>{/* Espaço vazio */}</Grid>
        </Grid2>
      </Container>
      <Box
        sx={{ backgroundColor: "#000", padding: { xs: 1, md: 15 } }}
        id="tratamento"
      >
        <Container>
          <Typography
            color={"primary"}
            textTransform={"uppercase"}
            fontWeight={600}
            variant="h6"
            component={"h2"}
            m={"5px 0"}
            p={1}
          >
            TRATAMENTOS EM DESTAQUE
          </Typography>
          <Typography
            color={"primary.contrastText"}
            variant="h5"
            component={"h3"}
            p={1}
          >
            Existem muitos motivos para você sorrir com leveza e satisfação!
          </Typography>
          <Destaque />
        </Container>
      </Box>
      <Box sx={{ padding: 3 } } id='sobre'>
        <Container>
          <Grid2 container spacing={8}>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <Image
                src={"/clinica/equipe.webp"}
                alt="img default"
                width={500}
                height={300}
                layout="responsive"
                style={{ borderRadius: 10 }}
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }} >
              <Typography
                variant="h5"
                component={"h2"}
                color="primary"
                fontWeight={"bold"}
              >
                UM OLHAR PARA DENTRO
              </Typography>
              <CustomizedAccordions dados={MissaoVisaoValores} />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
}
