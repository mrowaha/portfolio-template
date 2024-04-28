/**
 * Intro Component rendering name, resume and profile
 * @author Muhammad Rowaha
 */
"use client";
import Link from "next/link";
import {
  Typography,
  Button,
  useTheme,
  Stack,
  Divider
} from "@mui/material";

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IntroInterfaceProps } from "./interface";

export default function Intro(props: IntroInterfaceProps) {
  const theme = useTheme();
  return (
    <Stack>
      <Divider />
      <Typography
        sx={{
          typography : {
            xs: "h4",
            sm : "h3",
            lg : "h2"
          },
          textAlign : "center"
        }}
        style={{ color : theme.palette.common.tgrey}}
      >
        Hi, I am
        <span style={{color : theme.palette.common.tpurple}}> {props.name}</span>
      </Typography>
    
      <Typography sx={{
        typography : {
          xs: "body1",
          sm : "h6",
          lg : "h5"
        },
      }} textAlign="center" style={{ color : theme.palette.common.tgrey}} >
        {props.profile}
      </Typography>

      <Typography sx={{
        typography : {
          xs: "body1",
          sm : "h6",
          lg : "h5"
        },
      }} textAlign="center" style={{color : theme.palette.primary.main}}>
          My Resume
          <br/>
          <Button
            size="small"
            startIcon={<FileDownloadIcon />}
            href={props.resume.href}
            download={props.resume.download ?? "resume"}
          >
            Download
          </Button>

        <Link href="/resume">
          <Button
            size="small"
            startIcon={<VisibilityIcon />}
          >
            View
          </Button>
        </Link>
      </Typography>
      <Divider />
    </Stack>
  )
}