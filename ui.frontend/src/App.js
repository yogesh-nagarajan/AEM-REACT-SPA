import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';

import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";

const theme = createTheme();

// Application entry point
class App extends Page {
  render() {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <>
            {this.childComponents}
            {this.childPages}
          </>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

export default withModel(App);