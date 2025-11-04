import { Box, Container, Paper, Typography } from '@mui/material';
import { AuthorityContent } from '../../../types';

interface Props { data: AuthorityContent }

export default function AuthorityBadge({ data }: Props) {
  const { pacientesAtendidos, seloTexto } = data;
  if (!pacientesAtendidos && !seloTexto) return null;
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Container>
        <Paper elevation={0} sx={{ p: 2, borderRadius: 2, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
          {pacientesAtendidos && (
            <Typography variant="h6" fontWeight={700}>
              Mais de {pacientesAtendidos.toLocaleString('pt-BR')} pacientes atendidos
            </Typography>
          )}
          {seloTexto && (
            <Typography variant="body2" color="text.secondary">
              Selo de qualidade: {seloTexto}
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
