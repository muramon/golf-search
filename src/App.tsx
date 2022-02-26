import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import Copyright from './components/Copyright'
import Search from './components/Search'

export default function App() {
  //primaryとsecondaryで、色を指定します
  const myTheme = createTheme({
    palette: {
      primary: {
        main: "#424242",
      },
  　　secondary: {
        main: "#9e9e9e",
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <SportsGolfIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            ゴルフサーチ
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ゴルフクラブ横断検索のゴルフサーチ
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              comming soon...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Search></Search>
            </Stack>
          </Container>
        </Box>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
