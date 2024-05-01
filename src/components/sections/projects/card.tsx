/**
 * Project Card JSX
 * @author Muhammad Rowaha
 */
import Link from "next/link";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography, Grow, Collapse, Box, useTheme, List, ListItem, ListItemText } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import { imageKitLoader } from "@/lib/loader/imagekit";
import { ProjectCardProps } from "./interface";

export default function ProjectCard(props: ProjectCardProps) {
  const [expand, setExpand] = React.useState<boolean>(false);
  const handleExpand = React.useCallback(() => {
    setExpand(prev => !prev);
  }, []);

  const theme = useTheme();

  return (
    <Grow in={props.grow} {...(props.growTimeout? {timeout: props.growTimeout} : {})}>
      <Paper sx={{
        border: "2px solid #ff3131",
        boxShadow: "0 0 20px var(--tred)",
        margin: "1rem",
        }}
      >
        <Card>
          <CardMedia
            sx={{margin: "auto", display: "flex", justifyContent: "center", position: "relative", width: "50%", aspectRatio: "1 / 1"}}
          >
            <Image 
              src={props.data.img}
              loader={imageKitLoader}
              alt={`${props.data.name} logo`}
              fill
            />
          </CardMedia>
          <CardContent>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "1rem"}}>
            <Typography variant="h6" textAlign="center" color={theme.palette.common.tred}>
              {props.data.name}
            </Typography>
            </Box>
            <Collapse in={expand} collapsedSize={0} sx={{maxHeight: 250, overflowY: "scroll", overflowWrap: "break-word"}}>
              <Typography variant="body2" color={theme.palette.common.tgrey} fontWeight="600">Description:</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey}>{props.data.description}</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey} fontWeight="600">Stack:</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey}>{props.data.stack.join(",")}</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey} fontWeight="600">Links:</Typography>
              {
                props.data.links?.map(link => (
                  <Link href={link.href} key={link.href}>
                    <Typography variant="body2" color={theme.palette.common.tpurple}>{link.name}</Typography>
                  </Link>
                ))
              }
            </Collapse>
          </CardContent>
          <CardActions sx={{display: "flex", justifyContent: "center"}}>
            <Button
              endIcon={expand ? <ArrowUpward style={{stroke: "#ff3131", fill: "#ff3131", strokeWidth: "0.25px"}} /> : <ArrowDownward  style={{stroke: "#ff3131", fill: "#ff3131", strokeWidth: "0.25px"}} />}
              sx={{textTransform: "none", color: "#ff3131"}}
              onClick={handleExpand}
            >
              Read {!expand ? "More" : "Less"}
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grow>
  )
}