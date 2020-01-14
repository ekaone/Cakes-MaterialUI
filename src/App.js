import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { 
  // Buttons 
  // Cards
  Sliders
} from './components'

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
          <Sliders />
      </MuiThemeProvider>
    </>
  );
}

export default App;
