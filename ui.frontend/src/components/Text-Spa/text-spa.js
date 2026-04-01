import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Typography, Button, Card, CardContent } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Text = (props) => {
  console.log("React props:", props);

  return (
    <>
    <Card>
      <CardContent>
        <Typography variant="h5" className="font-bold text-blue-600 underline mb-4">
          {props.text || "Default Text"}
        </Typography>

        <Button variant="contained" color="primary" href="https://www.google.com/">
          Click Me
        </Button>
      </CardContent>
    </Card>


     <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis egdsdset.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <div>
        {(props.texts || []).map((item, index) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id= {`panel${index}-header`}
          >
            <Typography component="span">{item}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis egdsdset.
            </Typography>
          </AccordionDetails>
        </Accordion>
        ))}
    </div>
    </>


  );
};

const TextEditConfig = {
  emptyLabel: "Text SPA",
  isEmpty: (props) => !props || !props.text
};

MapTo("aemreactspa/components/text-spa")(Text, TextEditConfig);

export default Text;

