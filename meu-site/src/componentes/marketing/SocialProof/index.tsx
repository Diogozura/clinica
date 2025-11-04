import { Avatar, Box, Card, CardContent, Container, Grid, Rating, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SocialProofContent } from '../../../types';

interface Props { data: SocialProofContent }

export default function SocialProof({ data }: Props) {
  const { titulo, testemunhos, avaliacaoMedia, totalAvaliacoes } = data;
  const cta = (data as any)?.cta; // compatível mesmo se o tipo ainda não tiver 'cta'
  return (
    <Box sx={{ py: { xs: 3, md: 6 } }}>
      <Container>
        {titulo && (
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
            {titulo}
          </Typography>
        )}
        {(avaliacaoMedia && totalAvaliacoes) && (
          <Box textAlign="center" mb={3}>
            <Rating value={avaliacaoMedia} precision={0.1} readOnly />
            <Typography variant="body2">{avaliacaoMedia.toFixed(1)} de 5 ({totalAvaliacoes}+ avaliações)</Typography>
          </Box>
        )}
        <Grid container spacing={2}>
          {testemunhos?.map((t, idx) => (
            <Grid key={idx} item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Avatar src={t.avatar}>{t.nome?.[0]}</Avatar>
                    <Typography variant="subtitle2">{t.nome}</Typography>
                  </Box>
                  <Typography variant="body2">“{t.texto}”</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {cta && (
          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon sx={{ color: '#fff' }} />}
              href={cta.link}
              target="_blank"
              rel="noopener"
              sx={{ fontWeight: 600, fontSize: 18, px: 4, py: 1, color: '#fff' }}
            >
              {cta.texto}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
