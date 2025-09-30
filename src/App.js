// src/App.js
import React from 'react';
import { Grommet, Box, Header, Sidebar, Text, Card, CardBody, CardHeader } from 'grommet';
import { Home } from 'grommet-icons';
import SketchfabViewer from './SketchfabViewer';

const customTheme = {
  global: {
    colors: {
      brand: '#292d3a', // primary color
      background: '#f0f0f0',
      text: '#f0f0f0',
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

          <Text size="large" weight="bold">Player API Demo</Text>
        </Header>

        <Box
          wrap
          margin="large"
          width="large"
          height="medium"
          round="medium"
          elevation="medium"
          overflow="hidden"
          alignSelf="center"
        >
          <div style={{ position: "relative", paddingBottom: "50.25%", height: 0 }}>
            <SketchfabViewer modelUid="5d570c0e904a434f9a8dbedca39d89b8" />
          </div>
        </Box>
      </Box>
    </Grommet>
  );
}


export default App;
