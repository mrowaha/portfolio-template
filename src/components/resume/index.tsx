/**
 * Resume Rendering Component to be used by the parallel intercepting route and resume page
 * @author Muhammad Rowaha
 */
"use client";

import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import { ResumeProps } from './interface';

export default function Resume(props: ResumeProps) {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div>
            <div
                style={{
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    marginBottom : "1rem"
                }}
            >
              <div style={{
                width : "fit-content", 
                backgroundColor : "#fff",
                display: 'flex',
                justifyContent: 'center',
                padding: '4px',
                alignItems: 'center',
                margin : "0 auto",
                borderRadius : "5px"
              }}>
                <div style={{ padding: '0px 2px' }}>
                      <ZoomOutButton  />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                      <ZoomPopover />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                      <ZoomInButton />
                  </div>
              </div>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer 
                  fileUrl={props.fileUrl} plugins={[zoomPluginInstance]} 
                />
            </div>
        </div>
    </Worker>
  )
}