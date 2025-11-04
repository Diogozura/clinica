import { Box, Container, Grid, Typography } from '@mui/material';
import CustomizedAccordions from '../../Accordion';
import { FaqContent, FaqItem } from '../../../types';

interface Props { data: FaqContent }

export default function FAQ({ data }: Props) {
  const faqs: FaqItem[] = data.itens;
  // Divide as perguntas em duas colunas
  const metade = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, metade);
  const col2 = faqs.slice(metade);
  return (
    <Box sx={{ py: { xs: 2, md: 6 } }}>
      <Container>
        {data.titulo && (
          <Typography variant="h5" component="h2" fontWeight={700} mb={2} textAlign={'center'}>
            {data.titulo}
          </Typography>
        )}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomizedAccordions dados={col1 as any} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomizedAccordions dados={col2 as any} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
