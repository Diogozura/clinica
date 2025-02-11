import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

// Personalização do Accordion
const Accordion = styled((props) => (
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
const AccordionSummary = styled((props) => (
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

export default function CustomizedAccordions({ dados }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, newExpanded) => {
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
            <Typography component="h3"  color="primary" textTransform="uppercase" fontWeight={600}>
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
