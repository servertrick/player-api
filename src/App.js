// src/App.js
import React from 'react';
import { Grommet, Box, Header, Footer, Text, Card, CardBody, CardHeader } from 'grommet';
import { Home } from 'grommet-icons';
import VideoEmbed from './VideoEmbed'; // Verify path

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

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Header background="brand" pad="medium">
          <Home />
          <Text size="large" weight="bold">Player API Demo</Text>
        </Header>
        <Box fill align="center" justify="center" pad="large" background="light-2">
          <VideoEmbed />
        </Box>
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
