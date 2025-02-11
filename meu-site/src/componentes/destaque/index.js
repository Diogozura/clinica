import Image from "next/image";
import destaque from "../../mock/tratamentoDestaque.json";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Destaque(){
    return(
        <>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>
                {destaque.map((i)=> (
                    <>
                     <Box maxWidth={260} m={1}>
                        <Image width={248} height={165} layout="responsive" alt={i.titulo} src={i.imagem}/>
                        <Link href={i.link}><Typography color="primary">{i.titulo}</Typography></Link>
                        <Typography color="primary.contrastText" variant="body2" component={'p'}>{i.descricao}</Typography>
                    </Box>
                    </>
                ))}
            </Box>
        </>
    )
}