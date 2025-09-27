import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Box,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import {
  Facebook,
  WhatsApp,
  Instagram,
  ArrowDropDown,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import Link from "next/link";
import tratamentos from "../../mock/telas.json";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Controle para mostrar/ocultar a lista de tratamentos
  const router = useRouter();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuOpen(false); // Fecha o submenu de tratamentos ao fechar o menu
  };

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!subMenuOpen); // Alterna a visibilidade do submenu de tratamentos
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderDesktopMenu = () => (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item>
        <Button color="inherit" onClick={() => router.push("/#conteudo")}>
          Sobre Nós
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={() => router.push("/#conteudo")}>
          Equipe
        </Button>
      </Grid>
     
      <Grid item>
        <Button color="inherit" onClick={() => router.push("/#tratamento")}>
          Contato
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={() => router.push("/#tratamento")}>
        Tratamentos
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
        width: 250, // Definindo uma largura fixa maior para o Drawer
        flexShrink: 0, // Evitar que o Drawer encolha
        "& .MuiDrawer-paper": {
          width: 250, // Largura do Drawer quando aberto
        },
      }}
    >
      <List>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/#conteudo" passHref>
            <ListItemText primary="Sobre Nós" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/#conteudo" passHref>
            <ListItemText primary="Equipe" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/#conteudo" passHref>
            <ListItemText primary="Diferenciais" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/#contato" passHref>
            <ListItemText primary="Contato" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/#tratamentos" passHref>
            <ListItemText primary="Tratamentos" />
          </Link>
        </ListItem>
        <Divider />
        {/* Redes sociais à direita */}
        <ListItem sx={{ display: "flex", gap: 2 }}>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/cotidente"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://api.whatsapp.com/send?1=pt_BR&phone=5511975645902" target="_blank">
            <WhatsApp />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/dragesiely/"
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar  sx={{  position: { xs: "relative", sm: "fixed" }, backgroundColor: "white", color: "black" }}>
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
        <Box sx={{ display: { xs: "block",  sm: "none" } }}>
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
          <IconButton color="inherit" href="https://api.whatsapp.com/send?1=pt_BR&phone=5511975645902" target="_blank">
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
  );
};

export default Header;
