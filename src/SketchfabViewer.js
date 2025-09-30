import { useEffect, useRef } from 'react';

const SketchfabViewer = ({ modelUid }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current || !window.Sketchfab) return;

    const client = new window.Sketchfab(iframeRef.current);

    client.init(modelUid, {
      success: function(api) {
        api.start();
        api.addEventListener('viewerready', function() {
          console.log('Viewer ready');

          // Add a custom annotation
          api.createAnnotation(
            {
              position: [0, 0, 0],
              title: 'Hello!',
              content: 'This is a custom annotation.',
            },
            function(index) {
              console.log('Annotation created at index:', index);
            }
          );
        });
      },
      error: function() {
        console.error('Sketchfab API error');
      },
      ui_infos: 0,
      ui_controls: 1,
      ui_stop: 0,
    });
  }, [modelUid]);

  return (
    <iframe
      ref={iframeRef}
      title="Sketchfab Viewer"
      allow="autoplay; fullscreen; vr"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  );
};

export default SketchfabViewer;
