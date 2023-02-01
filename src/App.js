import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Paper from "@mui/material/Paper";

import AsteroidsWrapper from "./AsteroidsWrapper";

// TODO - importing asteroids doens't make sense right now bc the game isn't written in react...
// in asteroids, all we need is a root element with id "asteroids-container", and the imported js should be able to attached to that... not sure exactly how it will work yet
// import Asteroids from "asteroids";

function App() {
  const [showAsteroids, setShowAsteroids] = useState(false);
  const renderAsteroids = () => {
    if (showAsteroids) {
      return <AsteroidsWrapper />;
    }
    return "";
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h2">Here is your header</Typography>
      <br />
      <Box>
        <Typography variant="p">
          Here is a little blurb about the aracde bring bring!
          <br />
          <AccessAlarmIcon />
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Paper
            elevation={8}
            sx={{
              height: 140,
              width: 100,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Button
              onClick={() => setShowAsteroids(!showAsteroids)}
              vatiant="contained"
              color="primary"
            >
              Load Asteroids!
            </Button>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            sx={{
              height: 140,
              width: 100,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item>
          <Paper
            sx={{
              height: 140,
              width: 100,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
        <Grid item>
          <Paper
            sx={{
              height: 140,
              width: 100,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          />
        </Grid>
      </Grid>
      {renderAsteroids()}
    </Box>
  );
}

// play with themes later?
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// TODO -
// Here is source copied from the docs, to get a dark mode button going!

// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyApp() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState<'light' | 'dark'>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <MyApp />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

export default App;
