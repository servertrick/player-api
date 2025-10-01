import React, { useEffect, useRef, useState } from 'react';

const SketchfabViewer = ({ modelUid }) => {
  const iframeRef = useRef(null);
  const [api, setApi] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSketchfab = () => {
      const client = new window.Sketchfab('1.12.1', iframeRef.current);

      client.init(modelUid, {
        success: (apiInstance) => {
          setApi(apiInstance);
          apiInstance.start();
          apiInstance.addEventListener('viewerready', () => {
            setupAnnotations(apiInstance);
          });
        },
        error: () => {
          console.error('Sketchfab API initialization failed');
        },
        ui_infos: 0,
        ui_watermark: 0,
        ui_help: 0,
        ui_vr: 0,
        ui_settings: 0,
        ui_inspector: 0,
        ui_hint: 2,
        autostart: 0,
        camera: 0,
        ui_controls: 0,
        ui_stop: 0,
      });
    };

    if (window.Sketchfab) {
      loadSketchfab();
    } else {
      const script = document.createElement('script');
      script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
      script.onload = loadSketchfab;
      document.body.appendChild(script);
    }
  }, [modelUid]);

  const setupAnnotations = (apiInstance) => {
    const annotations = [
      {
        title: 'Annotation 1',
        content: 'This is the first annotation.',
        position: [0, 0, 0],
        normal: [0, 1, 0],
      },
      {
        title: 'Annotation 2',
        content: 'This is the second annotation.',
        position: [1, 1, 1],
        normal: [0, 1, 0],
      },
    ];

    annotations.forEach((ann, index) => {
      apiInstance.createAnnotation(
        index,
        ann.position,
        ann.normal,
        ann.title,
        ann.content,
        () => console.log(`Annotation ${index + 1} created`)
      );
    });
  };

  const toggleAnimation = () => {
    if (!api) return;

    if (isPlaying) {
      api.pause();
    } else {
      api.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
<div style={{ position: 'relative', paddingBottom: '50.25%', height: 0 }}>
  <iframe
    ref={iframeRef}
    title="Sketchfab Viewer"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    }}
    allow="autoplay; fullscreen; vr"
  ></iframe>

  <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
    <button onClick={toggleAnimation}>
      {isPlaying ? 'Stop Animation' : 'Play Animation'}
    </button>
  </div>
</div>
  );
};

export default SketchfabViewer;