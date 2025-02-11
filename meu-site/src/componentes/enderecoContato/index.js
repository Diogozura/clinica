import Grid from '@mui/material/Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
export default function EnderecoContato(){
    return(
        <>
        <Box 
         sx={{
            position: "fixed", // Mantém fixo na tela
            bottom: 0, // Cola no rodapé
            left: 0,
            width: "100%", // Ocupa toda a largura da tela
            zIndex: 1000, // Garante que fique acima de outros elementos
            display: {xs:'none' , md:'block'}
          }}
        >
        <Grid container spacing={0}>
            <Grid size={8} backgroundColor={'#154381'} >
             <Link href={'https://g.co/kgs/gj3D5Xf'}><Typography variant='body1' component={'p'} color='#FFFF' display={'flex'} alignItems={'center'} justifyContent={'center'}><LocationOnIcon sx={{m:1}}/> Av. Rotary, N° 100 - Jardim Nomura, Cotia - SP * (11) 4321-2423</Typography></Link>   
            </Grid>
            <Grid size={4} backgroundColor={'#01a244'}>
             <Link href={'https://api.whatsapp.com/send?1=pt_BR&phone=5511975645902'}><Typography variant='body1' component={'p'}  color='#FFF' display={'flex'} alignItems={'center'} justifyContent={'center'}> <WhatsAppIcon sx={{m:1}}/> Agende sua consulta</Typography></Link>
            </Grid>
        </Grid>
        </Box>
        
        </>
    )
}