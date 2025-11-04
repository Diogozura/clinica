import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { GuaranteesContent } from '../../../types';

interface Props { data: GuaranteesContent }

export default function Guarantees({ data }: Props) {
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
              <Paper elevation={1} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight={600}>{g}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
