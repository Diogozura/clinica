import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";

export default function termosCondicoes() {
  return (
    <>
      <Head>
        <title>Termos e condições Cotidente</title>
      </Head>
      <Container>
        <Box py={15}>
          <Typography variant="h4" component={"h1"} gutterBottom>
            Termos e condições
          </Typography>
          <Typography variant="h4" gutterBottom>
            1. Termos
          </Typography>
          <Typography paragraph>
            Ao acessar ao site{" "}
            <a href="https://www.cotidente.com.br/">
              Clínica Odontologia Cotidente - Dra Gesiely Espalva
            </a>
            , concorda em cumprir estes termos de serviço, todas as leis e
            regulamentos aplicáveis ​​e concorda que é responsável pelo
            cumprimento de todas as leis locais aplicáveis.
          </Typography>

          <Typography variant="h4" gutterBottom>
            2. Uso de Licença
          </Typography>
          <Typography paragraph>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site apenas para visualização
            transitória pessoal e não comercial.
          </Typography>

          <Typography variant="h4" gutterBottom>
            3. Isenção de responsabilidade
          </Typography>
          <Typography paragraph>
            Os materiais no site são fornecidos &quot;como estão&quot;. A clínica não
            oferece garantias expressas ou implícitas e, por este meio, isenta
            todas as outras garantias.
          </Typography>

          <Typography variant="h4" gutterBottom>
            4. Limitações
          </Typography>
          <Typography paragraph>
            Em nenhum caso a Clínica Odontologia Cotidente ou seus fornecedores
            serão responsáveis por quaisquer danos decorrentes do uso ou da
            incapacidade de usar os materiais do site.
          </Typography>

          <Typography variant="h4" gutterBottom>
            5. Precisão dos materiais
          </Typography>
          <Typography paragraph>
            Os materiais exibidos no site podem incluir erros técnicos,
            tipográficos ou fotográficos. A clínica não garante que qualquer
            material em seu site seja preciso, completo ou atualizado.
          </Typography>

          <Typography variant="h4" gutterBottom>
            6. Links
          </Typography>
          <Typography paragraph>
            A clínica não é responsável pelo conteúdo de nenhum site vinculado.
            O uso de qualquer site vinculado é por conta e risco do usuário.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Modificações
          </Typography>
          <Typography paragraph>
            A clínica pode revisar estes termos de serviço a qualquer momento,
            sem aviso prévio. Ao usar este site, você concorda em ficar
            vinculado à versão atual desses termos de serviço.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Lei aplicável
          </Typography>
          <Typography paragraph>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis locais.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
