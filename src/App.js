// src/App.js
import React from 'react';
import { Grommet, Box, Header, Sidebar, Text, Card, CardBody, CardHeader } from 'grommet';
import { Home } from 'grommet-icons';
import SketchfabViewer from './SketchfabViewer';

const customTheme = {
  global: {
    colors: {
      brand: '#292d3a', // primary color
      background: '#f7f7f7',
      text: '#ffffff',
    },
    font: {
      family: 'Arial',
      size: '16px',
      height: '20px',
    },
  },
  button: {
    border: {
      radius: '4px',
    },
    color: 'brand',
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
    <Grommet theme={customTheme} full>
      <Box fill>
        <Header background="brand" pad="medium">
          <Home />
          <Text size="large" weight="bold">Player API Demo</Text>
        </Header>
        <Box wrap margin="large" width="large" height="medium" round="medium" elevation="medium" overflow="hidden" alignSelf="center">
                  <SketchfabViewer modelUid="6a463065f2714ecba864a9c792b6581f" />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
