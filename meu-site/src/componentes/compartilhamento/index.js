import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { WhatsApp, Facebook, Instagram, Telegram, Twitter } from '@mui/icons-material';

const ShareButtons = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle} ${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    instagram: `https://www.instagram.com/?url=${encodedUrl}`, // Instagram não tem um link direto para compartilhamento, mas podemos abrir o app
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} component={'summary'}>
      <Typography variant='body1' fontWeight={'bold'} component={'h3'}>Compartilhe essa página nas suas redes:</Typography>
      <Box>
      <Tooltip title="Compartilhar no WhatsApp">
        <IconButton
          onClick={() => window.open(shareLinks.whatsapp, '_blank')}
          color="success"
        >
          <WhatsApp />
        </IconButton>
      </Tooltip>

      <Tooltip title="Compartilhar no Facebook">
        <IconButton
          onClick={() => window.open(shareLinks.facebook, '_blank')}
          color="primary"
        >
          <Facebook />
        </IconButton>
      </Tooltip>

      <Tooltip title="Compartilhar no Instagram">
        <IconButton
          onClick={() => window.open(shareLinks.instagram, '_blank')}
          color="error"
        >
          <Instagram />
        </IconButton>
      </Tooltip>

      <Tooltip title="Compartilhar no Telegram">
        <IconButton
          onClick={() => window.open(shareLinks.telegram, '_blank')}
          color="primary"
        >
          <Telegram />
        </IconButton>
      </Tooltip>

      <Tooltip title="Compartilhar no X (Twitter)">
        <IconButton
          onClick={() => window.open(shareLinks.twitter, '_blank')}
          color="primary"
        >
          <Twitter />
        </IconButton>
      </Tooltip>
      </Box>
      
    </Box>
  );
};

export default ShareButtons;
