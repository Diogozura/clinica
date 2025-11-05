import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultSeo } from "next-seo";
import Header from "../src/componentes/header";
import Footer from "../src/componentes/footer";
import "../styles/globals.css";
import theme from "../styles/theme";
import EnderecoContato from "../src/componentes/enderecoContato";
import ConsentimentoPrivacidade from "../src/componentes/consentimentoPrivacidade";
import { hasAccepted } from "../src/utils/consent";
import FloatingWhatsApp from "../src/componentes/marketing/FloatingWhatsApp";
import marketing from "../src/mock/marketing.json";

// Criando cache do Emotion
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    // Carrega scripts do Google apenas se houver consentimento
    try {
      if (typeof window !== "undefined" && hasAccepted()) {
        // exemplo: gtag
        if (!window.__gtag_loaded) {
          const s = document.createElement("script");
          s.async = true;
          s.src = "https://www.googletagmanager.com/gtag/js?id=UA-109476301-1";
          document.head.appendChild(s);
          const inline = document.createElement("script");
          inline.innerHTML =
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-109476301-1');";
          document.head.appendChild(inline);
          window.__gtag_loaded = true;
        }
      }
    } catch (e) {}

    // Ouve mudanças de consentimento
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      const accepted = customEvent?.detail?.accepted === true;
      if (accepted) {
        if (!window.__gtag_loaded) {
          const s = document.createElement("script");
          s.async = true;
          s.src = "https://www.googletagmanager.com/gtag/js?id=UA-109476301-1";
          document.head.appendChild(s);
          const inline = document.createElement("script");
          inline.innerHTML =
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-109476301-1');";
          document.head.appendChild(inline);
          window.__gtag_loaded = true;
        }
      }
    };
    try {
      window.addEventListener("consent-changed", handler);
    } catch {}

    return () => {
      try {
        window.removeEventListener("consent-changed", handler);
      } catch {}
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo
        title="Cotidente - Clínica Odontológica Especializada"
        description="Clínica odontológica Cotidente especializada em tratamentos modernos e atendimento humanizado. Selo Infinity  de qualidade."
        openGraph={{
          type: "website",
          url: "https://www.cotidente.com.br",
          title: "Cotidente - Clínica Odontológica",
          description:
            "Clínica odontológica Cotidente especializada em tratamentos modernos e atendimento humanizado. Selo Infinity  de qualidade.",
          images: [
            {
              url: "https://www.cotidente.com.br/logo-cotidente-graph.png",
              width: 1200,
              height: 630,
              alt: "Logo Cotidente",
            },
          ],
        }}
      />
      {/* CssBaseline para reset de estilos */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <ConsentimentoPrivacidade />
        <FloatingWhatsApp hero={(marketing as any).hero} />
        <Component {...pageProps} />
        <EnderecoContato />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
