import type { Metadata } from "next";
import "./global.css";

// Main
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';

// MUI Default Font -- Fallback Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// pdf viewer styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

// carousel styles
import "react-multi-carousel/lib/styles.css";

import NavBar from "@/components/navbar";
import logo from "@/assets/rowaha-logo.png";
import AppThemeProvider from "@/providers/theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import sectionsRoutes from "./section-routes.json";
import { Container } from "@mui/material";
import React from "react";
const sections = sectionsRoutes.sections;

export const metadata: Metadata = {
  title: "Muhammad Rowaha | Portfolio",
  description: "Muhammad Rowaha's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <NavBar 
              logo={{src: logo.src, text: "Portfolio"}}
              links={sections.map((name) => ({href: `/portfolio#${name}`, title: name}))}
            />
            <Container sx={{paddingBlockStart: "2rem"}}>
              {children} 
            </Container>
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
