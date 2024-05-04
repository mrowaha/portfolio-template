/**
 * Jump To component renders useful page and external links
 * @author Muhammad Rowaha
 */
import { Button, Box, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { ButtonLink, JumpToProps } from "./interface";
import Link from "next/link";
import { Mail } from "@mui/icons-material";

function ContactLink(props: ButtonLink) {

  return (
    <IconButton size="small" sx={{...props.sx, borderRadius: 2, boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)"}} href={props.href}>
      {props.icon}
    </IconButton>
  )
}

export default function JumpTo(props: JumpToProps) {

  const theme = useTheme();

  return (
    <Box>
      <Stack gap={1} sx={{marginBlockEnd: "2rem"}}>
        <Typography color="#fff" variant="h5">Connect</Typography>
        <Divider orientation="horizontal" color={theme.palette.common.tred}/>
        <Stack direction="row" gap={1}>
        {
          props.buttonLinks.map(button => <ContactLink key={button.href} {...button} />)
        }
        </Stack>
      </Stack>
      <Stack gap={1}>
        <Typography color="#fff" variant="h5">Quick Links</Typography>
        <Divider orientation="horizontal" color={theme.palette.common.tred}/>
        {
          [
            {
              name: "Home",
              href:`/portfolio#home`
            },
            {
              name: "Experience",
              href:`/portfolio#experience`
            },
            {
              name: "Education",
              href:`portfolio#education`
            },
            {
              name: "Projects",
              href:`portfolio#projects`
            }
        ] .map(link => (
            <Link href={link.href}>
              <Typography color="#fff" variant="body2">{link.name}</Typography>
            </Link>
          ))
        }
  
        <Button
          href="mailto:ashfaqrowaha@gmail.com"
          sx={{textTransform: "none", color: "#fff", width: "fit-content"}}
          startIcon={<Mail style={{fill: "#ff3131"}} />}
        >
          <Typography>
            ashfaqrowaha@gmail.com  
          </Typography>
        </Button>

      </Stack>
    
    </Box>
  )
}