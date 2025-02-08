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
} from "@mui/material";
import {
  Facebook,
  WhatsApp,
  Instagram,
  ArrowDropDown,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import Link from "next/link";
import tratamentos from "../../mock/telas.json";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log("tratamentos", tratamentos);
  const router = useRouter();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderDesktopMenu = () => (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item>
        <Button color="inherit" onClick={() => router.push("/sobre")}>
          Sobre Nós
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={() => router.push("/equipe")}>
          Equipe
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit">Diferenciais</Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={() => router.push("/contato")}>
          Contato
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="inherit"
          endIcon={<ArrowDropDown />}
          onClick={handleMenuOpen}
        >
          Tratamentos
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {tratamentos.map((tratamento, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              <Link href={`/${tratamento.slug}`} passHref>
                <Button color="inherit">{tratamento.titulo}</Button>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );

  const renderMobileMenu = () => (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
      disableScrollLock={true}
    >
      <List>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/sobre-nos" passHref>
            <ListItemText primary="Sobre Nós" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/equipe" passHref>
            <ListItemText primary="Equipe" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/diferenciais" passHref>
            <ListItemText primary="Diferenciais" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/contato" passHref>
            <ListItemText primary="Contato" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <Link href="/tratamentos" passHref>
            <ListItemText primary="Tratamentos" />
          </Link>
        </ListItem>
        <Divider />
        {/* Redes sociais à direita */}
        <ListItem sx={{ display: "flex", gap: 2 }}>
          <IconButton
            color="inherit"
            href="https://facebook.com"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://wa.me/" target="_blank">
            <WhatsApp />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://instagram.com"
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
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
            href="https://facebook.com"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://wa.me/" target="_blank">
            <WhatsApp />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://instagram.com"
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
