import { Box, Container, Paper, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { AuthorityContent, Vantagem } from '../../../types';
import CustomizedAccordions from '@/componentes/Accordion';
import Vantagens from "../../../mock/vantagens.json";

const vantagens: Vantagem[] = Vantagens;

interface Props { data: AuthorityContent }

export default function AuthorityBadge({ data }: Props) {
  const { pacientesAtendidos, seloTexto, seloImagem } = data;
  if (!pacientesAtendidos && !seloTexto) return null;
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default' }}>
      <Container>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, textAlign: 'center', border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
          {seloImagem && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3
                }}
                title="Clínica credenciada Infinity Clinic - Rede de excelência odontológica presente em todo Brasil"
              >
                <Image
                  src={seloImagem}
                  alt="Infinity Clinic - Selo de qualidade e excelência"
                  width={200}
                  height={60}
                  style={{ objectFit: 'contain', cursor: 'pointer' }}
                />
              </Box>

            </>
          )}
          <Grid xs={12} lg={6}>
            <CustomizedAccordions dados={vantagens} />
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
