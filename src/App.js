import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Buttons } from './components'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <Buttons />
      </MuiThemeProvider>
    </>
  );
}

export default App;
