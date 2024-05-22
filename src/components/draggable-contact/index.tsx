/**
 * This draggable contact div accompanies the sections page
 * @author Muhammad Rowaha
 */
'use client';
import React from "react";
import {motion} from "framer-motion";
import { useTheme, IconButton, Stack, Badge } from "@mui/material";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/utils/icons";
import { JumpToProps } from "../contact/interface";
import { PanTool } from "@mui/icons-material";


export default function DraggableContact() {

  const contactButtonLinks : JumpToProps["buttonLinks"] = React.useMemo(() => {
    return [
      {
        icon: <LinkedinIcon style={{fill: "#fff"}} />,
        href: "https://www.linkedin.com/in/mrowaha",
        sx: {background: "#007bb6", ["&:hover"]: {background: "#007bb699"}}
      },
      {
        icon: <GithubIcon style={{fill: "#fff"}} />,
        href: "https://github.com/mrowaha",
        sx: {background: "#000000", ["&:hover"]: {background: "#00000099"}}
      }
    ]
  }, []);


  const theme = useTheme();

  // sections-paper div is server side rendered always
  const constraintRef = React.useRef<HTMLDivElement | null>(null);
  const [render, setRender] = React.useState(false);
  React.useEffect(() => {
    constraintRef.current = document.getElementById("sections-paper") as HTMLDivElement;
    setRender(true);
  }, []);

  if (!render) {
    return false;
  }

  return (
    <motion.div
      drag="y"
      dragConstraints={constraintRef}          
      initial={{
        padding : "5px",
        borderTopRightRadius : "20px",
        borderBottomRightRadius : "20px",
        display : "flex",
        flexDirection : "column",
        width: "fit-content",
        background: theme.palette.common["tgrey-light"],
      }}
    >
      <Stack gap={1} sx={{paddingBlock: "0.25rem", paddingInlineEnd: "0.25rem"}}>
        {
          React.Children.toArray(
            contactButtonLinks.map(props => (
              <IconButton size="small" sx={{...props.sx, borderRadius: 2, boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)"}} href={props.href}>
                {props.icon}
              </IconButton>
            ))
          )
        }
      </Stack>
    </motion.div>
  )
}