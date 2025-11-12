import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { GuaranteesContent } from '../../../types';

interface Props { data: GuaranteesContent }

export default function Guarantees({ data }: Props) {
  const getIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('humanizado')) return <VolunteerActivismOutlinedIcon sx={{ fontSize: 36, color: 'primary.main' }} />;
    if (t.includes('avalia') || t.includes('custo')) return <MonetizationOnOutlinedIcon sx={{ fontSize: 36, color: 'primary.main' }} />;
    if (t.includes('materiais') || t.includes('certific')) return <WorkspacePremiumOutlinedIcon sx={{ fontSize: 36, color: 'primary.main' }} />;
    if (t.includes('sigilo') || t.includes('prote') || t.includes('dados')) return <ShieldOutlinedIcon sx={{ fontSize: 36, color: 'primary.main' }} />;
    return <CheckCircleOutlineIcon sx={{ fontSize: 36, color: 'primary.main' }} />;
  };
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Container>
        {data.titulo && (
          <Typography variant="h5" component="h2" fontWeight={700} mb={2} textAlign={'center'}>
            {data.titulo}
          </Typography>
        )}
        <Grid container spacing={2}>
          {data.itens.map((g, i) => (
            <Grid key={i} item xs={12} md={3}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box mb={1} display="flex" justifyContent="center">
                  {getIcon(g)}
                </Box>
                <Typography variant="subtitle1" fontWeight={600}>{g}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
