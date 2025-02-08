import Contato1 from "../src/contatos/index";
import Contato2 from "../src/contatos/contato2";
import { Container, Grid2 } from "@mui/material";

export default function Contato(){
  return(
    <>
      <Container>
        <Grid2 container>
          <Grid2 xs={6}>
          <Contato1/>
          </Grid2>
          <Grid2 xs={6}>
          <Contato2/>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}