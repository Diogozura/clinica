import Head from 'next/head';
import {
  Box,
  Container,
  Divider,
  GlobalStyles,
  Link as MUILink,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

export default function PoliticaPrivacidade() {
  const siteName = 'Clínica Cotidente';
  const lastUpdated = '2025-09-27T16:49:00-03:00';

  return (
    <>
      <Head>
        <title>Política de Privacidade | {siteName}</title>
        <meta
          name="description"
          content={`Entenda como a ${siteName} coleta, usa e protege seus dados pessoais. Política de Privacidade, cookies, anúncios e direitos do titular (LGPD).`}
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.cotidente.com.br/politica-privacidade" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: `Política de Privacidade | ${siteName}`,
              description:
                'Informações sobre coleta, uso, retenção e compartilhamento de dados, cookies e direitos do titular (LGPD).',
              dateModified: lastUpdated,
              url: 'https://www.cotidente.com.br/politica-privacidade',
            }),
          }}
        />
      </Head>

      <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' } }} />

      <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        {/* Hero */}
        <Box sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          pt: { xs: 3, md: 4 },
          pb: { xs: 2, md: 3 },
          mb: 2,
        }}>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 600 }}>
            Política de Privacidade
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Sua privacidade é importante para nós. Esta política descreve como tratamos seus dados pessoais.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5 }}>
            Última atualização: <time dateTime={lastUpdated}>27 de setembro de 2025 às 16:49</time>
          </Typography>
        </Box>

        {/* Sumário */}
        <Paper variant="outlined" sx={{ p: 2, mb: 3 }} component="nav" aria-label="Sumário da página">
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Sumário
          </Typography>
          <List dense disablePadding sx={{
            columnCount: { xs: 1, sm: 2 },
            columnGap: 2,
            '& li': { breakInside: 'avoid' },
          }}>
            {[
              { href: '#introducao', label: 'Introdução' },
              { href: '#coleta', label: 'Coleta de informações' },
              { href: '#uso', label: 'Uso das informações' },
              { href: '#retencao-seguranca', label: 'Retenção e segurança' },
              { href: '#compartilhamento', label: 'Compartilhamento' },
              { href: '#links-externos', label: 'Links externos' },
              { href: '#cookies', label: 'Cookies e tecnologias de rastreamento' },
              { href: '#direitos-lgpd', label: 'Direitos do titular (LGPD)' },
              { href: '#compromisso-usuario', label: 'Compromisso do usuário' },
              { href: '#mais-informacoes', label: 'Mais informações e contato' },
              { href: '#vigencia', label: 'Vigência' },
            ].map((item) => (
              <Box component="li" key={item.href} sx={{ listStyle: 'none', breakInside: 'avoid' }}>
                <ListItemButton component="a" href={item.href} sx={{ px: 0 }}>
                  <ListItemText
                    primaryTypographyProps={{ variant: 'body2', color: 'primary.main' }}
                    primary={item.label}
                  />
                </ListItemButton>
              </Box>
            ))}
          </List>
        </Paper>

        {/* Conteúdo */}
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
          <Box id="introducao" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              1. Introdução
            </Typography>
            <Typography paragraph textAlign="justify">
              É política da {siteName} respeitar a sua privacidade em relação a qualquer informação sua que possamos
              coletar em nosso site e em outros sites que possuímos e operamos.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="coleta" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              2. Coleta de informações
            </Typography>
            <Typography paragraph textAlign="justify">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
              Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento, informando por que estamos
              coletando e como os dados serão usados.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="uso" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              3. Uso das informações
            </Typography>
            <Typography paragraph textAlign="justify">
              Utilizamos os dados coletados para operar e manter nossos serviços, atender solicitações, personalizar a
              experiência, melhorar o site, realizar comunicações essenciais e cumprir obrigações legais.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="retencao-seguranca" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              4. Retenção e segurança
            </Typography>
            <Typography paragraph textAlign="justify">
              Apenas retemos as informações pessoais pelo tempo necessário para fornecer o serviço solicitado e conforme
              exigido por lei. Quando armazenamos dados, protegemos por meios comercialmente aceitáveis para evitar perdas,
              roubos, acesso, divulgação, cópia, uso ou modificação não autorizados.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="compartilhamento" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              5. Compartilhamento
            </Typography>
            <Typography paragraph textAlign="justify">
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido
              por lei ou para prestação do serviço com parceiros contratados que seguem esta política e legislação aplicável.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="links-externos" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              6. Links externos
            </Typography>
            <Typography paragraph textAlign="justify">
              Nosso site pode conter links para sites externos que não são operados por nós. Não temos controle sobre o
              conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de
              privacidade. Recomendamos que você leia as políticas de privacidade de cada site que visitar.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="cookies" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              7. Cookies e tecnologias de rastreamento
            </Typography>
            <Typography paragraph textAlign="justify">
              Utilizamos cookies para operar funcionalidades, entender o uso do site e, quando aplicável, veicular anúncios
              mais relevantes e limitar a frequência de exibição.
            </Typography>

            <Typography id="adsense" variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              7.1 Google AdSense e cookie DoubleClick
            </Typography>
            <Typography paragraph textAlign="justify">
              O serviço Google AdSense pode usar o cookie DoubleClick para veicular anúncios mais relevantes em toda a Web
              e limitar o número de vezes que um anúncio é exibido para você. Para mais informações, consulte a documentação
              oficial:{' '}
              <MUILink href="https://support.google.com/adsense/answer/1348695" target="_blank" rel="noopener noreferrer">
                suporte do Google AdSense
              </MUILink>.
            </Typography>

            <Typography id="publicidade-comportamental" variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              7.2 Publicidade comportamental
            </Typography>
            <Typography paragraph textAlign="justify">
              Os cookies de publicidade comportamental usados neste site foram projetados para garantir que sejam exibidos
              anúncios relevantes, rastreando de forma anônima seus interesses e apresentando conteúdos semelhantes que
              possam ser do seu interesse.
            </Typography>

            <Typography id="afiliados" variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              7.3 Afiliados
            </Typography>
            <Typography paragraph textAlign="justify">
              Alguns parceiros anunciam em nosso nome. Cookies de rastreamento de afiliados permitem verificar se você
              acessou nosso site por meio de um parceiro, para que possamos creditá-lo adequadamente e, quando aplicável,
              permitir que ofereçam promoções.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="direitos-lgpd" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              8. Direitos do titular (LGPD)
            </Typography>
            <Typography paragraph textAlign="justify">
              Em consonância com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem, entre outros, os seguintes direitos:
            </Typography>
            <Box component="ul" sx={{ pl: 3, '& li': { mb: 0.5 } }}>
              <Box component="li">
                <Typography variant="body2">Confirmar a existência de tratamento e acessar seus dados pessoais;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Corrigir dados incompletos, inexatos ou desatualizados;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Portabilidade dos dados, conforme regulamentação;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Informação sobre compartilhamentos e sobre a possibilidade e consequências de negar consentimento;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Revogar o consentimento a qualquer momento;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Reclamar perante a ANPD ou órgãos de defesa do consumidor.</Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="compromisso-usuario" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              9. Compromisso do usuário
            </Typography>
            <Typography paragraph>
              O usuário se compromete a fazer uso adequado dos conteúdos e informações que a {siteName} oferece no site, abstendo-se de:
            </Typography>
            <Box component="ol" sx={{ pl: 3, listStyleType: 'upper-alpha', '& li': { mb: 0.5 } }}>
              <Box component="li">
                <Typography variant="body2">Envolver-se em atividades ilegais ou contrárias à boa-fé e à ordem pública;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de azar, qualquer tipo de pornografia ilegal, apologia ao terrorismo ou contra os direitos humanos;</Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2">Causar danos aos sistemas físicos (hardware) e lógicos (software) da {siteName}, de seus fornecedores ou terceiros; introduzir ou disseminar vírus ou quaisquer outros sistemas capazes de causar danos.</Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="mais-informacoes" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              10. Mais informações e contato
            </Typography>
            <Typography paragraph textAlign="justify">
              Você é livre para recusar solicitações de informações pessoais, entendendo que talvez nem todos os serviços
              possam ser fornecidos. O uso continuado do site será considerado como aceitação das práticas aqui descritas.
            </Typography>
            <Typography paragraph textAlign="justify">
              Se tiver dúvidas sobre como lidamos com dados do usuário e informações pessoais, entre em contato pelos nossos
              canais oficiais de atendimento. E-mail:{' '}
              <MUILink href="mailto:contato@cotidente.com.br">contato@cotidente.com.br</MUILink>.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box id="vigencia" sx={{ scrollMarginTop: 96 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
              11. Vigência
            </Typography>
            <Typography>
              Esta política é efetiva a partir de <strong>27 de setembro de 2025, 16:49</strong>.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}