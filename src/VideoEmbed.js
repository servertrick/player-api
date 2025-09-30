// src/VideoEmbed.js
import React from 'react';
import { Box } from 'grommet';

const VideoEmbed = ({ videoId }) => (
  <Box width="large" height="medium" round="small" elevation="medium" overflow="hidden">
    <iframe
      width="100%"
      height="100%"
      src={`https://sketchfab.com/models/${videoID}/embed?ui_infos=0&ui_watermark=0&ui_help=0&ui_vr=0&ui_settings=0&ui_inspector=0&ui_hint=2&ui_color=01a982&ui_theme=dark&autostart=1&camera=0`}
      title="DL380 Gen12"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Box>
);

export default VideoEmbed;