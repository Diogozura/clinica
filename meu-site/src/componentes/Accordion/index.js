import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"; // ÍCONE ORIGINAL (Marquei onde alterar)

// Personalização do Accordion
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "none", // REMOVE A BORDA
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&::before": {
    display: "none",
  },
}));

// Personalização do AccordionSummary
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // ÍCONE -> SUBSTITUA "ArrowForwardIosSharpIcon" POR OUTRO
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "transparent", // REMOVE O BACKGROUND
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: "8px",
  },
}));

// Personalização do AccordionDetails
const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "16px",
  backgroundColor:'#F8F8F8',
  color:'#626262',
  borderRadius:1
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span" color="primary" textTransform={'uppercase'} fontWeight={'600'}>O que é o Infinity Prime?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          O <strong>Infinity Prime </strong> é um grupo de dentistas criteriosamente selecionados e está presente em 22 Estados e em mais de 80 cidades do Brasil. Buscamos a <strong>Excelência na Odontologia</strong>  através da troca de experiência entre os profissionais mais renomados da área.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span" color="primary" textTransform={'uppercase'} fontWeight={'600'}>E as vantagens para o paciente?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          O selo <strong>Infinity Prime</strong>  garante um atendimento odontológico diferenciado e moderno. Os profissionais certificados estão sempre em processo de atualização e em busca de inovações da odontologia.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span" color="primary" textTransform={'uppercase'} fontWeight={'600'}>você é o verdadeiro prime!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A estrutura e ambientação das clínicas <strong> Infinity Prime</strong> garantem total conforto e tranquilidade para os pacientes. Desde a recepção, toda a equipe é treinada para receber você e sua família com entusiasmo e profissionalismo!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
