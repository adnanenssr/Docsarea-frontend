import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toolbarPlugin, type ToolbarSlot, type TransformToolbarSlot } from '@react-pdf-viewer/toolbar';


interface PdfViewerProps {
    fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {


    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    // These slots will be empty
    Download: () => <></>,
    Open: () => <></>,
    Print: () => <></>,
});


    // Create new plugin instance with customizations
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        // Remove sidebar completely
        sidebarTabs: () => [],
        
        // Customize toolbar to remove download, open, print
        renderToolbar: (Toolbar) => (
            <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        ),
    });

    return (
        <div key={'viewer'} style={{ height: '100vh' }}>
            <Viewer 
fileUrl={fileUrl}
plugins={[
    // Register plugins
    defaultLayoutPluginInstance,
]}
/>
        </div>
    );
};

export default PdfViewer;