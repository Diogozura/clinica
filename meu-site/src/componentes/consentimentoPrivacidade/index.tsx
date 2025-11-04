import React from 'react';
import Link from 'next/link';
import { Button, Typography, Box, Slide, Paper } from '@mui/material';

// Chave no localStorage e tempo de retenção (dias)
const STORAGE_KEY = 'cotidente.consentimentoPrivacidade.v1';
const RETENCAO_DIAS = 365; // 12 meses aprox.

interface ConsentData {
  accepted: boolean;
  acceptedAt: string;
  version: number;
}

function isConsentValid(consent: string | null): boolean {
  if (!consent) return false;
  try {
    const parsed: ConsentData = JSON.parse(consent);
    if (!parsed.acceptedAt) return false;
    const accepted = new Date(parsed.acceptedAt).getTime();
    const limite = accepted + RETENCAO_DIAS * 24 * 60 * 60 * 1000;
    return Date.now() < limite;
  } catch {
    return false;
  }
}

export default function ConsentimentoPrivacidade() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (!isConsentValid(existing)) {
        setOpen(true);
      }
    } catch {
      // Em SSR ou se localStorage indisponível, não exibir
    }
  }, []);

  const emitirEventoConsentimento = (accepted: boolean) => {
    try {
      window.dispatchEvent(new CustomEvent('consent-changed', { detail: { accepted } }));
    } catch {}
  };

  const aceitar = () => {
    try {
      const payload: ConsentData = { accepted: true, acceptedAt: new Date().toISOString(), version: 1 };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      emitirEventoConsentimento(true);
    } catch {
      // se falhar, apenas fecha
    }
    setOpen(false);
  };

  const recusar = () => {
    try {
      const payload: ConsentData = { accepted: false, acceptedAt: new Date().toISOString(), version: 1 };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      emitirEventoConsentimento(false);
    } catch {}
    setOpen(false);
  };

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Box sx={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: (t) => t.zIndex.snackbar }}>
        <Paper elevation={6}
          sx={{
            m: { xs: 1, sm: 2 },
            p: { xs: 2, sm: 2 },
            borderRadius: 2,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ flex: 1, minWidth: 240 }}>
              <Typography variant="body2" color="text.secondary">
                Usamos cookies e dados para melhorar sua experiência, analisar o tráfego e, quando aplicável,
                personalizar conteúdo e anúncios. Ao continuar, você concorda com nossa{' '}
                <Link href="/politica-privacidade" legacyBehavior>
                  <a style={{ color: '#0f62fe' }}>Política de Privacidade</a>
                </Link>.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
              <Button variant="outlined" color="inherit" size="small" onClick={recusar}>
                Recusar
              </Button>
              <Button variant="outlined" color="inherit" size="small" onClick={() => setOpen(false)}>
                Agora não
              </Button>
              <Button variant="contained" color="primary" size="small" onClick={aceitar}>
                Aceitar
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Slide>
  );
}
