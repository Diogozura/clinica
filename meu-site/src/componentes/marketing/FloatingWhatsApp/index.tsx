import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { HeroContent } from '../../../types';

interface Props {
  hero: HeroContent;
}

export default function FloatingWhatsApp({ hero }: Props) {
  const wa = `https://wa.me/${hero.whatsappNumero}?text=${encodeURIComponent(hero.whatsappMensagem)}`;
  return (
    <Fab
      color="success"
      aria-label="WhatsApp"
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed',
        right: 16,
        bottom: 80,
        zIndex: (t) => t.zIndex.snackbar + 1,
      }}
    >
  <WhatsAppIcon sx={{ color: '#fff' }} />
    </Fab>
  );
}
