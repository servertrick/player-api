import React from 'react';
import { Grommet, Box, Header, Footer, Text, Card, CardBody, CardHeader } from 'grommet';
import { Home } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: 'Arial',
    },
  },
};

const Tile = ({ title, content }) => (
  <Card background="light-1" pad="medium" margin="small" elevation="small">
    <CardHeader>
      <Text weight="bold">{title}</Text>
    </CardHeader>
    <CardBody>
      <Text>{content}</Text>
    </CardBody>
  </Card>
);

import React from 'react';
import { Grommet, Box } from 'grommet';

const App = () => (
  <Grommet>
    <Box align="center" pad="medium">
      <Box width="large" height="medium" overflow="hidden" round="small" elevation="small">
        <iframe
          width="100%"
          height="100%"
          src="https://sketchfab.com/models/5d570c0e904a434f9a8dbedca39d89b8/embed?ui_infos=0&ui_watermark=0&ui_help=0&ui_vr=0&ui_settings=0&ui_inspector=0&ui_hint=2&ui_color=01a982&ui_theme=dark&autostart=1&camera=0"
          title="Player API"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          </Box>
          </Box>
          </Grommet>
)


function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Header background="brand" pad="medium">
          <Home />
          <Text size="large" weight="bold">Player API Demo</Text>
        </Header>

        <Box direction="row" wrap pad="medium" justify="center">
          <Tile title="Tile 1" content="This is the first tile." />
          <Tile title="Tile 2" content="This is the second tile." />
          <Tile title="Tile 3" content="This is the third tile." />
        </Box>

        <Footer background="brand" pad="medium" justify="center">
          <Text>© 2025 My Company</Text>
        </Footer>
      </Box>
    </Grommet>
  );
}

export default App;
