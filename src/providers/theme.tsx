'use client';
import { ThemeProvider, createTheme } from "@mui/material";
import { PropsWithChildren } from "react";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    tpurple: string;
    "tpurple-dark": string;
    tred: string;
    tgrey: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#d6023b"
    },
    common: {
      tpurple: "#690169",
      ["tpurple-dark"]: "#4D004D",
      tred: "#d6023b",
      tgrey: "#313131aa"
    }
  },
  typography: {
    fontFamily: [
      'Jost',
      'Roboto',
      'system-ui',
      '-apple-system'
    ].join(',')
  }
});

export default function AppThemeProvider(props: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}