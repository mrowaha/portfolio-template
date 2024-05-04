/**
 * Contact Component for rendering emailing actions and jump to links
 * @author Muhammad Rowaha
 */
'use client';
import { useMemo } from "react";
import JumpTo from "./jump-to";
import SendMessage from "./send-message";
import { JumpToProps } from "./interface";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/utils/icons";
import { Divider, Grid, Stack, useTheme } from "@mui/material";

export default function Contact() {

  const theme = useTheme();

  const contactButtonLinks : JumpToProps["buttonLinks"] = useMemo(() => {
    return [
      {
        icon: <LinkedinIcon style={{fill: "#fff"}} />,
        href: "https://www.linkedin.com/in/mrowaha",
        sx: {background: "#007bb6", ["&:hover"]: {background: "#007bb699"}}
      },
      {
        icon: <InstagramIcon style={{fill: "#fff"}} />,
        href: "",
        sx: {background: "#ff3131", ["&:hover"]: {background: "#ff313199"}}
      },
      {
        icon: <FacebookIcon style={{fill: "#fff"}} />,
        href: "",
        sx: {background: "#3b5998", ["&:hover"]: {background: "#3b599899"}}
      },
      {
        icon: <GithubIcon style={{fill: "#fff"}} />,
        href: "https://github.com/mrowaha",
        sx: {background: "#000000", ["&:hover"]: {background: "#00000099"}}
      }
    ]
  }, []);

  return (
    <Grid
      container
      sx={{
        background: `${theme.palette.common["tpurple-dark"]}`,
        padding: "3rem"
      }}
    >
      <Grid item xs={12} md={4}>
        <JumpTo
          buttonLinks={contactButtonLinks}
          textLinks={[]}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <SendMessage />
      </Grid>
    </Grid>
  )
}