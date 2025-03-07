import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function politicaPrivacidade() {
  return (
    <>
      <Head>
        <title>Politica de privacidade Cotidente</title>
      </Head>
      <Container>
        <Box py={15}>
          <Typography variant="h4" component={'h1'} gutterBottom>
            Política de Privacidade
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            A sua privacidade é importante para nós. É política do Clínica
            Odontologia Cotidente - Dra Gesiely Espalva respeitar a sua
            privacidade em relação a qualquer informação sua que possamos
            coletar no site{" "}
            <Link href="https://www.cotidente.com.br/" target="_blank">
              Clínica Odontologia Cotidente - Dra Gesiely Espalva
            </Link>
            , e outros sites que possuímos e operamos.
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas{" "}
            <Link href="https://politicaprivacidade.com/" target="_blank">
              políticas de privacidade
            </Link>
            .
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contato conosco.
          </Typography>
          <br/>
          <Typography variant="h4" component={'h2'} gutterBottom>
            Compromisso do Usuário
          </Typography>
          <Typography variant="body1" component={'p'}>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Clínica Odontologia Cotidente - Dra Gesiely Espalva
            oferece no site e com caráter enunciativo, mas não limitativo:
          </Typography>
          <ul>
            <li>
              <Typography>
                A) Não se envolver em atividades que sejam ilegais ou contrárias
                à boa fé e à ordem pública.
              </Typography>
            </li>
            <li>
              <Typography>
                B) Não difundir propaganda ou conteúdo de natureza racista,
                xenofóbica, jogos de azar, qualquer tipo de pornografia ilegal,
                de apologia ao terrorismo ou contra os direitos humanos.
              </Typography>
            </li>
            <li>
              <Typography>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos
                (softwares) do Clínica Odontologia Cotidente - Dra Gesiely
                Espalva, de seus fornecedores ou terceiros.
              </Typography>
            </li>
          </ul>
          <Typography variant="h4" component={'h2'} gutterBottom>
            Mais informações
          </Typography>
          <Typography variant="body1" component={'p'}>
            Esperamos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </Typography>
          <br/>
          <Typography variant="body1" component={'p'}>
            Esta política é efetiva a partir de 10 de março de 2025.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
