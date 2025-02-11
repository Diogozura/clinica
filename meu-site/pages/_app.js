import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultSeo } from "next-seo";
import Header from "../src/componentes/header";
import Footer from "../src/componentes/footer";
import '../styles/globals.css';
import theme from "../styles/theme";
import EnderecoContato from "../src/componentes/enderecoContato";
// Criando cache do Emotion
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo
            title="Nome do Site - Melhor Clínica Odontológica"
            description="Clínica odontológica especializada em tratamentos modernos e atendimento humanizado."
            openGraph={{
              type: "website",
              url: "https://seusite.com.br",
              title: "Nome do Site",
              description: "Dentistas especializados para o seu sorriso!",
              images: [{ url: "https://seusite.com.br/capa.jpg", width: 1200, height: 630, alt: "Capa do site" }],
            }}
          />
        {/* CssBaseline para reset de estilos */}
        <ThemeProvider theme={theme}>

       
        <CssBaseline />
        <Header/>
        <Component {...pageProps} />
        <EnderecoContato/>
        <Footer/>
        </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
