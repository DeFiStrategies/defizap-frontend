import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = () =>
  createDevTools(
    // eslint-disable-next-line react/jsx-filename-extension
    <DockMonitor
      toggleVisibilityKey="ctrl-h"
      changePositionKey="ctrl-q"
      defaultIsVisible
    >
      <LogMonitor theme="tomorrow" />
    </DockMonitor>
  );

export default DevTools;
