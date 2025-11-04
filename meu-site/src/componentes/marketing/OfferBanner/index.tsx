import { Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { OfferContent, HeroContent } from '../../../types';

interface Props {
  data: OfferContent;
  hero: HeroContent; // para usar o mesmo número do WhatsApp
}

export default function OfferBanner({ data, hero }: Props) {
  const wa = `https://wa.me/${hero.whatsappNumero}?text=${encodeURIComponent(hero.whatsappMensagem)}`;

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, backgroundColor: '#f5fbff' }}>
      <Container>
        <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h5" component="h2" fontWeight={700} mb={1}>{data.titulo}</Typography>
          <List>
            {data.bullets.map((b, i) => (
              <ListItem key={i} disableGutters>
                <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                <ListItemText primary={b} />
              </ListItem>
            ))}
          </List>
          <Button
            component="a"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
          >
            {data.ctaTexto}
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
