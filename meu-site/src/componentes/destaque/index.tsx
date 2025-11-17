import Image from "next/image";
import destaque from "../../mock/tratamentoDestaque.json";
import { Box, Typography } from "@mui/material";
import { TratamentoDestaque } from "../../types";

const destaqueData: TratamentoDestaque[] = destaque;

export default function Destaque() {
  return (
    <>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>
        {destaqueData.map((i, index) => (
          <Box key={index} maxWidth={260} m={1}>
            <Image width={248} height={165} layout="responsive" alt={i.titulo} src={i.imagem} />
            <Typography color="primary" fontWeight={'bold'}>{i.titulo}</Typography>
            <Typography color="primary.contrastText" variant="body2" component={'p'}>{i.descricao}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
