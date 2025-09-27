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
import ConsentimentoPrivacidade from "../src/componentes/consentimentoPrivacidade";
import { hasAccepted } from "../src/utils/consent";
// Criando cache do Emotion
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    // Carrega scripts do Google apenas se houver consentimento
    try {
      if (typeof window !== 'undefined' && hasAccepted()) {
        // exemplo: gtag
        if (!window.__gtag_loaded) {
          const s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtag/js?id=UA-109476301-1';
          document.head.appendChild(s);
          const inline = document.createElement('script');
          inline.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-109476301-1');";
          document.head.appendChild(inline);
          window.__gtag_loaded = true;
        }
      }
    } catch (e) {}

    // Ouve mudanças de consentimento
    const handler = (e) => {
      const accepted = e?.detail?.accepted === true;
      if (accepted) {
        if (!window.__gtag_loaded) {
          const s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtag/js?id=UA-109476301-1';
          document.head.appendChild(s);
          const inline = document.createElement('script');
          inline.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-109476301-1');";
          document.head.appendChild(inline);
          window.__gtag_loaded = true;
        }
      }
    };
    try { window.addEventListener('consent-changed', handler); } catch {}

    return () => {
      try { window.removeEventListener('consent-changed', handler); } catch {}
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo
            title="Cotidente - Clínica Odontológica Especializada"
            description="Clínica odontológica Cotidente especializada em tratamentos modernos e atendimento humanizado. Selo Infinity Prime de qualidade."
            openGraph={{
              type: "website",
              url: "https://www.cotidente.com.br",
              title: "Cotidente - Clínica Odontológica",
              description: "Dentistas especializados para o seu sorriso!",
              images: [{ url: "https://www.cotidente.com.br/imagem_graph.png", width: 1200, height: 630, alt: "Logo Cotidente" }],
            }}
          />
        {/* CssBaseline para reset de estilos */}
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
  <ConsentimentoPrivacidade />
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
