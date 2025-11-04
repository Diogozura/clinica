import { Box, Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { HeroContent } from '../../../types';

interface Props {
  data: HeroContent;
}

export default function HeroCTA({ data }: Props) {
  const { titulo, subtitulo, whatsappNumero, whatsappMensagem, ctaTexto } = data;
  const wa = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensagem)}`;

  return (
    <Box>
      <Typography variant="h6" sx={{ letterSpacing: 2 }}>
        {subtitulo}
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 2 }}>
        {titulo}
      </Typography>
      <Button
        component="a"
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon sx={{ color: '#fff' }} />}
        sx={{ mt: 3, fontSize: '1rem', fontWeight: 'bold', color: '#fff' }}
      >
        {ctaTexto || 'Tirar dúvidas no WhatsApp'}
      </Button>
    </Box>
  );
}
