import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Facebook,
  WhatsApp,
  Instagram,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const router = useRouter();

  const lastScrollY = useRef(0);

  // Função helper para rolar até um elemento com o id informado sem alterar a URL
  const handleScrollTo = async (id: string) => {
    const targetId = id.replace("#", "");
    // Se já estivermos na home, apenas faz o scroll
    if (router.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Se não estivermos na home, navega para '/' sem hash e depois faz o scroll
    await router.push("/");
    // Pequeno delay para garantir que a página foi renderizada
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  // Efeito para mostrar/esconder o header ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;

      // pequena tolerância para evitar flicker
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        // rolando para baixo
        setShowHeader(false);
      } else {
        // rolando para cima
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderDesktopMenu = () => (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item>
        <Button color="inherit" onClick={() => handleScrollTo("#conteudo")}>
          Sobre Nós
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={() => handleScrollTo("#tratamento")}>
          Tratamentos
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={() => handleScrollTo("#equipe")}>
          Equipe
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={() => handleScrollTo("#contato")}>
          Contato
        </Button>
      </Grid>
    </Grid>
  );

  const renderMobileMenu = () => (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
      disableScrollLock={true}
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
        },
      }}
    >
      <List>
        <ListItemButton
          onClick={() => {
            toggleDrawer();
            handleScrollTo("#conteudo");
          }}
        >
          <ListItemText primary="Sobre Nós" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            toggleDrawer();
            handleScrollTo("#tratamento");
          }}
        >
          <ListItemText primary="Tratamentos" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            toggleDrawer();
            handleScrollTo("#equipe");
          }}
        >
          <ListItemText primary="Equipe" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            toggleDrawer();
            handleScrollTo("#contato");
          }}
        >
          <ListItemText primary="Contato" />
        </ListItemButton>

        <Divider />
        {/* Redes sociais à direita */}
        <ListItemButton sx={{ display: "flex", gap: 2 }}>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/cotidente"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5511975645902"
            target="_blank"
          >
            <WhatsApp />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/dragesiely/"
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </ListItemButton>
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: "white",
          color: "black",
          transition: "transform 300ms ease, opacity 300ms ease",
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          opacity: showHeader ? 1 : 0,
          zIndex: (theme) => theme.zIndex.appBar + 1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo à esquerda */}
          <Box p={1}>
            <Link href={"/"}>
              <Image
                src="/logoheader.webp"
                alt="Logo"
                width={"250"}
                height={"65"}
              />
            </Link>
          </Box>

          {/* Menu para desktop */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {renderDesktopMenu()}
          </Box>

          {/* Ícone de menu hambúrguer para dispositivos móveis */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Redes sociais à direita */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/cotidente"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5511975645902"
              target="_blank"
            >
              <WhatsApp />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/dragesiely/"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Menu lateral para dispositivos móveis */}
        {renderMobileMenu()}
      </AppBar>

      {/* Espaçador para evitar que o conteúdo fique por baixo do AppBar quando fixed */}
      <Box sx={{ height: { xs: "calc(56px + 10px)", sm: "64px" }, width: "100%" }} />
    </>
  );
};

export default Header;
