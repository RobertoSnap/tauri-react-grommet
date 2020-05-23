import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box, Grommet, Heading, Grid } from 'grommet';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/Home';
import { Theme } from './utils/Theme';

// Metamask - Get rid of enoying notis
declare global {
  // interface Window { ethereum: any }
}


// Darktheme - Define react context
export const DarkTheme = React.createContext<[boolean, (boolean: boolean) => void]>([false, (arg: boolean) => { }])

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const GridBox: React.FC<{ gridArea: string }> = ({ children, gridArea }) => (
    <Box gridArea={gridArea} background="background-back">
      {children}
    </Box >
  )
  return (
    <BrowserRouter>
      <DarkTheme.Provider value={[darkTheme, setDarkTheme]}>

        <Grommet theme={Theme} themeMode={darkTheme ? "dark" : "light"} full>
          <Box background="brand" fill="vertical" >
            <Grid
              rows={["auto", "auto", "small"]}
              columns={["full"]}
              areas={[
                { name: "header", start: [0, 0], end: [1, 0] },
                { name: "main", start: [0, 1], end: [1, 1] },
                { name: "footer", start: [0, 2], end: [1, 2] }
              ]}


            >
              <GridBox gridArea="header">
                <Navigation></Navigation>
              </GridBox>

              <GridBox gridArea="main">
                <Box pad={{ left: "large", right: "large" }}>
                  <Switch>
                    <Route exact path="/">
                      <HomePage></HomePage>
                    </Route>
                  </Switch>
                </Box>
              </GridBox>

              <GridBox gridArea="footer">
                <Box pad={{ left: "large", right: "large" }}>
                  <Heading level={3}>{/* Footer */}</Heading>
                </Box>
              </GridBox>

            </Grid>
          </Box>
        </Grommet>
      </DarkTheme.Provider>
    </BrowserRouter>
  );
}

export default App;
