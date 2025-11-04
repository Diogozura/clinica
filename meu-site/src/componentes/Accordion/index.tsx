import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Vantagem, MissaoVisaoValor } from "../../types";

// Personalização do Accordion
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "none",
  "&:not(:last-child)": {
    borderBottom: "none",
  },
  "&::before": {
    display: "none",
  },
}));

// Personalização do AccordionSummary
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "transparent",
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
  backgroundColor: "#f8f8f8",
  color: "#626262",
  borderRadius: 2,
}));

interface CustomizedAccordionsProps {
  dados: Vantagem[] | MissaoVisaoValor[];
}

export default function CustomizedAccordions({ dados }: CustomizedAccordionsProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {dados?.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          defaultExpanded
        >
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="h3" color="primary" textTransform="uppercase" fontWeight={600}>
              {item.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" component={'p'}>{item.descricao}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
