/**
 * Experience Card dealing with necessary animations
 * @author Muhammad Rowaha
 */
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography, Grow, Collapse, Box, useTheme, List, ListItem, ListItemText } from "@mui/material";
import * as React from "react";
import { ExperienceCardProps } from "./interface";
import Image from "next/image";
import { imageKitLoader } from "@/lib/loader/imagekit";

export default function ExperienceCard(props: ExperienceCardProps) {
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
        marginBlock: "1rem"
        }}
      >
        <Card>
          <CardMedia
            sx={{margin: "auto", display: "flex", justifyContent: "center", position: "relative", width: "50%", aspectRatio: "1 / 1"}}
          >
            <Image 
              src={props.data.img}
              loader={imageKitLoader}
              alt={`${props.data.company} logo`}
              fill
            />
          </CardMedia>
          <CardContent>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "4rem", marginBottom: "1rem"}}>
            <Typography variant="h6" textAlign="center" color={theme.palette.common.tred}>
              {props.data.position}
            </Typography>
            <Typography variant="body1" textAlign="center" color={theme.palette.common.tpurple}>
              @{props.data.company}
            </Typography>
            </Box>
            <Collapse in={expand} collapsedSize={0} sx={{maxHeight: 250, overflowY: "scroll"}}>
              <Typography variant="body2" color={theme.palette.common.tgrey}>From: {props.data.from}</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey}>To: {props.data.to}</Typography>
              <List>
                {
                  props.data.roles.map((role, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={<Typography variant="body2" color={theme.palette.common.tgrey}>{role}</Typography>} />
                    </ListItem>
                  ))
                }
              </List>
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