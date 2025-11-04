import Grid from '@mui/material/Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function EnderecoContato() {
  return (
    <>
      <Box
        sx={{
          position: "fixed", // Mantém fixo na tela
          bottom: 0, // Cola no rodapé
          left: 0,
          width: "100%", // Ocupa toda a largura da tela
          zIndex: 1000, // Garante que fique acima de outros elementos
          // display: {xs:'none' , md:'block'}
        }}
      >
        <Grid container spacing={0}>
          <Grid size={7} sx={{ backgroundColor: '#154381' }}>
            {/* Mostrar endereço completo em md+ e versão reduzida em sm/xs */}
            <Link href={'https://g.co/kgs/gj3D5Xf'}>
              <Typography
                variant='body1'
                component={'p'}
                color='#FFFF'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <LocationOnIcon sx={{ m: 1 }} />
                <Box component={'span'} sx={{ display: { xs: 'none', sm: 'inline' } }}>
                  Av. Rotary, N° 100 - Jardim Nomura, Cotia - SP
                </Box>
                <Box component={'span'} sx={{ display: { xs: 'inline', sm: 'none' } }}>
                  Av. Rotary, Cotia - SP
                </Box>
              </Typography>
            </Link>
          </Grid>
          <Grid size={5} sx={{ backgroundColor: '#01a244' }}>
            {/* Em telas pequenas mostrar apenas 'Agendar' sem o ícone grande/descrição */}
            <Link href={'https://api.whatsapp.com/send?1=pt_BR&phone=5511975645902'}>
              <Typography
                variant='body1'
                component={'p'}
                color='#FFF'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                {/* Ícone sempre visível, texto muda conforme breakpoint */}
                <WhatsAppIcon sx={{ m: 1 }} />
                <Box component={'span'} sx={{ display: { xs: 'inline', md: 'none' } }}>
                  Agendar
                </Box>
                <Box component={'span'} sx={{ display: { xs: 'none', md: 'inline' } }}>
                  Agende sua consulta
                </Box>
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
