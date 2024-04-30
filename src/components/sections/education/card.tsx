/**
 * Education Card Component
 * @author Muhammad Rowaha
 */
import * as React from "react";
import { type EducationCardProps } from "./interface";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography, Grow, Collapse, Box, useTheme, List, ListItem, ListItemText, Divider } from "@mui/material";
import Image from "next/image";
import { imageKitLoader } from "@/lib/loader/imagekit";

export default function EducationCard(props: EducationCardProps) {

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
              alt={`${props.data.school} logo`}
              fill
            />
          </CardMedia>
          <CardContent>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "1rem"}}>
            <Typography variant="h6" textAlign="center" color={theme.palette.common.tred}>
              {props.data.degree}
            </Typography>
            <Typography variant="body1" textAlign="center" color={theme.palette.common.tpurple}>
              @{props.data.school}
            </Typography>
            </Box>
            <Collapse in={expand} collapsedSize={0} sx={{maxHeight: 250, overflowY: "scroll", overflowWrap: "break-word"}}>
              <Typography variant="body2" color={theme.palette.common.tgrey}>From: {props.data.from}</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey}>To: {props.data.to}</Typography>
              <Typography variant="body2" fontWeight="600" color={theme.palette.common.tgrey}>CourseWork:</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey}>
                {
                  props.data.coursework.join(",")
                }
              </Typography>
              <Typography variant="body2" fontWeight="600" color={theme.palette.common.tgrey}>Highlights:</Typography>
              <Typography variant="body2" color={theme.palette.common.tgrey}>
                {
                  props.data.highlights.join(",")
                }
              </Typography>
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