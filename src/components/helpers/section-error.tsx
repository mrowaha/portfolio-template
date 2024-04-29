/**
 * A Generic Error Fallback Component for Sections
 * @author Muhammad Rowaha
 */

import { Alert, Typography, Button, useTheme } from "@mui/material";

export interface SectionErrorProps {
  title: string;
  reset: () => void;
}

export default function SectionError(props : SectionErrorProps) {

  const theme = useTheme();

  return (
    <Alert severity="error" sx={{height: 250, display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
        <Typography sx={{color: theme.palette.common.tred}}>{props.title} failed to load</Typography>
        <Button onClick={props.reset} sx={{position: "absolute", bottom: 0, right: 0}}>Retry</Button>
    </Alert>
  )
}